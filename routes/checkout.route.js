const { checkout } = require('../controllers/checkout.controller');

module.exports = function(app) {
    app.get('/checkout', checkout);
}