$(function () {
    $('#menu').mmenu();
    $('.nav li').hover(function () {
        $('ul:first', this).stop().slideDown();
    }, function () {
        $('ul', this).hide();
    });

    $('#searchformmobile').click(function () {
        $('.box-search-mobile').stop().slideToggle();
        return false;
    });
    $('.icon-cart').click(function () {
        window.location = '/addcart/';
    });

    $('.selectcat').click(function () {
        $('.categorypage').stop().slideToggle();
    });

    $('.btn-show-search-mobile').click(function () {
        $('.box-search-mobile-1').stop().slideToggle();
        return false;
    })

    $('.item-tab-detail-product').click(function () {
        $('.item-tab-detail-product').removeClass('active');
        $(this).addClass('active');
        $('.content-tab-pro').hide();
        $('#' + $(this).attr('data-tab')).stop().fadeIn();
    });

    $('.item-tab-product').click(function () {
        $('.item-tab-product').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.content-tab-pro').hide();
        $('#' + $(this).attr('data-tab')).stop().slideDown();
    });



    var divi = 0;
    $('.content-detail table').each(function () {
        var me = $(this);
        divi++;
        $('<div id ="div-scroll-' + divi + '" class="div-scroll" />').insertBefore(me);
        $("#div-scroll-" + divi).html(me);
    });

$(".menu-click-down").click(function(){
    
    $(".nav").stop().slideToggle(0);
    
});

    $("#button-btt").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
	
	
	var header_mobile  = $('.header-mobile').position();


    var menubar = $('.menubar').position();
    $(window).scroll(function (event) {
        if ($(this).scrollTop() > (menubar.top + 100)) {
            $('.menubar').css({'position': 'fixed', 'top': '0px', 'z-index': '9999', 'left': '0px', 'border-bottom': 'solid 1px #DAA33F', 'width': '100%'});
			$('.header-mobile').css({'position': 'fixed', 'top': '0px', 'z-index': '9999', 'left': '0px','width': '100%'});
        } else {
            $('.menubar').css({'position': 'relative', 'top': '0px','z-index': '9999','border-bottom': 'none'});
			$('.header-mobile').css({'position': 'relative', 'top': '0px','z-index': '9999'});
        }
    });

})