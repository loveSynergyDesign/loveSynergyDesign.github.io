gsap.registerPlugin(ScrollTrigger);


const tl5=gsap.timeline();

tl5.fromTo(
    '#friendsfirstwall',
    {
        opacity: 0,
        y: -window.innerHeight*0.4,
    },
    { 
        opacity: 1,
        y:0,
        duration: 1
    }

);

tl5.fromTo(
    '#friendssecondwall',
    {
        opacity: 0,
        y: -window.innerHeight*0.4,
    },
    { 
        opacity: 1,
        y: 0,
        duration: 1
    },
    0.1
);

tl5.fromTo(
    '#friendsthirdwall',
    {
        opacity: 0,
        y: -window.innerHeight*0.4,
    },
    { 
        opacity: 1,
        y: 0,
        duration: 1
    },
    0.2
);

tl5.fromTo(
    '#friendsfifthwall',
    {
        opacity: 0,
        y: -window.innerHeight*0.4,
    },
    { 
        opacity: 1,
        y: 0,
        duration: 1
    },
    0.3
);

tl5.fromTo(
    '#friendsfourthwall',
    {
        opacity: 0,
        y: -window.innerHeight*0.4,
    },
    { 
        opacity: 1,
        y: 0,
        duration: 1
    },
    0.4
);

 
tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"There may be times when you're faced by a brick wall"
  },
  0
);

 
tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  3
);

// friends break down the wall


tl5.to(
    '#friendsfirstwall',
    {
        y: window.innerHeight* 0.2,
        x: -window.innerWidth*0.3,
        duration:1,
        opacity: 0,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendssecondwall',
    {
        y: window.innerHeight* 0.1,
        x: -window.innerWidth*0.35,
        duration:1,
        opacity: 0,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendsthirdwall',
    {
        y: -window.innerHeight* 0.1,
        x: -window.innerWidth*0.3,
        duration:1,
        opacity: 0,
        rotate: 720
    },
    4
);


tl5.to(
    '#friendsfourthwall',
    {
        y: -window.innerHeight* 0.2,
        x: -window.innerWidth*0.3,
        duration:1,
        opacity: 0,
        rotate: 720
    },
    4
);


tl5.to(
    '#friendsfifthwall',
    {
        y: -window.innerHeight* 0.3,
        x: -window.innerWidth*0.2,
        duration:1,
        opacity:0,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight* 0.1,
        x: -window.innerWidth*0.1,
        duration:0.5
    },
    4
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y:  0,
        x: -window.innerWidth*0.1,
        duration:0.5
    },
    4
);

 
tl5.fromTo(
    '#friendsfriend1',
    {
        x: window.innerWidth* 0.6,
        y: window.innerHeight* 0,
        opacity: 0
    },
    {
        x: window.innerWidth* 0.45,
        y: -window.innerHeight * 0.1,
        duration: 0.3,
        opacity: 1,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendsfriend1',
    {
        x: window.innerWidth* 0.2,
        y: 0,
        duration: 0.3,
        rotate: 1440,
        scaleX: -1
    },
    4.3
);

tl5.fromTo(
    '#friendsfriend2',
    {
        x: window.innerWidth* 0.6,
        y: window.innerHeight* 0,
        opacity: 0
    },
    {
        x: window.innerWidth* 0.45,
        y: -window.innerHeight * 0.1,
        duration: 0.3,
        opacity: 1,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendsfriend2',
    {
        x: window.innerWidth* 0.2,
        y: 0,
        duration: 0.3,
        rotate: 1440,
        scaleX: -1,
    },
    4.3
);

tl5.fromTo(
    '#friendsfriend3',
    {
        x: window.innerWidth* 0.6,
        y: window.innerHeight* 0,
        opacity: 0
    },
    {
        x: window.innerWidth* 0.45,
        y: -window.innerHeight * 0.1,
        duration: 0.3,
        opacity: 1,
        rotate: 720
    },
    4
);

tl5.to(
    '#friendsfriend3',
    {
        x: window.innerWidth* 0.2,
        y: 0,
        duration: 0.3,
        rotate: 1440,
        scaleX: -1
    },
    4.3
);

tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"but new friends will always respond to a call!"
  },
  5
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.1
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    5.3
);

tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.5
);

