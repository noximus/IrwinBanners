var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f3_img1: document.getElementById("f3_img1"),
  f4_img1: document.getElementById("f4_img1"),
  f5_img1: document.getElementById("f5_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    BanTimeline.frame1();
  },
  frame1: function () {
    // TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 1, ease: Quad.easeInOut});
  
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.delayedCall(.5, BanTimeline.frame3);
  },
  frame3: function () {
    // TweenLite.to(f3_img1, 1, {opacity:1, display: 'block', ease: Quad.easeOut});
    TweenLite.to(f2_img1, 1, {scaleX:.01, scaleY:.01,left:-75,top:-95, delay: 0, ease: Quad.easeOut});
    // TweenLite.to(f3_img1, 1, {scaleX:.01, display: 'block', opacity:1, scaleY:.01,left:-75,top:-95, delay: 0, ease: Quad.easeInOut});
   
    TweenLite.delayedCall(1.7, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, .5, {left:22, delay: 0, ease: Quad.easeInOut});

    TweenLite.to(f4_img1, .5, {left:-300, delay: 3, ease: Quad.easeInOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f5_img1,.2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeIn });
    TweenLite.to(f5_txt1,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_txt2,.1, {opacity:1, display: 'block', delay: .2, ease: Quad.easeIn });
    TweenLite.to(f5_txt3,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f1_img1,.8, {left:-313, display: 'block', delay: .2, ease: Quad.easeOut });
  }
};
BanTimeline.init();