
const tl3 = gsap.timeline()

// effect bubbles fly in from random direction
tl3.fromTo(
  ".callingCardBox",
  {
    z: 150, 
    y: ()=> window.innerHeight * (Math.random() > 0.5 ? -1 : 1),
    x: ()=> Math.random()*(window.innerWidth * 0.5 - document.querySelector('.callingCardBox').offsetWidth*0.5)* (Math.random() > 0.5 ? -1 : 1),
    transformOrigin:"50% 50%",
    opacity: 0
  }, 
  { 
    y: ()=> (Math.random() * 80 * (Math.random() > 0.5 ? -1 : 1)),
    x: ()=> (Math.random() * 80 * (Math.random() > 0.5 ? -1 : 1)),
    z: ()=> Math.random() * 1500,
    duration: 1,
    delay: ()=> Math.random() * 2,
    opacity: 1
  }
);

tl3.from(
  ".callingCardBoxMain",
  {
    z: 151, 
    y: ()=> window.innerHeight * (Math.random() > 0.5 ? -1 : 1),
    x: ()=> Math.random()*(window.innerWidth * 0.5 - document.querySelector('.callingCardBoxMain').offsetWidth*0.5)* (Math.random() > 0.5 ? -1 : 1),
    transformOrigin:"50% 50%",
    opacity: 0
  }, 
  "<"
);

// Preevious image covering fades out while covered

tl3.to(
  "#callingCardPreviousImage",
  {
    opacity: 0, duration: 1
  }, 
  "+=1"
);

tl3.to(
  "#callingCardImage",
  {
    opacity: 1
  }
)

tl3.to(
  '#goAdventure',
  {
    opacity: 0, duration:1
  },
  "<"
)


// After one second the effect bubbles fly away

tl3.to(
  ".callingCardBox",
  {
    z: 150, 
    y: ()=> window.innerHeight * (Math.random() > 0.5 ? -1 : 1),
    x: ()=> Math.random()*(window.innerWidth * 0.5 - document.querySelector('.callingCardBox').offsetWidth*0.5)* (Math.random() > 0.5 ? -1 : 1),
    transformOrigin:"50% 50%",
    duration: 3,
    opacity: 0
  },
  "+=1"
);

tl3.to(
  ".callingCardBoxMain",
  {
    z: 150, 
    y: ()=> window.innerHeight * (Math.random() > 0.5 ? -1 : 1),
    x: ()=> Math.random()*(window.innerWidth * 0.5 - document.querySelector('.callingCardBoxMain').offsetWidth*0.5)* (Math.random() > 0.5 ? -1 : 1),
    transformOrigin:"50% 50%",
    duration: 3,
    opacity: 0
  },
  "<"
);

tl3.to(
  "#earnYourCallsign",
  {
    opacity:1, duration: 1
  },
  "<"
)

// Dialouge box fades in and text scrolls

tl3.to(
  "#callingCardExpBox",
  {
    opacity: 1, duration: 2
  },
)

tl3.to(
  "#callingCardEvoText",
   {
    text: {value: "So what are you waiting for? Join us at design academy!"}, duration:3, delay: 1, ease: "none"
  },
  "+=1" 
);

tl3.to(
  "#callingCardEvoText",
   {
    text: {value: ""}, duration:3, delay: 1, ease: "none"
  },
  "+=1" 
);

tl3.to(
  "#callingCardExpBox",
   {
    opacity: 0, duration:3, delay: 1, ease: "none"
  },
  "+=1" 
);

tl3.to(
  "#callingCardImage",
  {
    opacity: 0,
    rotate: 720,
    scale: 2
  }, 
  '<'
)

tl3.to(
  "#earnYourCallsign",
  {
    opacity:0, duration: 1
  },
  "<"
)

ScrollTrigger.create({
  animation: tl3,
  trigger:"#callingCardPage",
  start: 'top 10%',
  end: '+1000',
  toggleActions: "restart pause resume reset"
})
