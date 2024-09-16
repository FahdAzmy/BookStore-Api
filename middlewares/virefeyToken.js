const jwt=require("jsonwebtoken")
function verifyToken(req,res,next){
const token=req.headers.token
if(token){
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=decoded;
    next();
  } catch (error) {

        res.status(401).json({massage:"invalid Token"})

  }
}else{
    res.status(401).json({massage:"no Token proivded"})
}
}
function veirfeyTokenAndAuthorizaiotn(req,res,next){
    verifyToken(req,res,()=>{
        if(req.users.id === req.params.id || req.user.isAdmin){
       next()
        }else{
            return res.status(403).json({massage:"You not allowed to uptade in this Profile"})

        }

    })
}
function veirfeyTokenAndAdmin(req,res,next){
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
         next()
        }else{
            return res.status(403).json({massage:"You not allowed to uptade in this Profile,Only Admin Allowed"})
         }

    })}

module.exports={verifyToken,veirfeyTokenAndAuthorizaiotn,veirfeyTokenAndAdmin}
