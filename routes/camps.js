var express = require("express");
var router = express.Router({mergeParams:true});
var Comment = require("../models/comment");
var Camp = require("../models/camps");
var middleware = require("../middleware/middleware.js");

// All camps
router.get("/",function(req,res){
    Camp.find({},function(err,allCamps){
        if(err){
            console.log(err);
        }else{
            res.render("camps/camps",{camps:allCamps});
        }
    });
    
});

// Create a new Camp ground

router.post("/", middleware.isLoggedeIn, function(req,res){
    var newCampGround = {
        name:req.body.campName,
        image:req.body.campImage,
        description:req.body.description,
        author:{
            id:req.user._id,
            firstName: req.user.firstName
        }
    }

    Camp.create(newCampGround,  function(err,campAdded){
                    if(err){
                        req.flash("error", "You need to be logged In!");
                    }else{
                    //   console.log(newCampGround)
                       res.redirect("/camps");
                    }
                });
});

// Render new grounds form

router.get("/new", middleware.isLoggedeIn, function(req,res){
    res.render("camps/addCamps");
});



router.get("/:id",function(req,res){
        Camp.findById(req.params.id).populate("comments").exec(function(err,foundCamp){
           if(err)
           {
               req.flash("error", "Can't find this on our Database. Sorry!")
               res.redirect("/");
           }
           else{
                 res.render("camps/show",{campfound:foundCamp, user:req.user}); 
           }
       });
});


// Update Camp Form
router.get("/:id/edit", middleware.isCampOwnedBy, function(req,res){
    Camp.findById(req.params.id, function(err, foundCamp){
        if(err){
            req.flash("error", "Can't find the camp to edit!");
            res.redirect("/camps/"+req.params.id);
        } else{
            res.render("camps/campsEdit", {camp:foundCamp});
        }
    });
});

// Put request
router.put("/:id", middleware.isCampOwnedBy, function(req,res){
    Camp.findByIdAndUpdate(req.params.id, req.body.changedCamp, function(err,updatedCamp){
        if(err){
            // req.flash("error", "Can't find the camp to edit!");
            res.redirect("/camps");
        }else {
            res.redirect("/camps/"+ req.params.id);
        }
    });
});

//  Delete request

router.delete("/:id", middleware.isCampOwnedBy, function(req,res){
    Camp.findByIdAndRemove(req.params.id, function(err,deleteCamp){
        if(err){
            res.redirect("/camps/"+req.params.id);
        }else {
            res.redirect("/camps")
        }
    });
});





module.exports = router;