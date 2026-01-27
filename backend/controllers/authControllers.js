const b=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require('../modals/User')

exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser){
        res.status(400).json({message:"email already existing"})
    }
    const hashedPassword=await b.hash(password,10);
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({msg:"user created successfully"}) 
}
exports.login=async(req,res)=>{
    try{
    const {name,email,password}=req.body
    const existingUser=await User.findOne({email})
    if(!existingUser){
        res.status(400).send({message:"email not existing"})
    }
    const isMatching=await b.compare(password,
        existingUser.password)
    if(!isMatching){
         res.status(400).send({message:"password not existing"})
    }
    const token=jwt.sign(
        {id:existingUser._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

     res.json({token})
    }
    catch(err){
    res.status(500).send(err)
    }
}