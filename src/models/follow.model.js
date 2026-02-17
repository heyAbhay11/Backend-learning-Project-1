const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,"follower is required"]
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,"follower is required"]
    }
},{
    timestamps:true
    // ya bata hai ki ya document kaab create hau tha database ma or last time kaab update hua tha
})

const followModel = mongoose.model("follows",followSchema)

module.exports = followModel