const express = require('express');
const mobileDataRouter = express.Router();
const mobileDataHandler = require('../Controllers/mobileDataHandler');

mobileDataRouter.get('/data',mobileDataHandler.dataPrinter);
mobileDataRouter.get('/data/:id',mobileDataHandler.dataPrinterById)

module.exports=mobileDataRouter;