tl5.to(
    '#friendsfriend1',
    {
        y: 0,
        duration:0.2
    },
    5.7
);

tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.9
);

tl5.to(
    '#friendsfriend1',
    {
        y: 0,
        duration:0.2
    },
    6.1
);

tl5.to(
    '#friendsfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.5
);

tl5.to(
    '#friendsfriend2',
    {
        y: 0,
        duration:0.2
    },
    5.7
);

tl5.to(
    '#friendsfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.9
);

tl5.to(
    '#friendsfriend2',
    {
        y: 0,
        duration:0.2
    },
    6.1
);

tl5.to(
    '#friendsfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.5
);

tl5.to(
    '#friendsfriend3',
    {
        y: 0,
        duration:0.2
    },
    5.7
);

tl5.to(
    '#friendsfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    5.9
);

tl5.to(
    '#friendsfriend3',
    {
        y: 0,
        duration:0.2
    },
    6.1
);

tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  7
);


// /////////////////////////////////////
// ////////////////////////////////
// Moving back to original positions
// ///////////////////////////////////
// /////////////////////////////////////

tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  -window.innerWidth*0.0375 + document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    7.6
  );
   
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: -window.innerWidth*0.025,
      duration: 1
    },
    8.5
  );
  
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -window.innerWidth*0.0125 - document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    9.5
  );
  
  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:"They may join you for this part of your journey,"
    },
    8.5
  );
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    10.5
  );

  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:""
    },
    11.5
  );
  

  tl5.to(
    '#friendsfriend1',
    {
        x: window.innerWidth* 0.15,
        duration:1
    },
    7.5
);

tl5.to(
    '#friendsfriend1',
    {
        x: window.innerWidth* 0.10,
        duration:1
    },
    8.5
);

tl5.to(
    '#friendsfriend1',
    {
        x: window.innerWidth* 0.05,
        duration:1
    },
    9.5
);

tl5.to(
    '#friendsfriend1',
    {
        x: 0,
        scaleX: 1,
        rotate: 0,
        duration:1
    },
    10.5
);

tl5.to(
    '#friendsfriend2',
    {
        x: window.innerWidth* 0.15,
        duration:1
    },
    7.5
);

tl5.to(
    '#friendsfriend2',
    {
        x: window.innerWidth* 0.10,
        duration:1
    },
    8.5
);

tl5.to(
    '#friendsfriend2',
    {
        x: window.innerWidth* 0.05,
        duration:1
    },
    9.5
);

tl5.to(
    '#friendsfriend2',
    {
        x: 0,
        scaleX: 1,
        rotate: 0,
        duration:1
    },
    10.5
);

tl5.to(
    '#friendsfriend3',
    {
        x: window.innerWidth* 0.15,
        duration:1
    },
    7.5
);

tl5.to(
    '#friendsfriend3',
    {
        x: window.innerWidth* 0.10,
        duration:1
    },
    8.5
);

tl5.to(
    '#friendsfriend3',
    {
        x: window.innerWidth* 0.05,
        duration:1
    },
    9.5
);

tl5.to(
    '#friendsfriend3',
    {
        x: 0,
        rotate: 0,
        scaleX: 1,
        duration:1
    },
    10.5
);

// ///////////////////////////
// ///////////////////////////
// ///////////////////////////
// Waddle to the river
// ///////////////////////////
// ///////////////////////////
// ///////////////////////////

tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    11.5
  );
  
  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:"but everyone's also on their own path of self-discovery,"
    },
    12.5
  );
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    12.5
  );
  
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    13.5
  );
  
  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:""
    },
    15
  );
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    14.5
  );


tl5.to(
    '#friendsfriend1',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    11.5
  );
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    12.5
  );
  
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    13.5
  );
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    14.5
  );


  tl5.to(
    '#friendsfriend2',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    11.5
  );
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    12.5
  );
  
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    13.5
  );
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    14.5
  );


  tl5.to(
    '#friendsfriend3',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    11.5
  );
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    12.5
  );
  
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    13.5
  );
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    14.5
  );

