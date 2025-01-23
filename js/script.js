$(document).ready(function(){

  $("#boton-ojos").click(function(){
  $("#texto-ojos").fadeToggle(1000);
  });

  $("#boton-salir-ojos").click(function(){
  $("#texto-ojos").hide();
  });

  $("#boton-bigotes").click(function(){
  $("#texto-bigotes").fadeToggle(1000);
  });

  $("#boton-salir-bigotes").click(function(){
  $("#texto-bigotes").hide();
  });

  $("#boton-cola").click(function(){
  $("#texto-cola").fadeToggle(1000);
  });

  $("#boton-salir-cola").click(function(){
  $("#texto-cola").hide();
  });

  $("#boton-oreja").click(function(){
  $("#texto-oreja").fadeToggle(1000);
  });

  $("#boton-salir-oreja").click(function(){
  $("#texto-oreja").hide();
  });

  $("#boton-narizyboca").click(function(){
  $("#texto-narizyboca").fadeToggle(1000);
  });

  $("#boton-salir-narizyboca").click(function(){
  $("#texto-narizyboca").hide();
  });

  $("#boton-huella").click(function(){
  $("#texto-almohadilla").fadeToggle(1000);
  });

  $("#boton-salir-almohadilla").click(function(){
  $("#texto-almohadilla").hide();
  });

  $("#gato-principal").click(function(){
  $("#texto-ronroneo").fadeToggle(1000);
  });

  $("#boton-salir-ronroneo").click(function(){
  $("#texto-ronroneo").hide();
  });

  $("#gato-egipcio").click(function(){
  $("#texto-egipcio").fadeToggle(1000);
  });

  $("#boton-salir-egipcio").click(function(){
  $("#texto-egipcio").hide();
  });

  $("#gato-siames").click(function(){
  $("#texto-siames").fadeToggle(1000);
  });

  $("#boton-salir-siames").click(function(){
  $("#texto-siames").hide();
  });

  $("#gato-bengali").click(function(){
  $("#texto-bengali").fadeToggle(1000);
  });

  $("#boton-salir-bengali").click(function(){
  $("#texto-bengali").hide();
  });

  $("#boton-dieta").click(function(){
  $("#texto-dieta").fadeToggle(1000);
  });

  $("#boton-salir-dieta").click(function(){
  $("#texto-dieta").hide();
  });

  $("#boton-sueño").click(function(){
  $("#texto-sueño").fadeToggle(1000);
  });

  $("#boton-salir-sueño").click(function(){
  $("#texto-sueño").hide();
  });

  $("#boton-juego").click(function(){
  $("#texto-juego").fadeToggle(1000);
  });

  $("#boton-salir-juego").click(function(){
  $("#texto-juego").hide();
  });

  $("#boton-edad").click(function(){
  $("#texto-edad").fadeToggle(1000);
  });

  $("#boton-salir-edad").click(function(){
  $("#texto-edad").hide();
  });

  $("#boton-cariño").click(function(){
  $("#texto-cariño").fadeToggle(1000);
  });

  $("#boton-salir-cariño").click(function(){
  $("#texto-cariño").hide();
  });

	$("#gato-principal").click(musica);
		
var sound = false;		
function musica(){	

  if (!sound) {

    $("#musica")[0].play(); 
    $("#on").show();
	  $("#off").hide();
	 sound=true;
   
  } else{

 $("#musica")[0].pause(); 
	  $("#on").hide();
  $("#off").show();
	 sound=false;
  }	
}

});