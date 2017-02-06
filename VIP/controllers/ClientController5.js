  // ////////////////////////////////////////////// C L I E N T
module.exports.Client = function(request, response){
   response.title ="Client"
   response.render('client', response);
};


  // //////////////////////////A J O U T E R   D E S    C L I E N T S
module.exports.AjouterPersonne = 	function(request, response){
   response.title = 'Ajouter des personnes';
   console.log("passe");
   response.render('saisieClient', response);
} ;


  // ////////////////A F F I C H E   N O M   D E S    C L I E N T S
module.exports.AffichePersonne = function(request, response){
   response.title = 'Nouvelles personnes';
   var nom = request.body.nom;
   response.nom=nom;
   response.render('afficheClient', response);
} ;
