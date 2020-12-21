$(window).scroll(function(){
    if ($(window).scrollTop() == 0) {
     $(".navbar").removeClass("fixed-top");
  } else {
     $(".navbar").addClass("fixed-top");
  }
 });

//navbar visual controls on click
$(document).on('click', '.nav-item', function(){ 
    $('.nav-item').removeClass("active bg-dark");
    $('.nav-item > a').removeClass("text-light");
    $(this).addClass('active bg-dark');
    $(this).find('a').addClass("text-light");
});
//navbar visual controls on scroll
$(window).scroll(function(){
    var position = $(this).scrollTop();
    $('.navbar-section').each(function() {
        var target = $(this).offset().top + (-100);
        var id = $(this).attr('id');

        if (position >= target) {
            console.log(id);
            $('.nav-link').parent().removeClass('active bg-dark');
            $('.nav-link').removeClass('text-light');
            $('.nav-link[href=\\#' + id + ']').parent().addClass('active bg-dark');
            $('.nav-link[href=\\#' + id + ']').addClass('text-light');
        }
    })
});

//pop-up modal for artwork
$(document).on("click", '.art-image', function() {
    $('#show-img').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('.modal-body').find('p').html($(this).parent().parent().find('p').html());
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});