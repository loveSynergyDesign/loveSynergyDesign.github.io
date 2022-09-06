const tl6 = gsap.timeline();

tl6.to(
    "#battleAnimationMainCharacter",
    {
        x: window.innerWidth *0.5,
    },
    0.1
);

tl6.to(
    "#battleAnimationfriend1",
    {
        x: window.innerWidth *0.5,
    },
    0.1
);

tl6.to(
    "#battleAnimationfriend2",
    {
        x: window.innerWidth *0.5,
    },
    0.1
);

tl6.to(
    "#battleAnimationfriend3",
    {
        x: window.innerWidth *0.5,
    },
    0.1
);

tl6.to(
    "#battleAnimationBoss",
    {
        x: -window.innerWidth *0.5,
    },
    0.1
);
// ////////////////

tl6.to(
    "#battleAnimationMainCharacter",
    {
        x: 0,
        opacity:1,
        duration:1 
    },
    0.5
);

tl6.to(
    "#battleAnimationfriend1",
    {
        x: 0,
        opacity: 1,
        duration: 1
    },
    0.5
);

tl6.to(
    "#battleAnimationfriend2",
    {
        x: 0,
        opacity:1,
        duration:1 
    },
    0.5
);

tl6.to(
    "#battleAnimationfriend3",
    {
        x: 0,
        opacity: 1,
        duration:1
    },
    0.5
);

tl6.to(
    "#battleAnimationBoss",
    {
        x: 0,
        opacity:1,
        duration:1
    },
    0.5
);

tl6.to(
    "#battleAnimationBossHp",
    {
        y: -window.innerHeight * 0.1
    },
    1.4
);

tl6.to(
    "#battleAnimationBossHp",
    {
        y: 0,
        opacity: 1,
        duration:1
    },
    2
);

tl6.to(
    "#bossHpLabel",
    {
        opacity: 1,
        duration:1
    },
    3
);

tl6.to(
    "#battleAnimationOurHp",
    {
        y: window.innerHeight * 0.1
    },
    1.4
);

tl6.to(
    "#battleAnimationOurHp",
    {
        y: 0,
        opacity: 1,
        duration:1
    },
    2
);

tl6.to(
    "#ourHpLabel",
    {
        opacity: 1,
        duration:1
    },
    3
);

// //////////////////////////////
//  Battle Setuped ////////////////////
//  Begin Fight  /////////////
// ///////////////////////////// 


// ///////////////////////////////
//  Use attack #1 /////////////////
///////////////////////////////////

tl6.to(
    "#battleAnimationText",
    {
        text: {value: "Acid, Anima and Jester used RAPID PROTOTYPING!!!"},
        duration: 3,
        ease: "none"
    },
    3
);


tl6.to(
    '#battleAnimationidea1',
    {
        y: -window.innerHeight * 0.2,
        x: -document.querySelector('#battleAnimationBoss').offsetWidth * 0.5
    },
    0
)

tl6.to(
    '#battleAnimationidea1',
    {
        opacity: 1,
        duration:1
    },
    6
)



tl6.to(
    '#battleAnimationidea2',
    {
        y: -window.innerHeight * 0.2,
        x: -document.querySelector('#battleAnimationBoss').offsetWidth * 1
    },
    0
)

tl6.to(
    '#battleAnimationidea2',
    {
        opacity: 1,
        duration:1
    },
    6
)


tl6.to(
    '#battleAnimationidea1',
    {
        y: 0,
        x: -document.querySelector('#battleAnimationBoss').offsetWidth * 0.5,
        duration: 0.2
    },
    7.1
)

tl6.to(
    '#battleAnimationidea2',
    {
        y: 0,
        x: -document.querySelector('#battleAnimationBoss').offsetWidth * 1,
        duration: 0.2
    },
    7
)


tl6.to(
    '#battleAnimationidea1',
    {
        y: -window.innerHeight * 0.2,
        x: 0,
        rotate: 720,
        opacity: 0,
        duration: 1
    },
    7.25
)

tl6.to(
    '#battleAnimationidea2',
    {
        y: -window.innerHeight * 0.2,
        x: -document.querySelector('#battleAnimationBoss').offsetWidth * 1.5,
        rotate: 720,
        opacity: 0,
        duration: 1
    },
    7.15
)

tl6.to(
    '#battleAnimationidea3',
    {
        x: -window.innerWidth * 0.2
    },
    7.15
)

tl6.to(
    '#battleAnimationidea3',
    {
        opacity: 1,
        duration:1
    },
    8.15
)

