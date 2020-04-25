const db = require('../config/sql');

const bcryptjs = { compareSync } = require('bcryptjs');

exports.login = function(req, res) {
    res.render('login', {'title': 'Login'});
}

exports.loginCheck = function(req, res, next) {
    db.query(`SELECT id, password FROM hasher WHERE username = ?`, [req.fields.username],function(err, results) {
        console.log(results.length);
        if(err) {
            throw err;
        } else {
            if(results.length === 1) { // check if theirs a user
                // true or false depending on the typed password matches with what we have in the database
                if(compareSync(req.fields.password, results[0].password)) {
                    // create session
                    req.session.isLoggedIn = true;
                    res.redirect('/admin');
                } else {
                    req.flash('error', 'Username and password you typed is incorrect!');
                    res.redirect('/login');
                }
            } else {
                req.flash('error', 'Username and password you typed is incorrect!');
                res.redirect('/login');
            }
        }
    })
}