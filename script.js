$(window).scroll(function(){
    if ($(window).scrollTop() == 0) {
     $(".navbar").removeClass("fixed-top");
  } else {
     $(".navbar").addClass("fixed-top");
  }
 });

//navbar visual controls
$(document).on('click', '.nav-item', function(){ 
    $('.nav-item').removeClass("active bg-dark");
    $('.nav-item > a').removeClass("text-light");
    $(this).addClass('active bg-dark');
    $(this).find('a').addClass("text-light");
});

//pop-up modal for artwork
$(document).on("click", '.art-image', function() {
    $('#show-img').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});