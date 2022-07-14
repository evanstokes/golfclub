$(document).ready(function(){
  // scroll to top
    $('.scrollTop #scroll-up').click(function(){
        $('html, body').animate({
            scrollTop: $('#top').offset().top - 0
          }, 2500)
    });
    // Open Nav
    $('#toggleMenu').click(function(){
      $("#navMenu").toggleClass('show-menu');
  });

  //accordion
  $('.accordion-one').click(function(){
    $('.panel-one').slideToggle('400');
  });
  });
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.scrollTop a').css('opacity','1');
    } else {
        $('.scrollTop a').css('opacity','0');
    }
  });