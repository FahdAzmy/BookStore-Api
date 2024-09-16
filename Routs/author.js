const experess=require("express")
const Router=experess.Router()
const {getAuthorById,getAllAuthor,deleteauthor,updateauthor,adduthor}=require("../controllers/authercontrraler")
Router.route("/").get(getAllAuthor).post(adduthor)
Router.route("/:id").get(getAuthorById).delete(deleteauthor).put(updateauthor)
module.exports=Router