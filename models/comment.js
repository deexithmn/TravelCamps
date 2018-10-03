var mongoose = require("mongoose");

var commentSchema = mongoose.Schema(
    {
        content:String,
        author:{
        id: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
        firstName:String
            
        }
    });
    
module.exports = mongoose.model("Comment",commentSchema);