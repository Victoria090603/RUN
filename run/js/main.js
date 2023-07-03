 
 $(document).ready(function(){
 
    var swiper = new Swiper(".swiper-about", {
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                spaceBetween: 40,
            },
           
            1024: {
                spaceBetween: 40,
            },
        },
    });

    // header scroll 
    function scrollHeader(){
        let header = $('header');
        let scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.addClass('scroll');
        } else{
            header.removeClass('scroll');
        } 
    }

    scrollHeader();

    $(window).scroll(function(){
        scrollHeader();
    });

    // menu anchor 
    $(".menu a, .logo").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        
        if($(window).width() > 767){
            $('body,html').animate({scrollTop: top - 97}, 700);
        } else{
            $('body,html').animate({scrollTop: top - 65}, 500);
        }
        if($('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }
    });


    // menu btn
    $('.btn-menu').click( function(){
        $('body').toggleClass('open-menu');
    });


    $(document).mouseup(function (e){
		var div = $(".btn-menu, .menu");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('body').removeClass('open-menu');
		}
	});

    
   
});

