$(function(){
  $('.fadein-one').delay(0).queue(function(){
    $(this).css('opacity','1');
    $(this).css('transform','translateY(0px)');
  },500);

  $('.fadein-seven').delay(800).queue(function(){
    $(this).css('opacity','1');
    $(this).css('transform','translateX(0)');
  });

  if($(window).width() < 768){
    $('.fadein-two,.fadein-three,.fadein-four,.fadein-five,.fadein-six,.fadein-eight').delay(400).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
  }else{
    $('.fadein-two').delay(600).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-three').delay(200).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-four').delay(400).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-five').delay(600).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-six').delay(800).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-eight').delay(800).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
  }

});
