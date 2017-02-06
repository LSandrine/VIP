var express       = require('express'),
   http           = require('http'),
   bodyParser     = require('body-parser'), //pour récupérer les résultats des post
   handlebars  	  = require('express-handlebars'), hbs;

var app = express();
app.set('port', 6800);
//pour body-parser (les POST..)
app.use(bodyParser.urlencoded({extended: true}));

// handlebars
hbs = handlebars.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//importation des routes
require('./router/router5')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});
