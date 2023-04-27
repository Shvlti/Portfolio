$(function(){



    $('.menu__btn').on('click', function() {
      $('.header-menu').toggleClass('header-menu--active')
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,               
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrows-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrows-next.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              
            }
          }
        ]    
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false,
      });

});