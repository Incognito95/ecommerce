const { admin, dashboard, showProducts, createProductForm, createProduct, editProduct, updateProduct, deleteProduct } = require('../controllers/admin.controller');
const isAuthorized = require('../middleware/is-Authorized');

module.exports = function(app) {
    app.get('/admin', isAuthorized, admin);
    app.get('/admin/dashboard', isAuthorized, dashboard);
    app.get('/admin/products', showProducts);
    app.get('/create-product', createProductForm);
    app.post('/create', createProduct);
    app.get('/edit-product/:id', editProduct);
    app.post('/edit-product/:id', updateProduct);
    app.get('/delete-product/:id', deleteProduct);
}