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
    $(".close").click(function () {
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

    $('.header-lang').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});
