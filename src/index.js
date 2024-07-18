import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import express from "express";
import {app} from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("DB connection failed!!!",err)
})