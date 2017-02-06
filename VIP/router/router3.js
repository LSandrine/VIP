var HomeController = require('../controllers/HomeController3');
var ClientController = require('../controllers/ClientController3');
var ArticleController = require('../controllers/ArticleController3');

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', HomeController.Index);
// client
    app.get('/client', ClientController.Client);
// article
    app.get('/article', ArticleController.Article);



  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
