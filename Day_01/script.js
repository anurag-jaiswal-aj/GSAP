
// gsap.to("#box1",{
//     x:1000,
//     duration:4,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1000,
//     y:100,
//     duration:10,
//     delay:3
// })



// ---------------
 
// gsap.to("#box1",{
//     x:1600,
//     duration:4,
//     delay:1
// })

// gsap.from("#box2",{
//     x:1600,
//     duration:4,
//     delay:1
// })


// gsap.to("#box1",{
//     x:1000,
//     duration:4,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })


// gsap.from("h1",{
//     // color:"red",
//     y:100,
//     opacity:0,
//     duration:2,
//     delay:2,
//     stagger:0.5,
//     // stagger:-1,
// })



// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:1,
//     // repeat:-1,
//     yoyo:true,
// })





// gsap.to("#box1",{
//     x:1500,
//     backgroundColor:"red",
//     rotate:360,
//     duration:1.5,
//     delay:1,
    
// })

// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3",{
//     x:1500,
//     rotate:360,
//     backgroundColor:"black",
//     duration:1.5,
//     delay:4
// })


// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:1500,
//     rotate:360,
//     duration:1.5
// })

// tl.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:1.5
// })



var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from("h1",{
    y:200,
    opacity:0,
    duration:1,
    scale:0.2
})