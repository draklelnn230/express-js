const path = require('path') // path
const express = require('express');
const router = express.Router();
const RootDir = require('../util/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(RootDir, 'views', 'shop.html')); // path: Helping to route in a proper path
    // '../': go up one level
});

module.exports = router;