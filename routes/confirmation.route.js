const { confirmation } = require('../controllers/confirmation.controller');

module.exports = function(app) {
    app.get('/confirmation', confirmation);
}