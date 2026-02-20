const express = require("express")
const userController = require("../controllers/user.controller")
const userRouter = express.Router();
const identifyUser = require("../middlewares/auth.middelware")

// @route post /api/users/follow/:username
// @description follow a user
// @acess Private
userRouter.post("/follow/:username",identifyUser,userController.followUserController)


// @route post /api/users/unfollow/:username
// @description unfollow a user
// @acess Private
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)

module.exports = userRouter ;