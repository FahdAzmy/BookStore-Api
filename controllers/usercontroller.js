const asyncHandler=require("express-async-handler")
const bcrypt=require("bcryptjs")
const {valitedupdateuser,User}=require("../models/user")
const {veirfeyTokenAndAuthorizaiotn,veirfeyTokenAndAdmin} = require("../middlewares/virefeyToken")
const updatedUser=asyncHandler(async(req,res)=>{
     const {error}=valitedupdateuser(req.body)
    if(error){
        return res.status(400).json({message:error.details[0].message})
        }
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
            $set:{ emial:req.body.emial,
            userName:req.body.userName,
            password:req.body.password,
            
    }},{new:true}).select("-password")
    res.status(200).json(updateUser)
    })
const getUsers=asyncHandler(async (req,res)=>{
        const useres=await User.find().select("-password");
        res.status(200).json(useres);
    })
    const getUsersByid=asyncHandler(async (req,res)=>{
        const useres=await User.findById(req.params.id).select("-password");
        if(useres){
            res.status(200).json(useres);
        }else{
            res.status(404).json({meassage:"User not Found"})
        }
    })
    const deleteUser=asyncHandler(async (req,res)=>{
        const useres=await User.findById(req.params.id).select("-password");
        if(useres){
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json(useres);
        }else{
            res.status(404).json({meassage:"User not Found"})
        }
    })
    module.exports={updatedUser,getUsers,getUsersByid,deleteUser}