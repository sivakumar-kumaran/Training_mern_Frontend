const m=require("mongoose")
const taskSchema=m.Schema({
    title:{
        type:String,
        required:true,
    },
     description:{
        type:String,
        required:true,
    },
     status:{
        type:String,
        default:"pending"
    },
    user:{
        type:m.Schema.Types.ObjectId,
        ref:'Users'
    }
})

module.exports=m.model(`Tasks`,taskSchema);