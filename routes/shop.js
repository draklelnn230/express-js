const path = require('path') // path
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    const products = adminData.products // Sharing Data Across Requests
    res.render('show', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        hasProduct: products.length > 0,
        activeShop: true,
        productCSS: true
    }); // path: Helping to route in a proper path
    // '../': go up one level
});

module.exports = router;