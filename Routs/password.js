const experess=require("express")
const Router=experess.Router()
const asyncHandler=require("express-async-handler")
const { getForgetPassowrd, sendForgortPassowrd, getResetPassowrdView, resetPassword } = require("../controllers/passwordController")
Router.route("/forgot-password").get(getForgetPassowrd).post(sendForgortPassowrd);
Router.route("/reset-password/:userId/:token").get(getResetPassowrdView).post(resetPassword)
module.exports=Router 

