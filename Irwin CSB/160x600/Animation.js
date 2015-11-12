var BanTimeline = {
  bg: document.getElementById("bg"),
  f2_img1: document.getElementById("f2_img1"),
  f4_img1: document.getElementById("f4_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    // TweenLite.to(f1_img1, 0, {left:60, scaleX:1.3, scaleY:1.3});
    // TweenLite.to(f2_img1, 0, {left:-20, top:160, scaleX:1.5, scaleY:1.5});
    TweenLite.to(blurSaw, 0, {left:78, top:190, scaleX:1.5, scaleY:1.5});

    BanTimeline.frame1();
  },
  frame1: function () {
    // TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 1, ease: Quad.easeInOut});
  
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(weldtec, .5, {opacity:0, left:-300, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(bg, .5, {left:0, scaleX:1, scaleY:1, ease: Quad.easeInOut });
    // TweenLite.to(f2_img1, 0, {display:"none", ease: Quad.easeInOut});
    TweenLite.to(blurSaw, 0, {display:"block",opacity:1, delay:.5, ease: Quad.easeInOut});
    TweenLite.to(blurSaw, 1.4, {scaleX:.01, scaleY:.01,left:-120,top:-60, delay: .5, ease: Quad.easeOut});
    TweenLite.to(sawCut, .9, {opacity:1,display:"block",top:0,left:0, delay: .9, ease: Quad.easeOut});

    TweenLite.delayedCall(.8, BanTimeline.frame3);
  },

  frame3: function () {
    TweenLite.to(f4_img1, .1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:1, display: 'block', delay: 0.2, ease: Quad.easeInOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(sawCut, 0, {left:-230, delay: .2, ease: Quad.easeOut});
    TweenLite.to(f4_img1, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(weldtec,0, {left:0, delay: .2, ease: Quad.easeOut });
    TweenLite.to(weldtec,1, {opacity:1,display: 'block', delay: .2, ease: Quad.easeOut });
    TweenLite.to(f5_txt3,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(url_txt,.3, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(bg,.8, {left:-230, display: 'block', delay: .2, ease: Quad.easeOut });
  }
};


BanTimeline.init();