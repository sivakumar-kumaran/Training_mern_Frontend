const jwt=require('jsonwebtoken');
exports.protect=(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
      res.status(400).json({msg:"not authorized"})
    }
    try{
      //token=token.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    req.user=decode
    next()
    }catch(e){
        res.send("Invalid token")
    }
}
