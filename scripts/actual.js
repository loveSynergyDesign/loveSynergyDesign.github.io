//ScrollReveal Stuff, will be used for general fading in

ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  ScrollReveal().reveal(' .iconImages, .iconizedText, #linkToSection', { delay: 500, origin: 'bottom', interval: 200 });
  // descriptionsection
  ScrollReveal().reveal(' #secondgrid1, #secondgrid1img, #thirdgrid1, #thirdgrid3', { delay: 300, origin: 'left' }) ;
  ScrollReveal().reveal(' #descriptionWriteUp, #thirdgrid2, #thirdgrid4 , #designWelcomePageHeader', { delay: 500, origin: 'right' }) ;




//GSAP command for text on scroll
gsap.registerPlugin(ScrollTrigger);

// Animation for evolution
// LIKE THIS WHOLE THING IS THE ANIMATION


// ////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// NEW ANIMATION FOR THE WOALKING AND MOTIVATIONAL TALK
// ////////////////////////////////////////////////////

const tl4 = gsap.timeline();


// walking to the main location
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.06 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"You're starting a new journey,"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: ()=> window.innerWidth*0.12,
    duration: 1
  }
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.18 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: ()=> window.innerWidth*0.24,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);
// ////////////////////////////////////////////


// ONE SET OF LEFT DIALOUGE AND CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"one that can be quite scary and unknown."
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////


// RIGHT TEXT AN CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"But stay optimistic, determined and you may yet see,"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text: "",
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////

// ONE SET OF LEFT DIALOUGE AND CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"the joys that only such a journey could bring!"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////


// RIGHT TEXT AN CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"You may meet challenges or maybe even a few enemies,"
  },
  "<"
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

// ////////////////////////

// ONE SET OF LEFT DIALOUGE AND CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"frankly, it just seems to be an inevitability."
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////


// RIGHT TEXT AN CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"Try your best to stay positive and who knows,"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////

// ONE SET OF LEFT DIALOUGE AND CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"they may just prove to be the best learning opportunities!"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////


// RIGHT TEXT AN CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"Explore and discover what you couldn't before,"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////

// ONE SET OF LEFT DIALOUGE AND CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"you may just find a new path,"
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////


// RIGHT TEXT AN CYCLE
tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  },
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:"the one that you have always been looking for."
  },
  "<"
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);


tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: -10,
    y: ()=>-document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 - document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    duration: 1
  }
);

tl4.to(
  "#loveAnimationLeftText",
  {
    opacity:1,
    duration: 1,
    text:""
  },
  "<"
);

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 0,
    y: 0,
    x: window.innerWidth*0.3 + 0,
    duration: 1
  }
);

// ////////////////////////

// Transforming to transition to guidebook

tl4.to(
  '#loveAnimationMainCharacter',
  {
    rotate: 10,
    y: ()=> -document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    x: ()=> window.innerWidth*0.3 + document.querySelector("#loveAnimationMainCharacter").offsetWidth*0.3,
    opacity: 0,
    duration: 1
  },
);





ScrollTrigger.create({
  animation: tl4,
  trigger:"#loveAnimationPage",
  start: 'top 10%',
  toggleActions: "restart pause resume reset"
});