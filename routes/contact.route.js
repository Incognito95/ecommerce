const { contact } = require('../controllers/contact.controller');

module.exports = function(app) {
    app.get('/contact', contact);
}