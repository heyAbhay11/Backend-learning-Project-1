const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: String
    },
    followee: {
        type: String
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "accepted", "rejected"],
        message: "status can only be pending ,accepted or rejected"
    }
}, {
    timestamps: true
    // ya bata hai ki ya document kaab create hau tha database ma or last time kaab update hua tha
})

followSchema.index({ follower: 1, followee: 1 }, { unique: true })


const followModel = mongoose.model("follows", followSchema)

module.exports = followModel