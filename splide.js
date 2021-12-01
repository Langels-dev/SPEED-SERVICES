$(document).ready(function () {
    var splide = new Splide( '.splide', {
        type: 'loop',
        autoWidth: true,
        arrows: false,
        speed: 900,
        autoplay: true,
        interval: 10000,
        pagination: false,
        pauseOnHover: false,
    } ).mount();
    splide.on( 'moved', e => {
        $("#big-hero .bh-magic").removeClass("animate")
        $("#big-hero .splide__slide.is-active").find(".bh-magic").addClass("animate")
        $(".bh-magic h2").removeClass("text-title")
        $("#big-hero .splide__slide.is-active").find(".bh-magic h2").addClass("text-title")
        $(".bh-magic .text-info").removeClass("slide")
        $("#big-hero .splide__slide.is-active").find(".bh-magic .text-info").addClass("slide")
        var tl = gsap.timeline({defaults: {ease: "circ.inOut"}});
        tl.fromTo(".textAnimate", {y:'100', opacity:'0'}, {y:'0', opacity:'1', duration:0.6, delay:0.3});
        tl.fromTo(".pAnimate", {x:'-100', opacity:'0'}, {x:'0', opacity:1, duration:0.9})
    });
});