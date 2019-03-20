const express = require("express");
const router = express.Router();
const productController = require('../controller/product-controller');
const bodyParser = require('body-parser');

router.get('/list',productController.list);
router.post('/create',bodyParser.json(),productController.create);
router.put('/update/:id',bodyParser.json(),productController.update);
router.delete('/delete/:id',productController.delete);
router.get('/:id',productController.get);
 
module.exports = router;