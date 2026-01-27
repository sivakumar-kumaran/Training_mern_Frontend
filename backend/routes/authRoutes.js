const express=require("express")
const router=express.Router()
const {register,login}=require('../controllers/authControllers')

router.post('/create',register)
router.post('/login',login)
module.exports=router;