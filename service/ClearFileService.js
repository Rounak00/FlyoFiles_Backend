const fs = require("fs");
const path = require("path");
const FileSchema=require("../model/fileModel");

const directory = "uploads";

const ClearFileService=async ()=>{
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(directory, file), (err) => {
            if (err) throw err;
          });
        }
      });

      try{
       await  FileSchema.deleteMany({})
      }catch(err){
        console.log(err.message);
      }

}

module.exports=ClearFileService;
