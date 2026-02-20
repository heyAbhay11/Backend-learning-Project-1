const express = require("express")
const statuscontroller = require("../controllers/status.controller")
const statusRouter = express.Router();
const identifyUser = require("../middlewares/auth.middelware")


statusRouter.get('/requests', identifyUser, statuscontroller.getPendingRequestController)

statusRouter.patch("/accept/:id", identifyUser,statuscontroller. acceptRequestController)

statusRouter.patch("/reject/:id", identifyUser, statuscontroller.rejectRequestController)

statusRouter.get("/friends",identifyUser,statuscontroller.getFriendsController)

module.exports = statusRouter;