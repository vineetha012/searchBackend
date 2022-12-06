const express=require("express")
const router=express.Router()
const searchUserModel=require('../model/users')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.get("/",(req,res)=>{
    res.send("ok")
})
router.post("/",async(req,res)=>{
    try {
        const {username,email,PhoneNumber}=req.body
        const newUser=await searchUserModel.create({
            username:username,
            email:email,
            PhoneNumber:PhoneNumber
        })
        res.status(200).json({
            newUser
        })
    } catch (error) {
        res.status(404).send(error)
    }
   
})
router.get("/:key",async(req,res)=>{
    console.log(req.params.key);
    try{
        let data=await searchUserModel.find(
            {
                "$or":[
                    {"username":{$regex:req.params.key}},
                    {"email":{$regex:req.params.key}}
    
                ]
            }
        )
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(400).send(err)
    }
    
})
module.exports=router