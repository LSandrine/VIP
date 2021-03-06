var HomeController = require('../controllers/HomeController4');
var ClientController = require('../controllers/ClientController5');
var ArticleController = require('../controllers/ArticleController4');

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', HomeController.Index);
// client
    app.get('/client', ClientController.Client);
    app.get('/ajoutClient', ClientController.AjouterPersonne);
    app.post('/afficheClient', ClientController.AffichePersonne);
// article
    app.get('/article', ArticleController.Article);



  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
