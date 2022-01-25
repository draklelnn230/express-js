const express = require('express');

const path = require('path');

const productsController = require('../controllers/products')

const router = express.Router(); //

const products = []

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct)
  
router.post('/add-product', productsController.postAddProduct)

// /admin/add-product => POST
module.exports = router