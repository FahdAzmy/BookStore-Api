const joi= require("joi")
const mongoose=require("mongoose")
const bookscheama=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        mixlength:2000
        
    },author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Author"
    },description:{ type:String,
        trim:true,
        required:true,
        minlength:3
      
       },price:{
        type:Number,
        required:true,
        minlength:0
       },cover:{
        type:String,
        required:true,
        enum:["soft cover","hard cover"]


       }

},{timestamps:true}
)
const Book=mongoose.model("Book",bookscheama)
function validateBook(obj){
    const schema=joi.object({
        title:joi.string().trim().min(3).max(200).required(),
        author:joi.string().trim().min(3).max(200).required(),
        description:joi.string().trim().min(3).max(200).required(),
        price:joi.number().min(0).required(),
        cover:joi.string().valid("soft cover","hard cover").min(3).max(200).required(),
        
       })
      return schema.validate(obj)
};
function validatuptadeeBook(obj){
    const schema=joi.object({
        title:joi.string().trim().min(3).max(200),
        author:joi.string().trim().min(3).max(200),
        description:joi.string().trim().min(3),
        price:joi.number().min(0),
        cover:joi.string().valid("soft cover","hard cover").min(3).max(200),
        
       })
      return schema.validate(obj)
    };
module.exports={Book,validateBook,validatuptadeeBook}    