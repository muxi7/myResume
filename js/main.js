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

// $('.cover').on("mouseenter",function(e){
//   e.stopPropagation();
//   $(this).css({
//     'background-color':'rgba(255,255,255,0.1)'
//   });
//   $(this).find('h3').stop().animate({
//     'margin-top':150+'px',
//   },300);
// });

// $('.cover').on("mouseleave",function(e){
//   e.stopPropagation();
//   $(this).css({
//     'background-color':'rgba(0,0,0,0.25)'
//   });
//   $(this).find('h3').stop().animate({
//     'margin-top':200+'px'
//   },300);
// });

$('.coverLayer').on("mouseenter",function(e){
  e.stopPropagation();
  $(this).css({
    'background-color':getColor(randNum())
  });
  $(this).prev('img').animate({
    'width':'110%',
    'height':'110%',
    'left':'-5%',
    'top':'-5%'
  },300);
  $(this).find('h3').stop().animate({
    'bottom':50+'px',
  },300);
  $(this).find('.btn').stop().animate({
    'bottom':10+'px',
  },300);
})

$('.coverLayer').on("mouseleave",function(e){
  e.stopPropagation();
  $(this).css({
    'background-color': 'rgba(0,0,0,0.25)'
  });
  $(this).prev('img').animate({
    'width':'100%',
    'height':'100%',
    'left':'0',
    'top':'0'
  },300);
  $(this).find('h3').stop().animate({
    'bottom':15+'px',
  },300);
  $(this).find('.btn').stop().animate({
    'bottom':-40+'px',
  },300);
})



function randNum(){
  return Math.floor(Math.random()*10);
}

function getColor(num){
  switch(num){
    case 0:
      return 'rgba(22, 160, 133,0.75)';  
      break;
    case 1:
      return 'rgba(46, 204, 113,0.75)';  
      break;
    case 2: 
      return 'rgba(52, 152, 219,0.75)'; 
      break;
    case 3:
      return 'rgba(241, 196, 15,0.75'; 
      break;
    case 4: 
      return 'rgba(231, 76, 60,0.75)'; 
      break;
    case 5:
      return 'rgba(211, 84, 0,0.75)'; 
      break;
    case 6: 
      return 'rgba(59,178,75,0.75)'; 
      break;
    case 7:
      return 'rgba(82,168,153,0.75)'; 
      break;
    case 8: 
      return 'rgba(26,188,156,0.75)'; 
      break;
    case 9:
      return 'rgba(238,157,168,0.75)'; 
      break;
    default: 
      return 'rgba(243,156,18,0.75)'; //ee9da8
      break;
  }
}