let mainNav=document.querySelector('.main-nav');
let navbarToggle=document.getElementById('navbar-toggle');
let bannerHello = document.querySelector('.banner-hello');


window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"
})

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
        bannerHello.style.paddingTop = "0px";
    } else{
        mainNav.style.display="flex";
        this.classList.add('active');
        bannerHello.style.paddingTop = "150px";
    }
     
});

var amountScrolled = 200;

new WOW().init();


$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.sf-back-to-top').fadeIn('slow');
    } else {
        $('a.sf-back-to-top').fadeOut('slow');
    }
});

$('a.sf-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

// remove jquery project animations @ 769 size

$(window).bind("resize", function () {
  if($(this).width() < 769) {
    $('div').removeClass('bounceInLeft');
    $('div').removeClass('bounceInRight');
    $('div').removeClass('wow');
    $('div').removeClass('animated');
  }
}).trigger('resize');


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });