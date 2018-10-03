var express = require("express");
var router = express.Router({mergeParams:true});
var Comment = require("../models/comment");
var Camp = require("../models/camps");
var middleware = require("../middleware/middleware.js");

router.post("/", middleware.isLoggedeIn, function(req,res){
    // console.log(req.user)
    Comment.create(
        {
            content:req.body.newComment,
            author:{
                id:req.user._id,
                firstName:req.user.firstName
            }
        },
        function(err,newComment)
        {
            if(err){
                console.log(err)
            }else{
                 Camp.findById(req.params.id,function(err,foundCamp)
                 {
                    if(err){
                        console.log(err)
                 }
                 else{
                        // newComment.author.id = req.user._id;
                        // newComment.author.firstName = req.user.firstName;
                        // console.log(newComment)
                        foundCamp.comments.push(newComment);
                        foundCamp.save(function(err,pushedCamp)
                        {
                            if(err){
                                console.log(err);
                            }else
                                {
                                    // console.log(pushedCamp);
                                res.redirect("/camps/"+req.params.id);
                                 }
                        });
                      }
                });
            }
        })
});


router.get("/new", middleware.isLoggedeIn, function(req, res) {
    Camp.findById(req.params.id,function(err,foundcamp){
        if(err){
            console.log(err)
        }else{
            res.render("comments/new",{camp:foundcamp}); 
        }
    })
});


// Edit form for the comments
router.get("/:comments_id/edit", middleware.isLoggedeIn, function(req, res) {
    Camp.findById(req.params.id,function(err,foundcamp){
        if(err){
            console.log(err)
        }else{
            
            Comment.findById(req.params.comments_id,function(err, foundComment){
                if(err){
                    res.redirect("camps/"+foundcamp.id);
                }else{
                     res.render("comments/edit",{camp:foundcamp, comment:foundComment}); 
                }
            });
           
        }
    })
});


// Update Comment
router.put("/:comments_id",middleware.isCommentOwnedBy, function(req,res){
   
    var updatedComment = {
        id:req.params.comments_id,
        content:req.body.updatedComment
        
    }
    //  console.log("from put :"+req.body.updatedComment);
   Comment.findByIdAndUpdate(req.params.comments_id, updatedComment, function(err, updatedComment){
       if(err){
           console.log(err);
       }else{
           res.redirect("/camps/"+req.params.id);
       }
   }) 
});


// Delete form for the comments

router.delete("/:comments_id",middleware.isCommentOwnedBy, function(req,res){
    Comment.findByIdAndRemove(req.params.comments_id, function(err, deletedComment){
        if(err){
            res.redirect("/camps/"+req.params.id);
        }else{
            res.redirect("/camps/"+req.params.id);
        }
    })
});





module.exports = router;