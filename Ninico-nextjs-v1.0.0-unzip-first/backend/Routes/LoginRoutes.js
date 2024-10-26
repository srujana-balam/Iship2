const express = require('express');
const Route = express.Router();
const EntireController = require("../Controller/LoginController");

Route.get("/Testing-Api", EntireController.Test);
Route.post("/signup", EntireController.SignUp);
Route.post("/login", EntireController.Login);
Route.post("/forgot-password", EntireController.ForgotPassword);
Route.post("/reset-password", EntireController.ResetPassword);

module.exports = Route;