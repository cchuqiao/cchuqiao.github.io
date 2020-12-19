$(window).scroll(function(){
    if ($(window).scrollTop() == 0) {
     $(".navbar").removeClass("fixed-top");
  } else {
     $(".navbar").addClass("fixed-top");
  }
 });

$(document).on('click', '.nav-item', function(){ 
    $('.nav-item').removeClass("active bg-dark");
    $('.nav-item > a').removeClass("text-light");
    $(this).addClass('active bg-dark');
    $(this).find('a').addClass("text-light");
});