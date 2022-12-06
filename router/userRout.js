const express=require("express")
const router=express.Router()
const searchUserModel=require('../model/users')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.get("/",(req,res)=>{
    res.send("ok")
})
router.post("/",async(req,res)=>{
    const {username,email,PhoneNumber}=req.body
    const newUser=await searchUserModel.create({
        username:username,
        email:email,
        PhoneNumber:PhoneNumber
    })
    res.json({
        newUser
    })
})
module.exports=router