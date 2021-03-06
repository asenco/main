/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    /*var curImgId = 0;
    var numberOfImages = 5; // Change this to the number of background images
    window.setInterval(function() {
        $('header').fadeTo('slow', 1, function()
        {
            $(this).css('background-image', 'url("img/about/photo' + curImgId + '.jpg")');
            curImgId = (curImgId + 1) % numberOfImages;
        })
    }, 7.7777 * 1000);*/

    var numberOfImages = 5;
    var slides=[];
    for(var i=0;i<numberOfImages;i++){
        slides.push({
            src: 'img/about/photo' + i + '.jpg'
        });
    }


    $('header').vegas({
        slides:slides,
        animation: 'random'
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    var services = ["A", "B", "C"]
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
