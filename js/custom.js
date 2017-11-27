$(function () {
    //scroll
    new WOW().init();
});

$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* Team*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});

/*OWL carousel TESTIMONIALS*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });
});

/* Counter */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

/* Clients */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

/* Navigation */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

/* Smooth scrolling */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/* Close mobile menu on click*/
$(function () {
    $(".navbar-collapse ul li a").on("click", function () {
        $(".navbar-toggle").click();
    });
});