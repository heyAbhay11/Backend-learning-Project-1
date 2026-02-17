const express = require("express")
const postRouter = express.Router()
const PostController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middelware")

postRouter.post("/",upload.single("image"), identifyUser,PostController.createPostController)

postRouter.get("/",identifyUser,PostController.getPostController)

// GET /api/posts/deatils/:postid
// return an detail about specefic post with the id also check whether they post belong to they user that is requesting
postRouter.get("/details/:postId",identifyUser,PostController.getPostDetailsconstroller)


module.exports = postRouter