const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config();
const app=express()
const searchUserModel=require('./model/users')
const port=process.env.PORT ||5000
const userrout=require('./router/userRout')
const uri=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@vineetha-cluster.inwcmoa.mongodb.net/searchfilter?retryWrites=true&w=majority`
mongoose.connect(uri).then(()=>console.log("connected to mongoose atlas"))
.catch((err)=>console.log(err))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',userrout)
app.listen(port,()=>console.log("server is running"))