$(function(){

    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
      });

      $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
       
      });



});