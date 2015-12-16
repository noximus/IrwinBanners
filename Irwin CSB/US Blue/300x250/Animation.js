var BanTimeline = {
  init: function () {

    TweenLite.to(blurrySaw2, 0, {scaleX:2, scaleY:2});
    TweenLite.to(blurrySaw3, 0, {scaleX:2, scaleY:2});

    BanTimeline.frame1();
  },
  frame1: function () {
    TweenLite.to(f1_bluebox, .5, {opacity:1, left:-300, display: 'block', delay: 2, ease: Quad.easeInOut});
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(blurrySaw2, 1.3, {scaleX:.01, scaleY:.01,left:-60,top:-75, delay: 1, ease: Quad.easeOut});
    TweenLite.to(blurrySaw3, 1.3, {scaleX:.01, scaleY:.01,left:-60,top:-75, delay: 1, ease: Quad.easeOut});
   
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



    TweenLite.to(sawCut, .7, {top: 0, left: 0, delay: 1.5});
    TweenLite.to(blackCut, .15, {top: 0, left: 6, opacity: 1, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(blackCut, .8, {opacity: 1, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(sawCut, 0, {opacity: 1, delay: 1.5 , ease: Quad.easeOut});
    TweenLite.delayedCall(2, BanTimeline.frame3);
  },

  frame3: function () {
    TweenLite.to(stronger, .5, {left:30, delay: 0, ease: Quad.easeInOut});

    TweenLite.to(stronger, .5, {left:-300, delay: 3, ease: Quad.easeInOut});
    // TweenLite.to(bg, .5, {opacity:0, delay: 3, ease: Quad.easeOut});
    TweenLite.to(blackCut, .3, {opacity: 0, delay: 3, ease: Quad.easeOut});
    TweenLite.to(sawCut, 0, {opacity:0, delay:3, ease: Quad.easeOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f5_bluebox,.5, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut });
    // TweenLite.to(bg, .5, {opacity:0, delay: 0, ease: Quad.easeOut});
    TweenLite.to(bg2, .5, {display:"block",opacity:1, delay: 0, ease: Quad.easeOut});
    TweenLite.to(f5_txt1,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_txt2,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_cta,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    // TweenLite.to(legal,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    

  }
};


BanTimeline.init();