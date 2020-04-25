const db = require('../config/sql');

exports.admin = function (req, res) {
    res.render('admin', {'title': 'Admin'});
}

exports.dashboard = function (req, res) {
    res.render('dashboard', {'title': 'Dashboard'});
}

// create product form
exports.createProductForm = function (req, res) {
    res.render('create-product', {'title': 'Create Product'});
}

// create
exports.createProduct = function (req, res) {
    db.query(`INSERT INTO products SET name = ?, description = ?, price = ?, image = ?`, [req.fields.name, req.fields.description, req.fields.price, req.fields.image], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'You have created a product!');
            res.redirect('/create-product');
        }
    })
}

// read
exports.showProducts = function(req, res) {
    db.query(`SELECT id, name, description, price, image FROM products`, function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('admin-products', { 'title': 'Products', results });
        }
    })
}

// get
exports.editProduct = function(req, res) {
    db.query(`SELECT name, description, price, image FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('edit-product', { 'title': 'Edit', result: results[0] });
        }
    })
}

// update
exports.updateProduct = function (req, res) {
    db.query(`UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?`, [req.fields.name, req.fields.description, req.fields.price, req.fields.image, req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'You have updated a product!');
            res.redirect('/admin/products');
        }
    })
}

// delete
exports.deleteProduct = function (req, res) {
    db.query(`DELETE FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'You have deleted a product!');
            res.redirect('/admin/products');
        }
    })
}