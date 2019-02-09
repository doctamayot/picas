$(document).ready(function(){
  $('#repe').hide();
  $('#numeros').hide();
  $('.moda').hide();
  var aleatorio = NumAleatorio();
   
   function noRepite(num1, num2){
    if(num1.indexOf(num2) < 0){
        return true;
    }else{
        return false;
    }

}



function NumAleatorio(){
    var aleatorio = Array();
    while(aleatorio.length < 4){
        var num2 = parseInt( Math.random() * 10);
        if(noRepite(aleatorio, num2)){
            aleatorio.push(num2);
        }
    }
    return aleatorio.join('');
}


    function logica( aleatorio, num){
    var picas = 0;
    var fijas = 0;
    for( var i in num){
        var posicion = aleatorio.indexOf( num[i]);
        if( posicion >= 0){
            if( posicion == i){
                fijas++;
            }else{
                picas++;
            }
        }
    }
    return {
        'picas': picas,
        'fijas': fijas
    };
}
function validar(){

  //Almacenamos los valores
  nombre=$('#numero').val();
  
   //Comprobamos la longitud de caracteres
  if (nombre.length==4){
    $('#numeros').hide();
    return true;
  }
  else {
    $('#numeros').show();
    return false;
}

}

function repetidos(num){
  num=$('#numero').val();
  var arrOri = num.split("");
    var limpio = [];
    var repe = [];
    for(i = 0; i < 4; i++){
      if(limpio.indexOf(arrOri[i])>-1){
          repe.push(arrOri[i]);
            
        }
        else{
        limpio.push(arrOri[i])
        }

    }
    if(limpio.length < 4){
    /*alert("No se pueden Numeros Repetidos")*/
    $('#repe').show();
    return false
  }
  else{
    $('#repe').hide();
    return true

  }
}

  $('.boton').click(function(){
    window.location=document.URL;

});
    console.log(aleatorio);

 $('#numero').keypress(function(e){
        if( e.keyCode == 13){
            if(validar()==false || repetidos() == false){
              
            }
            else {
            puntos = logica( aleatorio, $('#numero').val());
            $('#resultado').append('<tr><td>' + $('#numero').val() + '</td><td>' + puntos.picas + '</td><td>' + puntos.fijas + '</td></tr>' );
            $('#numero').val('');
            if( puntos.fijas == 4){
             $('.moda').show();
            }
            }
        }

    });






});
