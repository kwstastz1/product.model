const express = require('express');
const router = express.Router();

const productController = require("../controllers/product.controller");


router.get('/findAll', productController.findAll);
router.get('/findOne/:username', productController.findOne);
router.post('/create', productController.create);
router.patch('/update', productController.update);
router.delete('/delete/:username', productController.delete);

module.exports = router;