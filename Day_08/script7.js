
var tl = gsap.timeline()

tl.from("nav h1,nav h4,nav button",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})