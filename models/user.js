var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")
var userSchema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        loginID:String,
        password:String
    });
    
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);