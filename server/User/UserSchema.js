const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:Array,
        required:true,
        default:[]
    }
})

module.exports=mongoose.model("User",userSchema);