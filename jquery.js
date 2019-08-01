$(document).ready(function() {
	$("#buttonSpecial").click(function(){
    $("#buttonSpecial").html("We have cookies!");
});
});

/* 
----------REMARQUES PERSONNELLES----------
- $(document).ready(function){} = empêcher tout code JQUERY de se lancer avant que la page ne soit totalement chargée 
- $("#...") est le sélecteur d'ID 
- .click(function())
	{

	}
	= quand on clique sur l'ID #buttonspecial, c'est la fonction html() qui s'exécute sur l'ID #windowDisappear

*/