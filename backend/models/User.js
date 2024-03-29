const mongoose=require("mongoose");
const {Schema}=mongoose;
const UserSchema= new Schema({
   
   
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('User',UserSchema )