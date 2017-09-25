function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 80 && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar ul li').removeClass("active");
            currLink.parent('li').addClass("active");
        }
        else{
            currLink.parent('li').removeClass("active");
        }
    });
}

$(function(){

    $("img.lazy").lazyload();

    window.sr = ScrollReveal();
    
    var hero = {
        origin   : "top",
        distance : "24px",
        duration : 1500,
        scale    : 1.05
    };

    var intro = {
        origin   : "bottom",
        distance : "64px",
        duration : 900,
        delay    : 500,
        scale    : 1
    };

    sr.reveal('.parallax-window > .container', intro);

    sr.reveal('.box', hero);

    $(".toTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(document).on("scroll", onScroll);

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 15
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $( ".nordent-staff" ).mouseenter( function(){
        $(this).find(".blackAndWhite").hide();
        $(this).find(".color").show();
        $('#nameTeam').html($(this).data('names'));
        $('#whatHeDoTeam').html($(this).data('whathedo'));
    });

    $( ".nordent-staff" ).mouseleave( function(){
        $(this).find(".color").hide();
        $(this).find(".blackAndWhite").show();
        document.getElementById("nameTeam").innerHTML = " ";
        document.getElementById("whatHeDoTeam").innerHTML = " ";

    });

    $('.parallax-window .mini-parallax-window').parallax({
        speed: 0.3  
    })
})