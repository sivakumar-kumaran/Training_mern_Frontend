const express=require("express")
const router=express.Router()
const {createTask,getTask,getTaskById,updateTaskById }=require('../controllers/taskControllers')
const {protect} =require('../middleware/authMiddleware')
router.post('/createTask',protect,createTask)
router.get('/getTask',getTask)
router.get('/getTask/:id',protect,getTaskById)
router.put('/updateTask/:id',protect,updateTaskById)
module.exports=router;