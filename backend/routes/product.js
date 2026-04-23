
const express = require('express');
// named routing
const { getProducts , getSingleProduct } = require('../controllers/productControllers');    
const router = express.Router();
// router is an object
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);


module.exports = router;