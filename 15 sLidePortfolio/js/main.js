document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centerSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidePerView: 1.75,
        slidesOffsetBefore: -125
    })
})
bindSwipers(slider1, slider2, slider3, slider4)

