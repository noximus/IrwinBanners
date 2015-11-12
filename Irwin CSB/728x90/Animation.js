var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  saw: document.getElementById("saw"),
  f4_img1: document.getElementById("f4_img1"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    // TweenLite.to(bg, 0, {scaleX:2, scaleY:2});
    TweenLite.to(saw, 0, {scaleX:1.7, scaleY:1.7});


    BanTimeline.frame1();
  },
  frame1: function () {
    // TweenLite.to(f1_img2, .5, {opacity:1, left:-300, display: 'block', delay: 1, ease: Quad.easeInOut});
  
    TweenLite.delayedCall(2, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f1_img2, .5, {opacity:1, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(bg, .5, {left:550, scaleX:1, scaleY:1, ease: Quad.easeInOut });
    // TweenLite.to(f2_img1, .5, {left:0, top:0, scaleX:1, scaleY:1, ease: Quad.easeInOut});
    TweenLite.to(saw, 1.2 , {scaleX:.01, scaleY:.01,left:448,top:-90, delay: 0, ease: Quad.easeOut});
     TweenLite.to(sawCut, .4 , {top:0,left:558,opacity:1,delay: .6});
    TweenLite.delayedCall(.8, BanTimeline.frame3);
  },

  frame3: function () {

    TweenLite.to(f4_img1, .1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:1, display: 'block', delay: 0.2, ease: Quad.easeInOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(saw, 0 , {opacity:0, delay:.2});
    TweenLite.to(sawCut, 0 , {opacity:0, delay:.2, ease: Quad.easeOut});
    TweenLite.to(f4_img1, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});
    TweenLite.to(f4_img2, .1, {opacity:0, display: 'block', delay: 0, ease: Quad.easeInOut});

    TweenLite.to(f1_img2,.8, {opacity:1,  display: 'block', delay: .2, ease: Quad.easeOut });
    TweenLite.to(f5_txt3,.2, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(f5_txt4,.2, {opacity:1, left:0, display: 'block', delay: .8, ease: Quad.easeOut });
    TweenLite.to(bg,.8, {left:302, display: 'block', delay: .2, ease: Quad.easeOut });
  }
};


BanTimeline.init();