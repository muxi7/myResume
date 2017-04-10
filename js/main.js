var header=document.querySelector('header');
var $header=$('header');

$(window).on('scroll',function(){
  var scrollTop=window.scrollY;
  if(scrollTop===0){
    $header.css({'background-color':'rgba(0,0,0,0)'});
  }else if(scrollTop>0){
    $header.css({'background-color':'rgba(0,0,0,0.25)'})
  }
})


$('.cover').on("mouseenter",function(e){
  e.stopPropagation();
  $(this).css({
    'background-color':'rgba(255,255,255,0.1)'
  });
  $(this).find('h3').stop().animate({
    'margin-top':150+'px'
  },300);
});

$('.cover').on("mouseleave",function(e){
  e.stopPropagation();
  $(this).css({
    'background-color':'rgba(0,0,0,0.25)'
  });
  $(this).find('h3').stop().animate({
    'margin-top':200+'px'
  },300);
});


$('.nav').on('click','a',function(e){
  e.preventDefault();
  e.stopPropagation();
  var target=e.currentTarget;
  var id=$(target).attr('href');
  $(target).parents('ul').find('a').css({'color':'white'});
  $(target).css({'color':'#E86767'});
  $(id).parent().children().css({'display':'none'});
  $(id).animate({'display':'block'},250);
})

function randNum(){
  return Math.round(Math.random()*10);
}

function getColor(num){
  switch(num){
    case 1:
      return '';
      break;
    case 2: 
      return '';
      break;
    case 3:
      return '';
      break;
    case 4: 
      return '';
      break;
    case 5:
      return '';
      break;
    case 6: 
      return '';
      break;
    case 7:
      return '';
      break;
    case 8: 
      return '';
      break;
    case 9:
      return '';
      break;
    case 10: 
      return '';
      break;
  }
}