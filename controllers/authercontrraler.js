const {Author,validatedauthor,validatupdateuthor}=require("../models/Author")
const asyncHandler=require("express-async-handler")
module.exports.getAllAuthor=asyncHandler(
    async(req,res)=>{
        const {pageNumber}=req.query
        const authorPerpage=2
       const authorList=await Author.find().skip((pageNumber-1)*authorPerpage).limit(authorPerpage)
       res.json(authorList)})
  module.exports.getAuthorById=asyncHandler(async(req,res)=>{
    const author= await Author.findById(req.params.id)
         if(author){
             res.status(200).json(author)
         }else{
             res.status(404).json({massege:"Author not Found"})
        }
 })
 module.exports.adduthor=asyncHandler(async(req,res)=>{
    const {error}=validatedauthor(req.body)
    if(error){
      return res.status(400).json({massege:error.details[0].message})  }
    const author=new Author({
      
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      nation:req.body.nation,
      image:req.body.image,});
      const result=await author.save();
      res.status(200).json(result);
      })
      module.exports.updateauthor=asyncHandler(async(req,res)=>{
        const {error}=validatupdateuthor(req.body)
        if(error){
            res.status(400).json({massege:error.details[0].message})
        }
        const author=await Author.findByIdAndUpdate(req.params.id,{
        $set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            nation:req.body.nation,
            image:req.body.image }},{new:true},
    ); res.status(200).json(author);
    
    })
    module.exports.deleteauthor=asyncHandler(async(req,res)=>{
        const author=await Author.findById(req.params.id)
        if(author)
        {
        await Author.findByIdAndDelete(req.params.id)
        res.status(200).json({massege:"author has been delteted"})
    }
    else{
        res.status(404).json(massege="author not Found")
   }
    })