tl5.to(
    '#friendsfriend1',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    15.5
  );
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    16.5
  );
  
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    17.5
  );
  
  tl5.to(
    '#friendsfriend1',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    18.5
  );


  tl5.to(
    '#friendsfriend2',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    15.5
  );
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    16.5
  );
  
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    17.5
  );
  
  tl5.to(
    '#friendsfriend2',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    18.5
  );


  tl5.to(
    '#friendsfriend3',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    15.5
  );
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    16.5
  );
  
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    17.5
  );
  
  tl5.to(
    '#friendsfriend3',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    18.5
  );

  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 10,
      y: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=>  document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    15.5
  );

  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:"so stay kind and humble to those you meet every day"
    },
    18
  );
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    16.5
  );

  tl5.to(
    "#friendsAnimationLeftText",
    {
      opacity:1,
      duration: 1,
      text:""
    },
    21
  );
  
  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: -10,
      y: ()=>-document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      x: ()=> -document.querySelector("#friendsAnimationMainCharacter").offsetWidth*0.3,
      duration: 1
    },
    17.5
  );

  
  tl5.to(
    '#friendsAnimationMainCharacter',
    {
      rotate: 0,
      y: 0,
      x: 0,
      duration: 1
    },
    18.5
  );


  tl5.to(
    "#friendsriver",
    {
        x: window.innerWidth*0.05,
    },
    15.5
  );

  tl5.to(
    "#friendsriver",
    {
        opacity: 1,
        duration: 1
    },
    16.5
  );

  tl5.to(
    "#friendsriver",
    {
        x:0 ,
        duration: 3
    },
    16.5
  );

// //   ////////////////////////////
// //   Build the bridge together
// // //////////////////////////////


tl5.to(
    '#friendsAnimationMainCharacter',
    {
        scaleX: -1,
        rotate: -20,
        duration: 1
    },
    20.5
);

tl5.to(
    '#friendsfriend2',
    {
        scaleX: -1,
        rotate: -20,
        duration: 1
    },
    20.5
);

tl5.to(
    '#friendsfriend1',
    {
        rotate: 20,
        duration: 1
    },
    20.5
);

tl5.to(
    '#friendsfriend3',
    {
        rotate: 20,
        duration: 1
    },
    20.5  
);


// // ////////////////////////////////
// //  Building the bridge
// /////////////////////////////////
tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.5
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    21.7
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.9
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: 0,
        duration:0.2,
        rotate: 0
    },
    22.1
);

tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.5
);

tl5.to(
    '#friendsfriend1',
    {
        y: 0,
        duration:0.2
    },
    21.7
);

tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.9
);

tl5.to(
    '#friendsfriend1',
    {
        y: 0,
        duration:0.2,
        rotate: 0
    },
    22.1
);

tl5.to(
    '#friendsfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.5
);

tl5.to(
    '#friendsfriend2',
    {
        y: 0,
        duration:0.2
    },
    21.7
);

tl5.to(
    '#friendsfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.9
);

tl5.to(
    '#friendsfriend2',
    {
        y: 0,
        duration:0.2,
        rotate: 0
    },
    22.1
);

tl5.to(
    '#friendsfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.5
);

tl5.to(
    '#friendsfriend3',
    {
        y: 0,
        duration:0.2
    },
    21.7
);

tl5.to(
    '#friendsfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    21.9
);

tl5.to(
    '#friendsfriend3',
    {
        y: 0,
        duration:0.2,
        rotate: 0
    },
    22.1
);

tl5.to(
    '#friendsbridge',
    {
        y: -window.innerHeight * 0.3,
        x: -window.innerWidth * 0.55,
    },
    20.5
);

tl5.to(
    '#friendsbridge',
    {
        opacity: 1,
        duration: 1
    },
    22.1
);


tl5.to(
    '#friendsfriend2',
    {
        scaleX : 1,
        duration: 1
    },
    23.5
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        scaleX : 1,
        duration: 1
    },
    23.5
);

