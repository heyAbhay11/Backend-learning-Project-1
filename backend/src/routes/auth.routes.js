const express = require("express")
const authRoutes = express.Router()
const authController = require("../controllers/auth.controller")


authRoutes.post("/register", authController.registercontroller)

authRoutes.post("/login", authController.loginController)

module.exports = authRoutes