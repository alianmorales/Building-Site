$('.hidden-menu').hide();

if ($(window).width() > 767){  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.hidden-menu').slideDown("slow"),
	    $('.navbar-fixed-top').addClass('floating');
            document.getElementById("nav-move").style.marginTop="43px";

        } else {
            $('.hidden-menu').slideUp("slow"),
	    $('.navbar-fixed-top').removeClass('floating');
            document.getElementById("nav-move").style.marginTop="10px";                         
        }
    });

}   

if ($(window).width() < 468){  
    $('.navbar-default .navbar-nav > li > a').click(function(){
        $(this).addClass("active"),
        $('.collapse').hide("fast"),
        $('.hamburguer a').toggleClass("open");
    });
}  

$(document).ready(function(){ 
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});

$(document).ready(function() {
  $('.hamburguer a').click(function(){
  $(this).toggleClass("open"),
  $('.collapse').fadeToggle("fast");
  });

});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



if ($(window).width() > 767){ 

    $(window).scroll(function() {

        if ($(this).scrollTop() > 600) {
        $('.navbar-default .navbar-nav  li:nth-child(2)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(2))').removeClass('active');

        } else {
            $('.navbar-default .navbar-nav  li:first-child').addClass('active'),
            $('.navbar-default .navbar-nav  li:not(:first-child)').removeClass('active');                        
        };


        if ($(this).scrollTop() > 1200) {
        $('.navbar-default .navbar-nav  li:nth-child(3)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(3))').removeClass('active');
        };


        if ($(this).scrollTop() > 2300) {
        $('.navbar-default .navbar-nav  li:nth-child(4)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(4))').removeClass('active');
        };

        if ($(this).scrollTop() > 3400) {
        $('.navbar-default .navbar-nav  li:nth-child(5)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(5))').removeClass('active');
        };

        if ($(this).scrollTop() > 4100) {
        $('.navbar-default .navbar-nav  li:nth-child(6)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(6))').removeClass('active');
        };

        if ($(this).scrollTop() > 4850) {
        $('.navbar-default .navbar-nav  li:nth-child(7)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(7))').removeClass('active');
        };

        if ($(this).scrollTop() > 5500) {
        $('.navbar-default .navbar-nav  li:nth-child(8)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(8))').removeClass('active');
        };



    });

}
