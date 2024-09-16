const mongoose=require("mongoose")
async function connectToDB(){
    try {
      await  mongoose.connect(process.env.MONGO_URl)
        console.log(("Conencted to MONGODB"))
    } catch (error) {
        console.log(("Connection Failed to mongoDB",error))
    }
}
// mongoose.connect(process.env.MONGO_URl)
// .then(()=>console.log("Conencted to MONGODB"))
// .catch((error)=>console.log("Connection Failed to mongoDB",error))
module.exports=connectToDB;