const db = require('../config/sql');

exports.cart = function(req, res) {
    db.query(`SELECT id, name, price, image FROM products`, function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('cart', {'title': 'Cart', results });
        }
    })
}

exports.deleteFromCart = function(req, res) {
    db.query(`DELETE FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.redirect('/cart');
        }
    })
}