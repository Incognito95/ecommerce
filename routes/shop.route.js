const { showProducts, showOneProduct } = require('../controllers/shop.controller');

module.exports = function (app) {
    app.get('/shop', showProducts);
    app.get('/show-product/:id', showOneProduct);
}