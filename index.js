window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0 ; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}

var Preloader = document.getElementById('loading');

        function myfunction(){
            Preloader.style.display = 'none';
        }

$(document).ready(function() {
    $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $(".btn-left").click(function() {
            $(".carousel").trigger('owl.prev');
        });
    
        $(".btn-right").click(function() {
            $(".carousel").trigger('owl.next');
        });
});

$(document).ready(function() {
    $(".carousel-in").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $(".btn-left-in").click(function() {
            $(".carousel-in").trigger('owl.prev');
        });
    
        $(".btn-right-in").click(function() {
            $(".carousel-in").trigger('owl.next');
        });
});


