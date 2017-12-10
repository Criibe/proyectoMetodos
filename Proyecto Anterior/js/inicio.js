
var numVariables;
var numRestricciones;

$(document).ready(function (){

  $('select').material_select();

 $('#continuar1').click(function (e){

    numVariables = $('#variables').val();
    numRestricciones = $('#restriccion').val();

  /*
    AGREGAR EL NÚMERO DE FILAS SEGÚN RESTRICCIONES Y
    NUM VARIABLES
  */
    var filaRestriccion = "<div class=\"row\"> \n";

    for (i=0; i<numVariables; i++){

      var entradaVar = "\t<div class=\"input-field inline col s3 offset-s1 center-align\"> \n" + 
                       "\t\t<input type=\"text\" class=\"validate center-align\"> \n" + 
                       "\t\t\t<label>x" + (i+1) + "</label>\n" +
                       "\t</div> \n";

      filaRestriccion += entradaVar;

      if((i+1) != numVariables){

        //Agregar el símbolo de suma
        var entradaSuma = "\t<div class=\"inline col s1 center-align\">\n" +
                          "\t\t<label class=\"tam15 input-field inline\"> + </label>\n" + 
                          "\t</div>\n"

        filaRestriccion+=entradaSuma;
      }
    }
    //Agregar el Select

    var agregarSelect = "\t<div class=\"input-field inline col s2\">\n" + 
                  "\t\t<select class=\"center-align\">\n" +
                  "\t\t\t<option>Elige una opción</option>\n" +
                  "\t\t\t<option value=\"1\" selected=\"selected\">≤</option>\n" + 
                  "\t\t\t<option value=\"2\">≥</option>\n" + 
                  "\t\t\t<option value=\"3\">=</option>\n" + 
                  "\t\t</select>\n" + 
                  "\t</div>";

    filaRestriccion+=agregarSelect;

    //Agregar la variable final de igualdad
    var agregarZ = "\t<div class=\"input-field inline col s2\"> \n" + 
                   "\t\t<input type=\"text\" class=\"center-align\"> \n" +
                   "\t\t<label>Z</label> \n" + 
                  "\t</div>";

    filaRestriccion+=agregarZ;
    filaRestriccion+= "\n</div>";

    $('#contenedorRestricciones').append(filaRestriccion);

  /*
  */

    $('#segundo').show();
    e.preventDefault(); 
    goToByScroll($('#segundo').attr('id')); 
  });

 $('#continuar2').click(function (e){
                    $('#tercero').show();
                    e.preventDefault(); 
                    goToByScroll($('#tercero').attr('id')); 

                    $('#textoFuncionObjetivo').addClass("animated bounceInDown");
  });

  $('#continuar3').click(function (e){
                    $('#cuarto').show();
                    e.preventDefault(); 
                    goToByScroll($('#cuarto').attr('id')); 

                    $('#nombres').addClass("animated flip");
  });


	$('.target').pushpin({
		top: 0,
		bottom:560,
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