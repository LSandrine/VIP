var express         = require('express'),
   http = require('http');

var app = express();
app.set('port', 6800);

//importation des routes
require('./router/router2')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});
