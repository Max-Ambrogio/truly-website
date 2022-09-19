gsap.registerPlugin(ScrollTrigger);



gsap.from('.hero-copy h1' , {
    opacity: 0,
    y:-50,
    stagger:0.2,
    ease: Back.easeOut,
    duration:1,
    delay: 1,
})
gsap.from('.hero-copy p' , {
    opacity: 0,
    y:-40,
    stagger:0.2,
    ease: Back.easeOut,
    duration:1,
    delay: 1,
})
gsap.from('.hero-copy a' , {
    opacity: 0,
    y:-20,
    stagger:0.2,
    ease: Back.easeOut,
    duration:1,
    delay: 1,
})
gsap.from('.locate h2' , {
    scrollTrigger:{
        trigger:'.video',
        start: "bottom 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power3.out',
    duration:1,
})
gsap.from('.callout-copy' , {
    scrollTrigger:{
        trigger:'.callout',
        start: "90% 100%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:50,
    ease: 'power3.out',
    duration:1,
})
gsap.from('.trailer-mobile' , {
    scrollTrigger:{
        trigger:'.trailer',
        start: "90% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:50,
    ease: 'power3.out',
    duration:1,
})
gsap.from('.trailer-desktop' , {
    scrollTrigger:{
        trigger:'.trailer',
        start: "90% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:50,
    ease: 'power3.out',
    duration:1,
})
gsap.from('.shop-copy' , {
    scrollTrigger:{
        trigger:'.shop',
        start: "90% 100%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:50,
    ease: 'power3.out',
    duration:1,
})
gsap.from('.images-row img' , {
    scrollTrigger:{
        trigger:'.shop',
        start: "90% 100%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.2,
    y:50,
    x:80,
    ease: 'back.out(1.7)',
    duration:.5,
})
gsap.from('.gallery-copy' , {
    scrollTrigger:{
        trigger:'.gallery',
        start: "10% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.2,
    y:50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.gallery-images .image' , {
    scrollTrigger:{
        trigger:'.gallery',
        start: "40% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.2,
    y:50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.about-truly_copy' , {
    opacity:0,
    stagger:0.2,
    y:50,
    ease: 'power4.out',
    duration:2,
})
gsap.from('.dreamers-copy' , {
    scrollTrigger:{
        trigger:'.about-dreamers',
        start: "40% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.about-dreamers img' , {
    scrollTrigger:{
        trigger:'.about-dreamers',
        start: "40% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    x:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.tru-niverse h2' , {
    scrollTrigger:{
        trigger:'.tru-niverse',
        start: "10% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.truniverse-copy .copy-left .left' , {
    scrollTrigger:{
        trigger:'.tru-niverse',
        start: "30% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger: 1.2,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.truniverse-copy .copy-left img' , {
    scrollTrigger:{
        trigger:'.tru-niverse',
        start: "30% 90%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger: 1.2,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.truniverse-copy .copy-right .right' , {
    scrollTrigger:{
        trigger:'.copy-left',
        start: "100% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.truniverse-copy .copy-right img' , {
    scrollTrigger:{
        trigger:'.copy-left',
        start: "100% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.about-trailer-desktop' , {
    scrollTrigger:{
        trigger:'.trailer-about',
        start: "100% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.about-trailer-mobile' , {
    scrollTrigger:{
        trigger:'.trailer-about',
        start: "100% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.LA-truly_copy h1' , {
    opacity:0,
    y:-50,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.LA-truly_copy p' , {
    opacity:0,
    y:-50,
    stagger:0.1,
    ease: 'power4.out',
    duration:1,
})
gsap.from('.jump-button' , {
    scrollTrigger:{
        trigger:'.LA-truly_copy',
        start: "50% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:{
        each:0.1,
        from:'center'
    },
    y:-50,
    ease: "power4",
    duration:.4,
})
gsap.from('.factory-highlights .left' , {
    scrollTrigger:{
        trigger:'.flavor-factory',
        start: "10% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: "power4",
    duration:1,
})
gsap.from('factory-highlights .right' , {
    scrollTrigger:{
        trigger:'.flavor-factory',
        start: "50% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: "power4",
    duration:1,
})
gsap.from('.menu-item' , {
    scrollTrigger:{
        trigger:'.menu-resturant',
        start: "5% 80%",
        // end:"top 0%",
        // markers: true,
    },
    stagger:.1,
    opacity:0,
    y:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.live-events' , {
    scrollTrigger:{
        trigger:'.events',
        start: "5% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.hours-copy li' , {
    scrollTrigger:{
        trigger:'.hours',
        start: "60% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.contact-copy h3' , {
    scrollTrigger:{
        trigger:'.contact',
        start: "40% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.contact-copy p' , {
    scrollTrigger:{
        trigger:'.contact',
        start: "40% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.contact-copy a' , {
    scrollTrigger:{
        trigger:'.contact',
        start: "40% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.contact-social img' , {
    scrollTrigger:{
        trigger:'.contact',
        start: "40% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.rules' , {
    scrollTrigger:{
        trigger:'.taproom-rules',
        start: "0% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})
gsap.from('.taproom-rules h2' , {
    scrollTrigger:{
        trigger:'.taproom-rules',
        start: "0% 80%",
        // end:"top 0%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    ease: "power4.out",
    duration:1,
})