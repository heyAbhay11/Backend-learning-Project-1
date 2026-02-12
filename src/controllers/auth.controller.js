const userModel = require("../models/user.models")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


async function loginController(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                email: email
            },
            {
                username: username
            }
        ]
    })
    if (!user) {
        return res.status(404).json({
            Message: "User not found"
        })
    }
    const hash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex")

    const isPasswordValid = hash === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            Message: "password is invalid"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)
    res.status(200).json({
        Message: "user loggedIn successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

async function registercontroller(req, res) {
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
}

module.exports = {
    loginController,
    registercontroller
}