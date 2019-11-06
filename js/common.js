$(document).ready(function () {

    //tabs
    $(".tabs-list").click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(this).closest(".container").find(".tabs-drop-list").eq(index).addClass('active').siblings().removeClass('active');
        $('.team-slider, .reviews-slider').slick('setPosition');
    });

    //slider
    $(".team-slider, .reviews-slider").slick({
        slideToScroll: 1,
        slideToShow: 1,
        arrows: false,
        dots: true,
    });

    //mob menu
    $(".header-burger").click(function () {
        $(".header-right, .overlay").addClass('active');
        $.scrollLock(true);
    });
    $(".close, .overlay").click(function () {
        $(".header-right, .overlay").removeClass('active');
        $.scrollLock(false);
    });

    //scroll top
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        var scrollDiv = $(this);
        $(window).scroll(function() {
           $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
    $(".footer-top").scrollToTop();

});
