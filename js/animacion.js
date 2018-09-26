$(document).ready(function(){
    
    $('#1').attr("src", "celular/eventi_boton1.png");
    $('#2').attr("src", "celular/petmate_boton2.png");
    $('#3').attr("src","celular/esconia_boton2.png");
    $('#4').attr("src", "celular/bboat_boton2.png");

  
        
});
var del1 = 0,del2 = 0,del3 = 0,del4 = 0;  
function estatus(id){
  
  console.log(id)
  if ( id == "1") {
  del1 = 1;
  del2 = 0;
  del3 = 0;
  del4 = 0;
    $('#1').attr("src", "celular/eventi_boton1.png");
    $('#2').attr("src", "celular/petmate_boton2.png");
    $('#3').attr("src","celular/esconia_boton2.png");
    $('#4').attr("src", "celular/bboat_boton2.png");
  } 
  else if(id=="2") {
    del1 = 0;
    del2 = 1;
    del3 = 0;
    del4 = 0;
    $('#1').attr("src", "celular/eventi_boton2.png");
    $('#2').attr("src", "celular/petmate_boton1.png");
    $('#3').attr("src","celular/esconia_boton2.png");
    $('#4').attr("src", "celular/bboat_boton2.png");
  }
else if(id=="3") {
    del1 = 0;
    del2 = 0;
    del3 = 1;
    del4 = 0;
    $('#1').attr("src", "celular/eventi_boton2.png");
    $('#2').attr("src", "celular/petmate_boton2.png");
    $('#3').attr("src","celular/esconia_boton1.png");
    $('#4').attr("src", "celular/bboat_boton2.png");
  }
  else if(id=="4") {
    del1 = 0;
    del2 = 0;
    del3 = 0;
    del4 = 1;
    $('#1').attr("src", "celular/eventi_boton2.png");
    $('#2').attr("src", "celular/petmate_boton2.png");
    $('#3').attr("src","celular/esconia_boton2.png");
    $('#4').attr("src", "celular/bboat_boton1.png");
  }


}

 function encima(){
  if (del1 == 1){
    return 'celular/eventi_boton1.png';
  }else{
    return 'celular/eventi_boton1.png'
  }
  
}

  function fuera(){
    if (del1 == 1){
      return 'celular/eventi_boton1.png'
    }else{
      return 'celular/eventi_boton2.png'
    }
    
  }

function encima_pet(){
  if (del2 == 1){
    return 'celular/petmate_boton1.png';
  }else{
    return 'celular/petmate_boton1.png'
  }
  
}

  function fuera_pet(){
    if (del2 == 1){
      return 'celular/petmate_boton1.png'
    }else{
      return 'celular/petmate_boton2.png'
    }
    
  }

  function encima_esconia(){
  if (del3 == 1){
    return 'celular/esconia_boton1.png';
  }else{
    return 'celular/esconia_boton1.png'
  }
  
}

  function fuera_esconia(){
    if (del3 == 1){
      return 'celular/esconia_boton1.png'
    }else{
      return 'celular/esconia_boton2.png'
    }
    
  }

  function encima_bboat(){
  if (del4 == 1){
    return 'celular/bboat_boton1.png';
  }else{
    return 'celular/bboat_boton1.png'
  }
  
}

  function fuera_bboat(){
    if (del4 == 1){
      return 'celular/bboat_boton1.png'
    }else{
      return 'celular/bboat_boton2.png'
    }
    
  }