tl6.to(
    '#battleAnimationidea3',
    {
        y: -window.innerHeight * 0.2,
        x: window.innerWidth * 0,
        duration: 1
    },
    9.15
)

tl6.to(
    '#battleAnimationidea3',
    {
        y: 0,
        x: window.innerWidth * 0,
        duration: 0.8
    },
    10.15
)

tl6.to(
    '#battleAnimationBoss',
    {
        scaleY: 0.1,
        duration:0.10
    },
    11
)

tl6.to(
    '#battleAnimationidea3',
    {
        opacity: 0,
        duration: 1
    },
    11.15
)

tl6.to(
    '#battleAnimationBoss',
    {
        scaleY: 1.1,
        scaleX: 0.8,
        duration: 0.2
    },
    12.15
)

tl6.to(
    '#battleAnimationBoss',
    {
        scaleY: 1,
        scaleX: 1,
        duration: 0.2
    },
    12.3
)


tl6.to(
    '#battleAnimationBossHp',
    {
        scaleX: 0.4,
        duration: 1
    },
    12.15
);

tl6.to(
    "#battleAnimationText",
    {
        text: {value: ""},
        duration: 1,
        ease: "none"
    },
    12.15
);


// // //////////////////////////
// // Boss attack
// // //////////////////////////
 


tl6.to(
    "#battleAnimationText",
    {
        text: {value: "The creature used CONSUME SOUL!!"},
        duration: 3,
        ease: "none"
    },
    14
);

tl6.to(
    "#battleAnimationidea4",
    {
        x:-window.innerWidth *0.3
    },
    13
);

tl6.to(
    "#battleAnimationidea5",
    {
        x:-window.innerWidth *0.3
    },
    13
);

tl6.to(
    "#battleAnimationidea6",
    {
        x:-window.innerWidth *0.3
    },
    13
);



tl6.to(
    "#battleAnimationidea4",
    {
        x:-window.innerWidth *0.2,
        opacity:1,
        duration:1
    },
    17.2
);

tl6.to(
    "#battleAnimationidea5",
    {
        x:-window.innerWidth *0.2,
        opacity: 1,
        duration:1
    },
    17.3
);

tl6.to(
    "#battleAnimationidea6",
    {
        x:-window.innerWidth *0.2,
        opacity: 1,
        duration: 1
    },
    17
);


tl6.to(
    "#battleAnimationidea4",
    {
        x:0,
        opacity: 0,
        duration:1
    },
    19
);

tl6.to(
    "#battleAnimationidea5",
    {
        x:0,
        opacity: 0,
        duration:1
    },
    19.1
);

tl6.to(
    "#battleAnimationidea6",
    {
        x:0,
        opacity: 0,
        duration: 1
    },
    19.3
);



tl6.to(
    '#battleAnimationOurHp',
    {
        scaleX: 0.1,
        duration: 1
    },
    20
);

tl6.to(
    '#battleAnimationBossHp',
    {
        scaleX: 0.7,
        duration: 1
    },
    20
);

tl6.to(
    "#battleAnimationText",
    {
        text: {value: ""},
        duration: 1,
        ease: "none"
    },
    20
);

// // //////////////////////////
// // Team Second attack
// // //////////////////////////

tl6.to(
    "#battleAnimationText",
    {
        text: {value: "The team used AS ONE!"},
        duration: 3,
        ease: "none"
    },
    21
);


tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    24.2
);


tl6.to(
    '#battleAnimationfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.2
);

tl6.to(
    '#battleAnimationfriend1',
    {
        y: 0,
        duration:0.2
    },
    24.4
);



tl6.to(
    '#battleAnimationfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.4
);

tl6.to(
    '#battleAnimationfriend2',
    {
        y: 0,
        duration:0.2
    },
    24.6
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    24.6
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: 0,
        duration:0.2
    },
    24.8
);

tl6.to(
    '#battleAnimationidea7',
    {
        opacity: 1,
        duration: 1
    },
    25
)

tl6.to(
    '#battleAnimationidea7',
    {
        scaleX: -1,
        duration: 0.5
    },
    26
)

tl6.to(
    '#battleAnimationBoss',
    {
        scale: 0.1,
        rotate: 1440,
        y: -window.innerHeight*0.2,
        opacity: 0,
        duration: 1
    },
    26.4
);

tl6.to(
    '#battleAnimationidea7',
    {
        scaleX: 1,
        duration: 0.5
    },
    26.4
)



tl6.to(
    '#battleAnimationBossHp',
    {
        scaleX: 0,
        duration: 1
    },
    28
);

