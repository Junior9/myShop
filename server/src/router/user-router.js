const express = require("express");
const router = express.Router();
const userController = require('../controller/user-controller');
const bodyParser = require('body-parser');

router.get('/list',userController.list);
router.post('/login',bodyParser.json(),userController.login);
router.post('/create', bodyParser.json(),userController.create);
router.delete('/delete/:id',userController.delete);
router.put('/update/:id', bodyParser.json(),userController.update);
router.get('/:id',userController.get);

module.exports = router;