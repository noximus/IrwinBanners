var BanTimeline = {
  bg: document.getElementById("bg"),
  f2_img1: document.getElementById("f2_img1"),
  f4_img1: document.getElementById("f4_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    TweenLite.to(blurrySaw2, 0,{scaleX:3, scaleY:3});
    TweenLite.to(blurrySaw3, 0,{scaleX:3, scaleY:3});
    BanTimeline.frame1();
  },
  frame1: function () {  
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(weldtec, .5, {opacity:0, left:-300, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(bg, .5, {left:0, ease: Quad.easeInOut });
    TweenLite.to(blurrySaw2, 1.4, {scaleX:.01, scaleY:.01,left:-70,top:-230, delay: 1.2, ease: Quad.easeOut});
    TweenLite.to(blurrySaw3, 1.4, {scaleX:.01, scaleY:.01,left:-70,top:-230, delay: 1.2, ease: Quad.easeOut});


      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.2});

      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.22});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.22});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.24});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.24});

      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.26});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.26});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.28});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.28});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.3});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.3});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.32});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.32});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.34});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.34});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.36});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.36});

      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.38});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.38});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.4});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.4});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.42});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.42});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.44});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.44});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.46});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.46});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.48});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.48});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.5});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.5});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.52});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.52});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.54});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.54});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.56});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.56});

      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.58});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.58});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.6});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.6});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.62});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.62});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.64});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.64});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.66});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.66});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.68});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.68});

      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.7});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.7});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.72});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.72});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.74});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.74});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.76});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.76});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.78});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.78});
      
      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.8});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.8});
      
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.82});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.82});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.84});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.84});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.86});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.86});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.88});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.88});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.9});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.9});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.92});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.92});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.94});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.94});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:1.96});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:1.96});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:1.98});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:1.98});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.05});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.05});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2.1});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2.1});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.15});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.15});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2.2});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2.2});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.4});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.4});

    TweenLite.to(blackCut, 1.5, {opacity:1,display:"block", delay: 1.6, ease: Quad.easeOut});
    TweenLite.to(sawCut, .4, {opacity:1,display:"block",top:49,left:8, delay: 1.6, ease: Quad.easeOut});
    TweenLite.to(f4_img1, .1, {opacity:1, display: 'block', delay: 1.35, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:1, display: 'block', delay: 1.35, ease: Quad.easeInOut});
    TweenLite.to(legal, .1, {opacity:1, display: 'block', delay: 1.35, ease: Quad.easeInOut});


    TweenLite.delayedCall(2.4, BanTimeline.frame3);
  },

  frame3: function () {
    TweenLite.to(f4_img1, .5, {opacity:0, left:-300, display: 'block', delay: 3.1, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .5, {opacity:0, left:-300, display: 'block', delay: 3.1, ease: Quad.easeInOut});
    TweenLite.to(legal, .5, {opacity:0, display: 'block', delay: 3, ease: Quad.easeInOut});
    TweenLite.to(blackCut, .2, {opacity:0, delay: 3.3, ease: Quad.easeOut});
    TweenLite.to(sawCut, .2, {opacity:0, delay:3.3, ease: Quad.easeOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(bg2, .2, {display:"block",opacity:1, delay:0, ease: Quad.easeOut });

    TweenLite.to(blurrySaw2, 0, {opacity:0});
    TweenLite.to(blurrySaw3, 0, {opacity:0});
    
    TweenLite.to(f4_img1, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(weldtec,0, {left:0, delay: .2, ease: Quad.easeOut });
    TweenLite.to(weldtec,1, {opacity:1,display: 'block', delay: .2, ease: Quad.easeOut });
    
  }
};


BanTimeline.init();