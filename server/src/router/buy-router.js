const express = require("express");
const router = express.Router();
const buyController = require('../controller/buy-controller');
const bodyParser = require('body-parser');

router.post('/buy',bodyParser.json(),buyController.buy);
 
module.exports = router;