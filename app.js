var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Camp = require("./models/camps");
var User = require("./models/user");
var Comment = require("./models/comment");
var seedDB = require("./seeds");
var app = express();
var passport = require("passport");
var localStrategy = require("passport-local");
var authRoutes = require("./routes/auth.js");
var campsRoutes = require("./routes/camps.js");
var commentsRoutes = require("./routes/comments.js");
var methodOverride = require("method-override");
var flash = require("connect-flash");

// seedDB();
// mongoose.connect("mongodb://localhost/YelpCamp_app");

mongoose.connect("YOUR mlabs details");


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(flash());


app.use(methodOverride("_method"));

// Passport Configuration
app.use(require("express-session")({
    secret:"hello world!!@",
    resave:false,
    saveUninitialized:false
}));



app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});




app.get("/",function(req,res){
    res.render("home");
});


app.use(authRoutes);
app.use("/camps/:id/comments",commentsRoutes);
app.use("/camps",campsRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started!")
});
