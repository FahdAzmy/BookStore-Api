const experess=require("express")
const Router=experess.Router()
const {veirfeyTokenAndAuthorizaiotn,veirfeyTokenAndAdmin} = require("../middlewares/virefeyToken")
const {updatedUser,getUsers,getUsersByid,deleteUser}=require("../controllers/usercontroller")
Router.route("/:id").put(veirfeyTokenAndAuthorizaiotn,updatedUser).get(veirfeyTokenAndAuthorizaiotn,getUsersByid).delete(veirfeyTokenAndAuthorizaiotn,deleteUser)
Router.get("/",veirfeyTokenAndAdmin,getUsers);
module.exports=Router 