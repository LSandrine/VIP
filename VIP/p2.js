var http = require('http');

var serv = http.createServer( //création d'un serveur web
  function (req, res) { //callback sur les requêtes HTTP
      res.end('<b> coucou </b>');
      console.log('coucou');
  }
);
serv.listen(6800); //commence à accepter les requêtes

console.log('Serveur disponible à  http://localhost:6800');
