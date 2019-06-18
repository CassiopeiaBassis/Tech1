$(document).ready(function() {
	alert("Bienvenue");
	$( "p" ).on("click",function() {
    	$("p").addClass('red');
	});
});