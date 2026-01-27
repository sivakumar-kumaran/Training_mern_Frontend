const Task=require('../modals/Task')
exports.createTask=async(req,res)=>{
    try{
    const task=await Task.create({
    title:req.body.title,
    description:req.body.description,
    status:req.body.status||"pending",
    user:req.user.id
    })
    //const usertask=task.findO({user})
    res.status(201).json({msg:"Task created successfully"})  
   }
   catch(err){
    res.status(500).send(err)
   }
}
exports.getTask=async(req,res)=>{
    try{
    const userTask=await Task.find() //{user:req.user.id}
    res.status(200).json(userTask)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"something went wrong"});
    }
}
exports.getTaskById=async(req,res)=>{
try{
   const task=await Task.findOne({_id:req.params.id,user:req.user.id})
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
   res.status(200).json(task);
}catch(err){
    res.status(500).json({err})
}
}

exports.updateTaskById=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({
            _id:req.params.id,
             user:req.user.id
        },{
                title:req.body.title,
                body:req.body.description,
                status:req.body.status
            },{new:true})
            if(!task) {
                res.json({msg:"no task exists"})
            }
            res.status(200).json(task)
        }
    catch(err){
        res.status(500).json({msg:"failed"})
    }
}