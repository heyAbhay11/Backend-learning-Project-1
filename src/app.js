const express = require("express")
const app = express()
app.use(express.json())
const authRoutes = require("./routes/auth.routes")
app.use("/api/auth",authRoutes)
const cookieparser = require("cookie-parser")
app.use(cookieparser())


module.exports = app