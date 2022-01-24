const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); // It serves static file

app.use('/admin', adminRoutes) // Only routes starting with /admin will go into the admin routes
app.use(shopRoutes);

// Page not found: Code runs from top to bottom. If they don't find any routing that matches with adminRoutes, shopRoutes
// It will be taking the code below: res.status(404).send
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);

// next argument which turns out to a function you should call to forward a request to the next request to the next middleware