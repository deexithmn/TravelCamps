var express = require("express");
var router = express.Router({mergeParams:true});
var User = require("../models/user")
var passport = require("passport")

router.get("/register", function(req,res){
    res.render("register")
})

// Sign - Up login

router.post("/register", function(req , res, next){
    var newUser = {
        username: req.body.username,
        firstName:req.body.firstName,
        lastName: req.body.lastName
    }
  
  
    User.register(newUser, req.body.password, function(err, createdUser)
    {
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        next();
        });
    },
     passport.authenticate('local', { 
        successRedirect: '/camps',
        failureRedirect: '/login' 
    })
);
            

// Login GET

router.get("/login", function(req,res){
    res.render("login");
});

// Login Post Request

router.post("/login", passport.authenticate("local",
    {
        successFlash: 'Welcome back!',
        successRedirect:"/camps",
        failureRedirect:"/login",
        failureFlash: 'Invalid username or password.'
        
    }));
    
    
// logout

router.get("/logout", function(req,res){
   
    req.logout();
    req.flash("success", "Logged you Out!");
    res.redirect('/'); 
});

function isLoggedeIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Log-In!")
    res.redirect("/login");
}

module.exports =  router;