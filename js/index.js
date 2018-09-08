// Scroll to Top

(function ($){
    $('a[href^="#"]').on('click', function(event) {
	    var target = $(this.hash);
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
	});
}(jQuery));

// Show to-top after 800px

$(function(){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 800) { 
            $(".to_top:hidden").css('visibility','visible');   
            $(".to_top:hidden").fadeIn("slow");  
        } 
        else {     
            $(".to_top:visible").fadeOut("slow"); 
        }  
    });
});

// $(document).ready(function(){
//     $("hamburger").click(function(){
//         $(".header").toggleClass(".nav_open");
//     });
// });


// $(document).ready(function(){
//     $('.hamburger').on('click', function() {
//         if($('header').hasClass('nav_open')) $('.bmw-header').removeClass('nav_open');
//         else $('header').addClass('nav_open');
// });

$('.hamburger').on('click', function() {
    if($('header').hasClass('nav_open')) $('header').removeClass('nav_open');
    else $('header').addClass('nav_open');
});

// // Change the titles on scroll
// $(window).scroll(function() {

//     $('section').each(function() {
//         var self = $(this),
//             title = self.find('img').attr('alt');
//         if (self.is(':inView')) {
//             $('#title').find('h2').text(title);
//         }
//     });

// }).scroll();