const express = require('express');

const path = require('path');

const rootDir = require('../util/path') // Need to comprehend

const router = express.Router(); //

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
  
router.post('/add-product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
});

// /admin/add-product => POST
module.exports = router;