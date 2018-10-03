var mongoose = require("mongoose");

var CampSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Comment"
            }
        ],
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        firstName:String
    }
});

var Camp = mongoose.model("Camp",CampSchema);

module.exports = Camp;