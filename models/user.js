const mongoose=require("mongoose")
const joi=require("joi")
const jwt=require("jsonwebtoken")
const UserSchema=new mongoose.Schema({
    emial:{
        type:String,
        required:true,
       trim:true,
       minlength:5,
       maxlength:100,
       unique:true

    },userName:{
        type:String,
        required:true,
       trim:true,
       minlength:5,
       maxlength:100
       
    },password:{ type:String,
        required:true,
       trim:true,
       minlength:5
    },isAdmin:{
        type:Boolean,
        default:false
       
    },
},{timestamps:true})
UserSchema.methods.generatetoken=function(){
    const token=jwt.sign({id:this._id,isAdmin:this.isAdmin},process.env.JWT_SECRET_KEY);

}
const User=mongoose.model("User",UserSchema)
function valiteduser(obj){
    const schema=joi.object({
        emial:joi.string().trim().min(5).max(100).required().email(),
        userName:joi.string().trim().min(5).max(100).required(),
        password:joi.string().trim().min(5).required(),
    }); return schema.validate(obj)
}
function valitedloginuser(obj){
    const schema=joi.object({
        emial:joi.string().trim().min(5).max(100).required().email(),
        password:joi.string().trim().min(5).required(),
    }); return schema.validate(obj)
}
function valitedupdateuser(obj){
    const schema=joi.object({
        emial:joi.string().trim().min(5).max(100).email(),
        userName:joi.string().trim().min(5).max(100),
        password:joi.string().trim().min(5),
       
    }); return schema.validate(obj)
}
module.exports={User,valitedloginuser,valitedupdateuser,valiteduser}