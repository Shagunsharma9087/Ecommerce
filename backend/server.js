const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const taskRoutes = require("./Routes/taskRoutes");
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://shagunsharma:Qym3RPaIrScIOEC7@cluster0.sw2kqrm.mongodb.net/Customer?retryWrites=true&w=majority&appName=Cluster0')
app.listen(3001,()=>{
    console.log("server is connected to 3001")
})
app.use("/",taskRoutes);