tl6.to(
    '#battleAnimationidea7',
    {
        opacity: 0
    },
    28
)

tl6.to(
    "#battleAnimationText",
    {
        text: {value: ""},
        duration: 1,
        ease: "none"
    },
    28
);




/////////////////////////
// /////////////////////
// /////////////////////
////////////////////
// defeat animation
////////////////////

tl6.to(
    '#battleAnimationBoss',
    {
        opacity: 0,
        y: window.innerHeight * 0.1,
        duration: 1
    },
    29
)

tl6.to(
    "#battleAnimationText",
    {
        text: {value: "Not all of life's adversities are like this giant fluffy bunny,"},
        duration: 2,
        ease: "none"
    },
    30
);

tl6.to(
    '#battleanimationOurHp',
    {
        opacity: 0,
        y: window.innerHeight * 0.1,
        duration: 1
    },
    29
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    30.2
);


tl6.to(
    '#battleAnimationfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30
);

tl6.to(
    '#battleAnimationfriend1',
    {
        y: 0,
        duration:0.2
    },
    30.2
);



tl6.to(
    '#battleAnimationfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30
);

tl6.to(
    '#battleAnimationfriend2',
    {
        y: 0,
        duration:0.2
    },
    30.2
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: 0,
        duration:0.2
    },
    30.2
);




tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30.4
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    30.6
);


tl6.to(
    '#battleAnimationfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30.4
);

tl6.to(
    '#battleAnimationfriend1',
    {
        y: 0,
        duration:0.2
    },
    30.6
);



tl6.to(
    '#battleAnimationfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30.4
);

tl6.to(
    '#battleAnimationfriend2',
    {
        y: 0,
        duration:0.2
    },
    30.6
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    30.4
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: 0,
        duration:0.2
    },
    30.6
);

tl6.to(
    "#battleAnimationText",
    {
        text: {value: ""},
        duration: 1,
        ease: "none"
    },
    33
);




// ///////////////////////////////////////////




tl6.to(
    "#battleAnimationText",
    {
        text: {value: "but overcoming them will still taste as sweet as a jar of honey!"},
        duration: 2,
        ease: "none"
    },
    34
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    33.2
);


tl6.to(
    '#battleAnimationfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33
);

tl6.to(
    '#battleAnimationfriend1',
    {
        y: 0,
        duration:0.2
    },
    33.2
);



tl6.to(
    '#battleAnimationfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33
);

tl6.to(
    '#battleAnimationfriend2',
    {
        y: 0,
        duration:0.2
    },
    33.2
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: 0,
        duration:0.2
    },
    33.2
);




tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33.4
);

tl6.to(
    '#battleAnimationMainCharacter',
    {
        y: 0,
        duration:0.2
    },
    33.6
);


tl6.to(
    '#battleAnimationfriend1',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33.4
);

tl6.to(
    '#battleAnimationfriend1',
    {
        y: 0,
        duration:0.2
    },
    33.6
);



tl6.to(
    '#battleAnimationfriend2',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33.4
);

tl6.to(
    '#battleAnimationfriend2',
    {
        y: 0,
        duration:0.2
    },
    33.6
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: -window.innerHeight * 0.1,
        duration:0.2
    },
    33.4
);

tl6.to(
    '#battleAnimationfriend3',
    {
        y: 0,
        duration:0.2
    },
    33.6
);


tl6.to(
    "#battleAnimationText",
    {
        text: {value: ""},
        duration: 1,
        ease: "none"
    },
    37
);



tl6.to(
    '#battleAnimationMainCharacter',
    {
        opacity: 0,duration: 1
    },
    38
);

tl6.to(
    '#battleAnimationfriend1',
    {
        opacity: 0,duration: 1
    },
    38
);

tl6.to(
    '#battleAnimationfriend2',
    {
        opacity: 0,duration: 1
    },
    38
);

tl6.to(
    '#battleAnimationfriend3',
    {
        opacity: 0,duration: 1
    },
    38
);

tl6.to(
    "#battleAnimationTextBox",
    {
        opacity: 0,duration: 1
    },
    38
);

tl6.to(
    "#bossHpLabel",
    {
        opacity: 0,duration: 1
    },
    29
);

tl6.to(
    "#ourHpLabel",
    {
        opacity: 0,duration: 1
    },
    29
);







ScrollTrigger.create({
    animation: tl6,
    trigger:"#battleAnimationPage",
    start: 'top 10%',
    toggleActions: "restart pause resume reset"
  })
  
