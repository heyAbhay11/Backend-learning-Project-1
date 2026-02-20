const express = require("express")
const app = express()

const cookieparser = require("cookie-parser")

app.use(express.json())
app.use(cookieparser())


// require Routes
const authRoutes = require("./routes/auth.routes")
const postRoutes = require("./routes/post.routes")
const userRoutes = require("./routes/user.routes")
const statusRoutes = require("./routes/status.routes")
// use Routes
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/users", statusRoutes)

module.exports = app
