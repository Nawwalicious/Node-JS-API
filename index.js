const dataRouter=require('../Routes/mobileDataRouter');
const defaultRouter=require('../Routes/defaultHandlerRouter');

const express = require('express');
const app=express();

const PORT=process.env.PORT||7000;

app.listen(PORT,()=>{console.log("Server Running")});

app.use(express.json());

app.use(dataRouter);
app.use(defaultRouter)

