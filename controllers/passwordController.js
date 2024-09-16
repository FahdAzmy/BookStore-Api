const asyncHandler=require("express-async-handler");
const {User}=require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const nodemailer=require("nodemailer")
 module.exports.getForgetPassowrd=asyncHandler ((req,res)=>{
    res.render('forget-password')
 });
 module.exports.sendForgortPassowrd=asyncHandler(async(req,res)=>{
   const user=await User.findOne({email:req.body.emial})
   if(!user){
     return res.status(404).json({message:"User NOt Found"})
}
const secret=process.env.JWT_SECRET_KEY + user.password
const token=jwt.sign({email:user.emial,id:user.id},secret,{
   expiresIn:"10m"
})
const link=`http://localhost:3000/password/reset-password/${user.id}/${token}`

res.json({massage:'click on the link',resetPasswordLink:link})

})
module.exports.getResetPassowrdView=asyncHandler(async(req,res)=>{
   const user=await User.findById(req.params.userId)
   if(!user){
      res.status(404).json({message:"User No t Found"})
}
const secret=process.env.JWT_SECRET_KEY + user.password
try {
   jwt.verify(req.params.token,secret)
   res.render('reset-password',{email:user.emial})
} catch (error) {
   console.log(error)
   res.json({massage:"Error"})
} 


})
module.exports.resetPassword=asyncHandler(async(req,res)=>{
   const user=await User.findById(req.params.userId)
   if(!user){
      res.status(404).json({message:"User Not Found"})
}
const secret=process.env.JWT_SECRET_KEY + user.password
try {
   jwt.verify(req.params.token,secret)
   const salt=await bcrypt.genSalt(10)
   req.body.password=await bcrypt.hash(req.body.password,salt)
   user.password=req.body.password
   await user.save()
   res.render('success-password')
} catch (error) {
   console.log(error)
   res.json({massage:"Error"})
} 


})