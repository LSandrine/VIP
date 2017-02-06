  // ////////////////////////////////////////////// C L I E N T
module.exports.Client = function(request, response){
   response.title ="Client"
   response.render('client', response);
};
