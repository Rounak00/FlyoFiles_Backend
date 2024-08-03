
const FileSchema=require("../model/fileModel")
const APP_URL=require("../config/secret").APP_URL;

const controllers={
    async uploadImage(req,res){
        const fileOBJ={
            path:req.file.path,
            name:req.file.originalname
        }
        try{
          const file= await FileSchema.create(fileOBJ);
          res.status(200).json({path:`${APP_URL}download/${file._id}`})
        }catch(err){
            console.log(err.message);
            res.status(500).json({error:err.message})
        } 
    },
    async downloadImage(req,res){
        try{
           const file=await FileSchema.findById(req.params.fileId);
           file.downloadContent++;
           await file.save();

           res.download(file.path,file.name);
        }catch(error){
            res.status(500).json({error:err.message})
        }
    }
}

module.exports=controllers;