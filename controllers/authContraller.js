const asyncHandler=require("express-async-handler")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {User,valitedloginuser,valiteduser}=require("../models/user")
const register=asyncHandler(async(req,res)=>{
    const {error}=valiteduser(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message})};
        let user=await User.findOne({emial:req.body.emial});
        if(user){
            return res.status(400).json({message:"this user already registered"}) };
          const salt= await bcrypt.genSalt(10);
          req.body.password=await bcrypt.hash(req.body.password,salt)
            user=new User({
                emial:req.body.emial,
                userName:req.body.userName,
                password:req.body.password,
                

            });
          const result=await user.save();
          const token=user.generatetoken()
          const{password, ...other} =result._doc;
          res.status(201).json({...other,token}) ; 
})
const login=asyncHandler(async(req,res)=>{
    const {error}=valitedloginuser(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message})};
        let user=await User.findOne({emial:req.body.emial});
        if(!user){
            return res.status(400).json({message:" invaild Emial"}) };
           
            const isPassowrdMatch=await bcrypt.compare(req.body.password,user.password)
            if(!isPassowrdMatch){
              return res.status(400).json({message:"invalid Password"})
            }
          const token=user.generatetoken()
          const{password, ...other} =user._doc;
          res.status(200).json({...other,token}) ; 
})
module.exports={register,login}