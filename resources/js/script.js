$(document).ready(function() {

    // Sticky Navigation
    $('.js--section-features').waypoint(function(direction) {
       if (direction == 'down') {
         $('nav').addClass('sticky');  
       } else {
            $('nav').removeClass('sticky');  
       }
    }, {
        offset: '60px;'    
    });
    
    
    // Scroll on Buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate( {scrollTop: $('.js--section-plans').offset().top}, 1000 );
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate( {scrollTop: $('.js--section-features').offset().top}, 1000 );
    });
    
    
    // Navigation Scroll
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });    
    
    // Animcation on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');        
    }, {
        offset: '50%'    
    });
    
    // Animcation on scroll
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');        
    }, {
        offset: '50%'    
    });
    
    // Animcation on scroll
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');        
    }, {
        offset: '50%'    
    });    
    
    // Animcation on scroll
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');        
    }, {
        offset: '50%'    
    });   
    
    
    // MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
       
        var nav = $('.js-main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if ( icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');            
        }
    });
    
    // GOOGLE MAPS
//    var map = new GMaps({
//        div: '.map',
//        lat: 39.051676,
//        lng: -94.4825029,
//        zoom: 15
//    });    
//    
//    map.addMarker({
//        lat: 39.051676,
//        lng: -94.4825029,
//        title: 'Kansas City',
//        infoWindow: {
//          content: '<p>Kansas City Headquarters</p>'
//        }
//    });
    
    var map = new GMaps({
        div: '.map',
        lat: 39.05,
        lng: -94.4825029,
        zoom: 15
    });    
    
    map.addMarker({
        lat: 39.05,
        lng: -94.4825029,
        title: 'Kansas City',
        infoWindow: {
          content: '<p>Kansas City Headquarters</p>'
        }
    });    
    
    
    
    
    
});