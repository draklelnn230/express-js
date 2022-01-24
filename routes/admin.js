const express = require('express');

const path = require('path');

const rootDir = require('../util/path') // Need to comprehend

const router = express.Router(); //

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});
  
router.post('/add-product', (req, res, next) => {
      products.push({title: req.body.title})
      res.redirect('/');
});

// /admin/add-product => POST
exports.routes = router;
exports.products = products;