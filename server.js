require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));


// middleware
require('./config/formidable')(app);
require('./config/session')(app);
require('./config/flash')(app);
require('./config/views')(app);

// routes
require('./routes/home.route')(app);
require('./routes/about.route')(app);
require('./routes/shop.route')(app);
require('./routes/contact.route')(app);
require('./routes/cart.route')(app);
require('./routes/checkout.route')(app);
require('./routes/confirmation.route')(app);
require('./routes/admin.route')(app);
require('./routes/login.route')(app);

// 404 Error
app.use(function(req, res) {
    res.status(404).render('error', {'title': 'Page Not Found'});
})

// port
app.listen(3001, () => {
    console.log('App is running!');
})