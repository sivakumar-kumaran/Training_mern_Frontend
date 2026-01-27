const m=require("mongoose")
const userSchema=m.Schema({
    name:{
        type:String
    },
     email:{
        type:String,
        required:true,
        unique:true
    },
     password:{
        type:String,
        required:true
    }
})

module.exports=m.model(`Users`,userSchema);