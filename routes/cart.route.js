const { cart, deleteFromCart } = require('../controllers/cart.controller');

module.exports = function(app) {
    app.get('/cart', cart);
    app.get('/delete-product-cart/:id', deleteFromCart);
}