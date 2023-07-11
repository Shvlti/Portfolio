gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !==1){
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero_section', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero_section',
            start: 'center',
            end: '720',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallerry_left .gallerry_item')
    itemsL.forEach(item => {
        gsap.fromTo(item, {x: -50,opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallerry_right .gallerry_item')
    itemsR.forEach(item => {
        gsap.fromTo(item, {x: 500,opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    
}