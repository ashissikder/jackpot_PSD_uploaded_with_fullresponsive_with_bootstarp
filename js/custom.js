$(document).ready(function(){
    // loading
    $('.preloader').delay(3000).fadeOut();

    // window scroll
    $(window).scroll(function(){
        // arrow scroll
        var scrolling =$(this).scrollTop();
        if(scrolling>400){
            $('.arrow').fadeIn();
        }
        else{
            $('.arrow').fadeOut();
        }
        // nav scroll
        if(scrolling>136){
            $('nav').addClass('nav-fix');
        }
        else{
            $('nav').removeClass('nav-fix');
        }
    });

    // arrow click
    $(".arrow").on('click',function(){
        $('html,body').animate({
            scrollTop:'0px',
        });
    });
    // navbar active
    $('.navbar .navbar-nav .nav-item').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    });

    //faq  accordian
    $('.accordion-item').on('click',function(){
        $(this).addClass('border').siblings().removeClass('border');
    });

    // banner type
    var typed = new Typed('.typed', {
        strings: ['play now'],
            loop:true, 
            typeSpeed:200,
            backSpeed:150,
            backDelay: 400,
    });
    // game slick
    $('.game-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'0px',
        arrows:false,
        autoplay:true,
        speed: 700,
        responsive:[
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    speed: 700,
                }
            },    
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                    speed: 700,
                }
            },    
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows:false,
                    speed: 700,
                }
            },    
        ]
    });
    // claim typed
    var typed = new Typed('.claim', {
        strings: ['claim now'],
            loop:true, 
            typeSpeed:200,
            backSpeed:150,
            backDelay: 400,
    });
    //price wow
    new WOW().init();

});