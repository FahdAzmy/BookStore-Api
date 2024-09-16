const experess=require("express")
const joi=require("joi")
const {validateBook,Book,validatuptadeeBook}=require("../models/Book")
const Router=experess.Router()
const asyncHandler=require("express-async-handler")
const {updateBooks,createBooks,getAllBooks,getBookById,delteBooks}=require("../controllers/bookContraller")
Router.route("/").get(getAllBooks).post(createBooks)
Router.route(":id").get(getBookById).put(updateBooks).delete(delteBooks)




module.exports=Router