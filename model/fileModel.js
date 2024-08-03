const mongoose=require("mongoose");

const fileSchema=new mongoose.Schema({
  name:{type:String,required:true},
  path:{type:String,required:true},
  downloadContent:{type:Number,required:true,default:0}
},{timestamps: true})

module.exports=mongoose.model("FileSchema",fileSchema);