const followModel = require("../models/follow.model")


// GET INCOMING REQUESTS

        // follower - kisne request bheji
        // followee - kisko bheji

async function getPendingRequestController(req, res) {
    const myUsername = req.user.username

    const request = await followModel.find({
        followee: myUsername,
        status: "pending"
    })

    res.status(200).json({
        totalRequests: request.length,
        request
    })
}

// ACCEPT REQUEST
async function acceptRequestController(req, res) {
    const requestId = req.params.id
    const myUsername = req.user.username

    const request = await followModel.findOne({
        _id: requestId,
        followee: myUsername
    })

    if (!request) {
        return res.status(404).json({
            Message: "Request not found"
        })
    }

    request.status = "accepted"
    await request.save()

    res.status(200).json({
        Message: "Follow request accepted",
        request
    })
}

// REJECT REQUEST
async function rejectRequestController(req, res) {
    const requestId = req.params.id
    const myUsername = req.user.username

    const request = await followModel.findOne({
        _id: requestId,
        followee: myUsername
    })

    if (!request) {
        return res.status(404).json({
            Message: "Request not found"
        })
    }
    request.status = "rejected"
    await request.save()

    res.status(200).json({
        Message: "Follow request Rejected",
        request
    })
}


// GET FRIENDS (Only Accepted)
async function getFriendsController(req, res) {

    const myUsername = req.user.username

    const friends = followModel.find({
        followee: myUsername,
        status: "accepted"
    })
    res.status(200).json({
        totalFriends: friends.length,
        friends
    })
}

module.exports={getPendingRequestController,acceptRequestController,rejectRequestController,getFriendsController}