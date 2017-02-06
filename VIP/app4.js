var express         = require('express'),
   http = require('http'),
   handlebars  	  = require('express-handlebars'), hbs;

var app = express();
app.set('port', 6800);

// handlebars
hbs = handlebars.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//importation des routes
require('./router/router4')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});
