# Ecommerce - CRUD

This is an ecommerce site that I made using Node.js (Express / EJS), MySQL database & used the four basic functions of persistent storage known as CRUD such as retrieve instead of read, modify instead of update, or destroy instead of delete.

##### CRUD is done like so:
```javascript
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
```
As you can see above the first block of code renders the form, and then the following crud functionalities happen below by using the HTTP methods `GET` and `POST`.

#### After the data is inserted into the form then it will turn out to look like this in the admin panel:
```
![./images/admin.png];
```