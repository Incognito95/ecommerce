const db = require('../config/sql');

exports.showProducts = function(req, res) {
    db.query(`SELECT id, name, description, price, image FROM products`, function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('shop', { 'title': 'Shop', results });
        }
    })
}

exports.showOneProduct = function (req, res) {
    db.query(`SELECT name, description, price, image FROM products WHERE id = ?`, [req.params.id], function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('show-product', { 'title': 'Show Product', result:results[0] });
        }
    })
}