const dataRouter=require('./Routes/mobileDataRouter');
const defaultRouter=require('./Routes/defaultHandlerRouter');

const express = require('express');
const app=express();

const PORT=process.env.PORT||7000;

const getOrigin = () => {
    const port = process.env.PORT || 7000;
    return `http://localhost:${port}/`;
}

app.use(cors({ origin: getOrigin() })); 
//To FIX The Error
//{ blocked by CORS policy: No ['Access-Control-Allow-Origin'] header is present on the requested resource }

app.listen(PORT,()=>{console.log("Server Running")});

app.use(express.json());

app.use(dataRouter);
app.use(defaultRouter)

