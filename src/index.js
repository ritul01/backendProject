// require('dotenv').config()
import { configDotenv } from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
// dotenv.cofig({
//     path:'./env'
// })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`servr is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongoDB connection failed!!! ",error);
})






// import express from "express";
// const app=express()
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("ERROR: ",(error)=>{
//             console.log("ERROR: ",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is not working on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })