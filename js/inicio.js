
var numVariables;
var numRestricciones;

$(document).ready(function (){

  $('select').material_select();

  /*Activar Animaciones*/

  radar = document.getElementById('radar');

lottie.loadAnimation({
  container: radar, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/radar.json' // the path to the animation json
});

  /********************/

 $('#continuar1').click(function (e){
    $('#segundo').show();
    e.preventDefault(); 
    goToByScroll($('#segundo').attr('id')); 
    $('#titlePrimero').addClass("animated fadeInUp");
    $('#textPrimero').addClass("animated fadeInUp");

  });

 $('#continuar2').click(function (e){
                    $('#tercero').show();
                    e.preventDefault(); 
                    goToByScroll($('#tercero').attr('id'));
                    $('#containerTercero').addClass("animated fadeInUp"); 


  });

  $('#continuar3').click(function (e){
                    $('#cuarto').show();
                    e.preventDefault(); 
                    goToByScroll($('#cuarto').attr('id')); 
                    $('#containerCuarto').addClass("animated fadeInUp"); 

  });

  $('#continuar4').click(function (e){
                    $('#quinto').show();
                    e.preventDefault(); 
                    goToByScroll($('#quinto').attr('id')); 
                    $('#containerQuinto').addClass("animated fadeInUp"); 

  });


  $('#continuar5').click(function (e){
                    $('#sexto').show();
                    e.preventDefault(); 
                    goToByScroll($('#sexto').attr('id')); 
                    $('#containerSexto').addClass("animated fadeInUp"); 

  });

  $('#continuar6').click(function (e){
                    $('#septimo').show();
                    e.preventDefault(); 
                    goToByScroll($('#septimo').attr('id')); 
                    $('#containerSeptimo').addClass("animated Septimo"); 

  });

  $('#continuar7').click(function (e){
                    $('#octavo').show();
                    e.preventDefault(); 
                    goToByScroll($('#octavo').attr('id')); 
                    $('#containerOctavo').addClass("animated fadeInUp"); 

  });

  $('#continuar8').click(function (e){
                    $('#octavo').show();
                    e.preventDefault(); 
                    goToByScroll($('#noveno').attr('id')); 
                    $('#nombres').addClass("animated flip");
  });

	$('.target').pushpin({
		top: 0,
		bottom:600,
		offset: 0
	});

	$('.target').each(function() {

    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
});

function goToByScroll(id){

    id = id.replace("link", "");

    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        300);
}

