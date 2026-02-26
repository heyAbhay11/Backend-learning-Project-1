const express = require("express")
const postRouter = express.Router()
const PostController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middelware")


// @route: Post /api/posts [protected]
// @description: req.body = {caption,img-file}
postRouter.post("/",upload.single("image"), identifyUser,PostController.createPostController)


// @route: Get /api/posts/ [protected]
postRouter.get("/",identifyUser,PostController.getPostController)


// @route:  GET /api/posts/deatils/:postid
// @description: return an detail about specefic post with the id also check whether they post belong to they user that is requesting
postRouter.get("/details/:postId",identifyUser,PostController.getPostDetailsconstroller)


// @route:Post /api/posts/like/:postid
// @description:like the post with the id provided in the request params
postRouter.post("/like/:postId",identifyUser,PostController.likePostController)

module.exports = postRouter