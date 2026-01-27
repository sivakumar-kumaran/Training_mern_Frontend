const express=require("express")
const app=express()
const m=require("mongoose")
const dot=require("dotenv")
const cors=require("cors")

dot.config()

app.use(cors())
app.use(express.json())
m.connect(process.env.MONGO_URI)
.then(()=>{console.log("Success")})
.catch((err)=>{console.log(err)})

app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))

app.get('/api',(req,res)=>{
    res.send(`hi from express`);
})
app.post('/api',(req,res)=>{
    const a=req.body;
    res.send(a);
})
app.listen(4000,()=>{
    console.log(`server is running`);
})