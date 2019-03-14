const express = require("express");
const router = express.Router();
const productController = require('../controller/login-controller');

router.post('/create',productController.create);

module.exports = router;