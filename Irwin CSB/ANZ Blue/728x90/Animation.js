var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  saw: document.getElementById("saw"),
  f4_img1: document.getElementById("f4_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    // run animation after init is done. 
    TweenLite.to(blurrySaw2, 0, {scaleX:5, scaleY:5});
    TweenLite.to(blurrySaw3, 0, {scaleX:5, scaleY:5});

    BanTimeline.frame1();
  },
  frame1: function () {
    TweenLite.delayedCall(1, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(blurrySaw2, 0 , {display:"block",opacity:1,delay: 1});
    TweenLite.to(blurrySaw3, 0 , {display:"block",opacity:1,delay: 1});

    TweenLite.to(blurrySaw2, 1.2 , {scaleX:.01, scaleY:.01,left:220,top:-35, delay: 1, ease: Quad.easeOut});
    TweenLite.to(blurrySaw3, 1.2 , {scaleX:.01, scaleY:.01,left:220,top:-35, delay: 1, ease: Quad.easeOut});

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
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.02});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.02});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2.04});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2.04});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.06});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.06});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2.08});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2.08});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.1});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.1});

      TweenLite.to(blurrySaw3, 0, {display:"none",delay:2.12});
      TweenLite.to(blurrySaw2, 0, {display:"block",delay:2.12});
   
      TweenLite.to(blurrySaw2, 0, {display:"none",delay:2.14});
      TweenLite.to(blurrySaw3, 0, {display:"block",delay:2.14});


    TweenLite.to(sawCut, .5 , {top:0,left:-1,opacity:1,delay: 1.6});
    TweenLite.delayedCall(1.25, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(f4_img1, .2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(sawCut, 0 , {opacity:0, delay:.2, ease: Quad.easeOut});
    TweenLite.to(f4_img1, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f5_txt3,.2, {opacity:1, left:0, display: 'block', delay: .2, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.2, {opacity:1, left:0, display: 'block', delay: .2, ease: Quad.easeOut });
    TweenLite.to(bg2,.8, {opacity:1, display: 'block', delay: .2, ease: Quad.easeOut });
  }
};


BanTimeline.init();