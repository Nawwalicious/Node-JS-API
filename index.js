const dataRouter=require('../Node JS API/Routes/mobileDataRouter');
const defaultRouter=require('../Node JS API/Routes/defaultHandlerRouter');

const express = require('express');
const app=express();

app.listen(7000,()=>{console.log("Server Running")});

app.use(express.json());

app.use(dataRouter);
app.use(defaultRouter)

