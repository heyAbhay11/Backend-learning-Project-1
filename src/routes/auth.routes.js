const express = require("express")
const userModel = require("../models/user.models")
const authRoutes = express.Router()
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


authRoutes.post("/register", async (req, res) => {
    const { username, email, password, bio, profileImage } = req.body

    const ifUserAlreadyExits = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (ifUserAlreadyExits) {
        return res.status(409).json({
            Message: ifUserAlreadyExits.email === email
                ? "Email already exists"
                : "Username already exists"

        })
    }


    const crypto = require("crypto")

    const hash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex")


    const user = await userModel.create({
        username, email, bio, profileImage, password: hash
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)
    res.status(201).json({
        Message: "User Registered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
})

authRoutes.post("/login", async (req, res) => {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                email:email
            },
            {
                username:username
            }
        ]
    })
    if(!user){
        return res.status(404).json({
            Message:"User not found"
        })
    }
 const hash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex")

    


})

module.exports = authRoutes