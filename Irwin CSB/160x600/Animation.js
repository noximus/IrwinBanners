var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f4_img1: document.getElementById("f4_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    TweenLite.to(f1_img1, 0, {left:60, scaleX:1.3, scaleY:1.3});
    // TweenLite.to(f2_img1, 0, {left:-20, top:160, scaleX:1.5, scaleY:1.5});
    TweenLite.to(blurSaw, 0, {left:10, top:180, scaleX:1.5, scaleY:1.5});

    BanTimeline.frame1();
  },
  frame1: function () {
    // TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 1, ease: Quad.easeInOut});
  
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(f1_img1, .5, {left:0, scaleX:1, scaleY:1, ease: Quad.easeInOut });
    // TweenLite.to(f2_img1, 0, {display:"none", ease: Quad.easeInOut});
    TweenLite.to(blurSaw, 0, {display:"block",opacity:1, delay:.5, ease: Quad.easeInOut});
    TweenLite.to(blurSaw, 1, {scaleX:.05, scaleY:.05,left:-165,top:-20, delay: .5, ease: Quad.easeOut});

    TweenLite.delayedCall(.8, BanTimeline.frame3);
  },

  frame3: function () {
    TweenLite.to(f4_img1, .1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:1, display: 'block', delay: 0.2, ease: Quad.easeInOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {

    TweenLite.to(f4_img1, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(f1_img2,.8, {left:0,  display: 'block', delay: .2, ease: Quad.easeOut });
    TweenLite.to(f5_txt3,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f1_img1,.8, {left:-280, display: 'block', delay: .2, ease: Quad.easeOut });
  }
};


BanTimeline.init();