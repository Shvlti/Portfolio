$(function(){

    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img  src="images/prev-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img  src="images/next-arrow.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
           
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          },
        ]
      });

});