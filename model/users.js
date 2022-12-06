const mongoose=require("mongoose")
const Usershema=mongoose.Schema({
    username:{type:String},
    email:{type:String},
    PhoneNumber:{type:Number}
})
 
const Usermodel=mongoose.model('Searchuser',Usershema)
module.exports=Usermodel