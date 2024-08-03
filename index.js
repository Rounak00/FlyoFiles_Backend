const express=require("express");
const PORT=require("./config/secret").PORT;
const connection=require("./utils/connection");
const routes=require("./router/router");
const cors = require("cors");
const path=require("path")
const cron = require('node-cron');
const ClearFileService=require("./service/ClearFileService");


global.appRoot=path.resolve(__dirname);
const app=express();
app.use(cors())
app.use("/",routes);




app.listen(PORT,()=>{
    console.log("App running at :",PORT);
    connection();
})



// Schedule the cron job
cron.schedule('* * 23 * * *', function() {
  ClearFileService();
});

