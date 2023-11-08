const dataRouter=require('./Routes/mobileDataRouter');
const defaultRouter=require('./Routes/defaultHandlerRouter');
const userRouter=require('./Routes/userDetailsRouter');

const express = require('express');
const cors=require("cors");
const app=express();

const PORT=process.env.PORT||7000;

// app.use(cors({ origin: "*", })); 
//To FIX The Error
//{ blocked by CORS policy: No ['Access-Control-Allow-Origin'] header is present on the requested resource }

app.listen(PORT,()=>{console.log("Server Running")});

app.use(express.json());

app.use(dataRouter);
app.use(userRouter);
app.use(defaultRouter);


