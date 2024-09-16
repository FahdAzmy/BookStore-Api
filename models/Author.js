const mongoose=require("mongoose")
const joi=require("joi")
const AuthorSchema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:200,
},lastName:{
    type:String,
    trim:true,
    required:true,
    minlength:3,
    maxlength:200,
},nation:{
    type:String,
    trim:true,
    required:true,
    minlength:3,
    maxlength:200,
},image:{
    type:String,
    default: "defult-avatar-png"
},
},{
    timestamps:true
})
function validatedauthor(obj){
    const schema=joi.object({
        firstName:joi.string().trim().min(3).max(200).required(),
        lastName:joi.string().trim().min(3).max(200).required(),
        nation:joi.string().trim().min(3).max(200).required(),
        image:joi.string(),
        
       })
      return schema.validate(obj)
};
function validatupdateuthor(obj){
    const schema=joi.object({
         firstName:joi.string().trim().min(3).max(200),
        lastName:joi.string().trim().min(3).max(200),
        nation:joi.string().trim().min(3).max(200),
        image:joi.string(),
        
       })
      return schema.validate(obj)
    };

const Author=mongoose.model("Author",AuthorSchema);
module.exports={Author,validatedauthor,validatupdateuthor}