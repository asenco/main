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
    
    //update properties from properties.json
    $.getJSON('content.json', function(data) {
        console.log('Json data:', data);
        $('meta[name=description]').attr('content', data.meta.description);
        $('meta[name=keywords]').attr('content', data.meta.keywords);
        $('meta[name=author]').attr('content', data.meta.author);
        $('#about_company_about').html(data.about_company.about);
        data.about_company.services.forEach(function(service){
            $('#about_company_services').append('<br><i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;'+service);
        });
        $('#about_propreitor_anjan_sen').html(data.about_propreitor_anjan_sen);
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
