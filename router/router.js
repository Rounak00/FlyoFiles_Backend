const express=require("express");
const controllers =require("../controller/controllers")
const upload=require("../middleware/upload")
const app=express.Router();

app.post("/upload",upload.single('file'),controllers.uploadImage);
app.get("/download/:fileId",controllers.downloadImage)
module.exports=app;