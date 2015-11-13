var BanTimeline = {
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    // TweenLite.to(bg, 0, {left:200, scaleX:2, scaleY:2});

    TweenLite.to(blurrySaw1, 0, {scaleX:2, scaleY:2});

    BanTimeline.frame1();
  },
  frame1: function () {
    TweenLite.to(f1_bluebox, .5, {opacity:1, left:-300, display: 'block', delay: 2, ease: Quad.easeInOut});
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    // TweenLite.to(bg, 1, {left:0,scaleX:1, scaleY:1, delay:0});
    TweenLite.to(blurrySaw1, 1.3, {scaleX:.01, scaleY:.01,left:-60,top:-75, delay: 1, ease: Quad.easeOut});
    TweenLite.to(sawCut, .7, {top: 0, left: 0, delay: 1.5});
    TweenLite.to(blackCut, .15, {top: 0, left: 6, opacity: 1, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(blackCut, .8, {opacity: 1, delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(sawCut, 0, {opacity: 1, delay: 1.5 , ease: Quad.easeOut});
    TweenLite.delayedCall(2, BanTimeline.frame3);
  },

  frame3: function () {
    TweenLite.to(stronger, .5, {left:-6, delay: 0, ease: Quad.easeInOut});

    TweenLite.to(stronger, .5, {left:-300, delay: 3, ease: Quad.easeInOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(sawCut, 0, {opacity:0, delay:0, ease: Quad.easeOut});
    TweenLite.to(bg, .2, {opacity:0, delay: 0, ease: Quad.easeOut});

    TweenLite.to(bg, 0, {left:-214, delay: .2, ease: Quad.easeOut});
    TweenLite.to(bg, .2, {opacity:1, delay: .2, ease: Quad.easeOut});

    TweenLite.to(f5_bluebox,.2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeIn });
    TweenLite.to(f5_txt1,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_txt2,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_txt3,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    

  }
};


BanTimeline.init();