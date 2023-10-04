const express = require('express');
const userDetailsRouter = express.Router();
const userDetailsHandler = require('../Controllers/userDetailsHandler');

userDetailsRouter.get('/user',userDetailsHandler.userDetails);

module.exports=userDetailsRouter;