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
router.get("/:key",async(req,res)=>{
    console.log(req.params.key);
    let data=await searchUserModel.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    res.json({
        data
    })
})
module.exports=router