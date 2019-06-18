$(document).ready(function() {
	monTexte="HELLO" 
	monTexte2="HELLO2"
	$("p").html(monTexte); 


	$( "p" ).on("click",function() {
    	if($( this ).hasClass('red')){
    		$( this ).html(monTexte);
    	}else{
    		$( this ).addClass('red');
    		$( this ).html(monTexte2);
    	}

    	$(this).html("HELLO"); 
  	});
});
