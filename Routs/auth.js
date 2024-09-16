const experess=require("express")
const Router=experess.Router()
const {login,register}=require("../controllers/authContraller")
Router.post("/register",register)
Router.post("/login",login)
module.exports=Router