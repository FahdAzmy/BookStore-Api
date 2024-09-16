const {validateBook,Book,validatuptadeeBook}=require("../models/Book")
const asyncHandler=require("express-async-handler")
const getAllBooks=asyncHandler(async(req,res)=>{
    const{minPrice,maxPrice}=req.query
    let books;
    if(minPrice && maxPrice){
        books=await Book.find({price:{$gte:minPrice,$lte:maxPrice}}).populate("author",["_id","firstName","lastName"])
  }else{
     books=await Book.find().populate("author",["_id","firstName","lastName"])
  }
    res.status(200).json(books)
})
const getBookById=asyncHandler(async(req,res)=>{
    const book=await Book.findById(req.params.id).populate("author",["_id,firstName,lastName"])

    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json(massege="Book not Found")

    }
})
const createBooks=asyncHandler(async(req,res)=>{
   
    const {error}=validateBook(req.body)
 
   if(error)
   {
    return res.status(400).json({ massege:error.details[0].message})
   }
   const book=new Book(
    {
    
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        cover:req.body.cover
       }
    );  const result=await book.save()
   res.status(201).json(result)
   
})
const updateBooks=asyncHandler(async(req,res)=>{
  
    const {error}=validatuptadeeBook(req.body)
    if(error)
    {
     return res.status(400).json({ massege:error.details[0].message})
    }
    const updatedbook=await Book.findByIdAndUpdate(req.params.id,{
        $set:{
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            price:req.body.price,
            cover:req.body.cover
            
        }
    },{new:true})
    res.status(200).json(updatedbook)
       
})
const delteBooks=asyncHandler(async(req,res)=>{
    const book=await Book.findByIdAndDelete(req.params.id)
     if(book){
         res.status(200).json({massege:"Book has been Deleted"})
     }else{
         res.status(404).json(massege="Book not Found")
 
     }
 })
 module.exports={updateBooks,createBooks,getAllBooks,getBookById,delteBooks}