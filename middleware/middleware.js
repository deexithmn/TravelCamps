var express = require("express");
var router = express.Router({mergeParams:true});
var Comment = require("../models/comment");
var Camp = require("../models/camps");


var middlewareObj = {};

middlewareObj.isLoggedeIn= function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login-In");
    res.redirect("/login");
}

middlewareObj.isCommentOwnedBy = function(req,res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comments_id, function(err, foundComment){
            if(err || !foundComment){
                req.flash("error", "This does not exist anymore!! Sorry!")
                req.redirect("camps/"+req.params.id);
            }else{
                if(foundComment.author.id.equals(req.user.id)){
                    next();
                }else{
                   req.flash("error", "Sorry, You do not have the access for this!")
                   res.redirect("camps/"+req.params.id);
           } 
            }
          
        });
    }else{
        req.flash("error", "Please Log-In!")
        res.redirect("/camps")
    }
}


middlewareObj.isCampOwnedBy = function(req, res, next){
   if(req.isAuthenticated()){
       Camp.findById(req.params.id, function(err,foundCamp){
           if(err || !foundCamp){
               req.flash("error", "This does not exist anymore!! Sorry!");
               res.redirect("/camps/"+req.params.id);
           }else{
               if(foundCamp.author.id.equals(req.user._id)){
                   next();
               }else{
                   req.flash("error", "Sorry, You do not have the access for this!")
                   res.redirect("/camps/"+req.params.id);
               }
           }
       });
   }else{
    req.flash("error", "Please Log-In!")
       res.redirect("/camps/"+req.params.id);
   }
}


module.exports = middlewareObj;