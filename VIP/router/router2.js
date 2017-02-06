

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', function(){console.log('racine')});
// client
    app.get('/client', function(){console.log('client')});
// article
    app.get('/article', function(){console.log('article')});



  app.get('*', function(){console.log('racinePoubelle')});
  app.post('*', function(){console.log('racinePoubelle')});

};
