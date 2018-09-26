
  $(function(){




 $("#boton").click(function(){
      
      $('.mask').show(500);
     });
    $("#boton1").click(function(){
    
      $('.mask').hide();
     });
    $("#boton2").click(function(){
    
      $('.mask').hide();
     });
    $("#boton3").click(function(){
    
      $('.mask').hide();
     });



  $('.mask1').toggle();
   $('#boton1').on('click',function(){
 $('.mask1').show(500);
     
   });

    $("#boton").on( "click", function() {
       //oculto mediante id
      $('.mask1').hide(); //muestro mediante clase
    });

    $("#boton2").on( "click", function() {
       //oculto mediante id
      $('.mask1').hide(); //muestro mediante clase
    });


    $("#boton3").on( "click", function() {
       //oculto mediante id
      $('.mask1').hide(); //muestro mediante clase
    });


 $('.mask2').toggle();
   $('#boton2').on('click',function(){

     $('.mask2').show(500);
   });
   
    $("#boton1").on( "click", function() {
       //oculto mediante id
      $('.mask2').hide(); //muestro mediante clase
    });

    $("#boton").on( "click", function() {
       //oculto mediante id
      $('.mask2').hide(); //muestro mediante clase
    });


    $("#boton3").on( "click", function() {
       //oculto mediante id
      $('.mask2').hide(); //muestro mediante clase
    });
     $('.mask3').toggle();
   $('#boton3').on('click',function(){

     $('.mask3').show(500);
   });
   
    $("#boton1").on( "click", function() {
       //oculto mediante id
      $('.mask3').hide(); //muestro mediante clase
    });

    $("#boton2").on( "click", function() {
       //oculto mediante id
      $('.mask3').hide(); //muestro mediante clase
    });


    $("#boton").on( "click", function() {
       //oculto mediante id
      $('.mask3').hide(); //muestro mediante clase
    });

$(".conocenoss").click(function() {
    $("html, body").animate({scrollTop: $("#nosot").offset().top}, 1000);});

     $(".portafolio").click(function() {
    $("html, body").animate({scrollTop: $("#portafolio").offset().top}, 1000);});

  $(".servicios").click(function() {
    $("html, body").animate({scrollTop: $("#serv").offset().top}, 1000);});

    $(".nosot").click(function() {
    $("html, body").animate({scrollTop: $("#nosot").offset().top}, 1000);});

      $(".socios").click(function() {
    $("html, body").animate({scrollTop: $("#socios").offset().top}, 1000);});

        $(".contactt").click(function() {
    $("html, body").animate({scrollTop: $("#contactt").offset().top}, 1000);});
         $("#conocenosss").click(function() {
    $("html, body").animate({scrollTop: $("#contactt").offset().top}, 1000);});




         
 


$('.navv').hide();

$( document ).ready(function() {    
    $(window).scroll(function () {     
        if ($('body').scrollTop() < 100) {
           $('.navv').fadeOut();

        } else if ($('body').scrollTop() > 100){
           
            $('.navv').fadeIn();

        }
    });
 });


});


