const express = require('express');
const mobileDefaultRouter = express.Router();
const mobileDefaultHandler = require('../Controllers/defaultHandler');

mobileDefaultRouter.get('/',mobileDefaultHandler.welcome);
mobileDefaultRouter.get('/*',mobileDefaultHandler.defaultHandler)

module.exports=mobileDefaultRouter;