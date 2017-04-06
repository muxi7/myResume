var header=document.querySelector('header');

// window.onscroll=function(){
//   header.style.backgroundColor='black';
// };
var scrollTop=window.scorllY;
if(scrollTop==0){
  header.style.backgroundColor='#000';

}else if(scrollTop>0){
  header.style.backgroundColor='black';
}

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


