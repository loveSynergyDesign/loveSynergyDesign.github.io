gsap.registerPlugin(ScrollTrigger);

//Flashing cursor
gsap.fromTo('#cursor', {autoAlpha: 0, x:10}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});


//timeline numberr 1 for the scrolling and fading text
const tl = gsap.timeline();
tl.to("#firstgrid2text", {text: {value: " <br>Hello. <br><br> This is your call to adventure! <br><br> Scroll down to go down the rabbit hole!"}, duration:5, delay: 1, ease: "none"});

tl.to("#scrollDownImage", {opacity: 1, duration:1, delay: 1, ease: "none"});


ScrollTrigger.create({
  animation: tl,
  trigger: "#textScrollPage",
  start: "top 1%",
  toggleActions: "restart pause resume reset"
});


const tl2 = gsap.timeline();
tl2.to('#jesterDialougeImage', {scaleX: -1, opacity: 1}, 1)
tl2.to("#jesterDialougeBox", {opacity:1, duration: 1}, 1)
tl2.to("#jesterDialougeText", {text: {value: "YO, glad to see you! Welcome to Design Academy!"}, duration:2, ease: "none"}, 2.5);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1, ease: "none"}, 5);
tl2.to('#jesterDialougeText', {text: {value: "I am Jester!"}, duration:1, ease: "none"}, 7)

tl2.to(
  '#jesterDialougeImage',
  {
    scaleX: -1,
    y: -window.innerHeight * 0.1,
    duration:0.2
  },
  7.2
);

tl2.to(
  '#jesterDialougeImage',
  {
    scaleX: 1,
    y: 0,
    duration:0.2
  },
  7.4
);

tl2.to(
  '#jesterDialougeImage',
  {
    scaleX: -1,
    y: -window.innerHeight * 0.1,
    duration:0.2
  },
  7.6
);

tl2.to(
  '#jesterDialougeImage',
  {
    scaleX: 1,
    y: 0,
    duration:0.2
  },
  7.8
);

tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1, ease: "none"}, 9);

tl2.to('#jesterDialougeText', {text: {value: "And I'll be your guide today!"}, duration:2, ease: "none"}, 11)

tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1, ease: "none"}, 15);




// // Character peaces out 
tl2.to("#jesterDialougeMainCharacter", {x:window.innerWidth*0.5, opacity: 0, duration:2, ease: "none"}, 17);
tl2.to("#jesterDialougeText", {text: {value: "Hey wait!"}, duration:0.5, ease: "none"}, 17);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1,  ease: "none"}, 19);
tl2.to("#jesterDialougeText", {text: {value: "Well no time to waste!"}, duration:1, ease: "none"}, 21);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1,  ease: "none"}, 23 );
tl2.to("#jesterDialougeText", {text: {value: "Whenever a scene is done, all the characters will fade away."}, duration:2,  ease: "none"}, 25);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1,  ease: "none"}, 28 );
tl2.to("#jesterDialougeText", {text: {value: "So that is when you should slide to the next scene!"}, duration:2,  ease: "none"}, 29);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1,  ease: "none"}, 32 );
tl2.to("#jesterDialougeText", {text: {value: "Let's get started!"}, duration:0.5,  ease: "none"},34);
tl2.to("#jesterDialougeText", {text: {value: ""}, duration:1,  ease: "none"}, 36 );
tl2.to('#jesterDialougeImage', {opacity: 0, scale: 2, rotate: 720}, 39)
tl2.to("#jesterDialougeBox", {opacity:0, duration: 2}, "<")







ScrollTrigger.create({
  animation: tl2,
  trigger: "#jesterDialouge",
  start: "top 1%",
  toggleActions: "restart pause resume reset"
});


