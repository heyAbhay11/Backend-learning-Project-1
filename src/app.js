const express = require("express")
const app = express()

const cookieparser = require("cookie-parser")

app.use(express.json())
app.use(cookieparser())

const authRoutes = require("./routes/auth.routes")
const postRoutes = require("./routes/post.routes")

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

module.exports = app