// // /////////////////////
tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.5
);

tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    24.7
);


tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.5
);

tl5.to(
    '#friendsfriend1',
    {
        y: 0,
        duration:0.2
    },
    24.7
);



tl5.to(
    '#friendsfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.5
);

tl5.to(
    '#friendsfriend2',
    {
        y: 0,
        duration:0.2
    },
    24.7
);

tl5.to(
    '#friendsfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.5
);

tl5.to(
    '#friendsfriend3',
    {
        y: 0,
        duration:0.2
    },
    24.7
);



tl5.to(
    '#friendsbridge',
    {
        y: -window.innerHeight * 0.4,
        x: -window.innerWidth * 0.25,
        duration: 0.1
    },
    24.5
);

tl5.to(
    '#friendsbridge',
    {
        y: 0,
        x: 0
    },
    24.6
);


// // /////////////////////////
// // /////////////////////////////    
// // Walking off stage
// // Actually lmao I am too lazy so
// //  I'll make them line up and fade to black lol
// // ////////////////////////////
// // //////////////////////////

tl5.to(
  '#friendsAnimationMainCharacter',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26
);

tl5.to(
  '#friendsAnimationMainCharacter',
  {
      y: 0,
      duration:0.2
  },
  26.2
);

tl5.to(
  '#friendsAnimationMainCharacter',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26.4
);

tl5.to(
  '#friendsAnimationMainCharacter',
  {
      y: 0,
      duration:0.2,
      rotate: 0
  },
  26.6
);

tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"because they may just help you pave DA WAE"
  },
  26
);

tl5.to(
  '#friendsfriend1',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26
);

tl5.to(
  '#friendsfriend1',
  {
      y: 0,
      duration:0.2
  },
  26.2
);

tl5.to(
  '#friendsfriend1',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26.4
);

tl5.to(
  '#friendsfriend1',
  {
      y: 0,
      duration:0.2,
      rotate: 0
  },
  26.6
);

tl5.to(
  '#friendsfriend2',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26
);

tl5.to(
  '#friendsfriend2',
  {
      y: 0,
      duration:0.2
  },
  26.2
);

tl5.to(
  '#friendsfriend2',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26.4
);

tl5.to(
  '#friendsfriend2',
  {
      y: 0,
      duration:0.2,
      rotate: 0
  },
  26.6
);

tl5.to(
  '#friendsfriend3',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26
);

tl5.to(
  '#friendsfriend3',
  {
      y: 0,
      duration:0.2
  },
  26.2
);

tl5.to(
  '#friendsfriend3',
  {
      y: -window.innerHeight * 0.1,
      duration:0.2
  },
  26.4
);

tl5.to(
  '#friendsfriend3',
  {
      y: 0,
      duration:0.2,
      rotate: 0
  },
  26.6
);

tl5.to(
  "#friendsAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  28
);


tl5.to(
    '#friendsAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        x: window.innerWidth * 0.3,
        opacity: 0,
        duration:2
    },
    28.5
);


tl5.to(
    '#friendsfriend1',
    {
        y: -window.innerHeight * 0.1,
        x: window.innerWidth * 0.3,
        opacity: 0,
        duration: 2
    },
    28.5
);



tl5.to(
    '#friendsfriend2',
    {
        y: window.innerHeight * 0.1,
        x: window.innerWidth * 0.15,
        opacity: 0,
        duration: 2
    },
    28.5
);


tl5.to(
    '#friendsfriend3',
    {
        y: window.innerHeight * 0.1,
        x: window.innerWidth * 0.15,
        opacity: 0,
        duration: 2
    },
    28.5
);

tl5.to(
    '#friendsriver',
    {
        opacity: 0
    },
    28.5
);

tl5.to(
    '#friendsbridge',
    {
        opacity: 0
    },
    28.5
);






  








ScrollTrigger.create({
    animation: tl5,
    trigger: "#friendsAnimationPage",
    start: "top 1%",
    toggleActions: "restart pause resume reset"
  });