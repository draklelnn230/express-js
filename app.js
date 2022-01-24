const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Template engine
app.set('view engine', 'ejs')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); // It serves static file

app.use('/admin', adminData.routes); // Only routes starting with /admin will go into the admin routes
app.use(shopRoutes);

// Page not found: Code runs from top to bottom. If they don't find any routing that matches with adminRoutes, shopRoutes
// It will be taking the code below: res.status(404).send
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'});
})

app.listen(3000);

// next argument which turns out to a function you should call to forward a request to the next request to the next middleware in line