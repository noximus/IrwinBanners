home_animation = (function() {
	
	var boundEvents = {};


	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}

	

	function init()
	{

		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
	
		TweenLite.to(threeX, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(tool, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(gripping_power, 0, { scaleX:2.5, scaleY:2.5});

		frame1();

	}
	

		
	function frame1()
	{

		TweenLite.to(tool, 0.5, {opacity:1, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(logo, 0.5, {opacity:1, delay: 0.3});		
		TweenLite.to(legal_line, 0.5, {opacity:1, delay: 0.4});	
		TweenLite.to(threeX, 0.5, {opacity:1, scaleX:1, scaleY:1, delay: 0.5, ease: Expo.easeOut});	
		TweenLite.to(gripping_power, 0.5, {opacity:1, scaleX:1, scaleY:1, delay: 0.5, ease: Expo.easeOut});				
		TweenLite.delayedCall(3, frame2);
	}
	
	function frame2()
	{	
		TweenLite.to(threeX, 0.2, {opacity:0 });	
		TweenLite.to(gripping_power, 0.2, {opacity:0 });	
		TweenLite.to(legal_line, 0.2, {opacity:0});	
		TweenLite.delayedCall(0.3, frame3);
	}
	
	function frame3()
	{	

		TweenLite.to(circle_tool, 0.5, {opacity:1, top:0, delay: .4, ease: Expo.easeOut});		
		TweenLite.to(four_contact, 0.5, {opacity:1, left:0, ease: Expo.easeOut});	
		TweenLite.to(for_maximum, 0.5, {opacity:1, left:0, ease: Expo.easeOut});	
		TweenLite.delayedCall(3, frame4);
	}
	
	function frame4()
	{
		endFrame = 1;

		TweenLite.to(circle_tool, 0.6, {opacity:0, delay: 0, ease: Expo.easeOut});		
		TweenLite.to(four_contact, 0.5, {opacity:0,  delay: 0, ease: Expo.easeOut});	
		TweenLite.to(for_maximum, 0.5, {opacity:0,  delay: 0, ease: Expo.easeOut});


		TweenLite.delayedCall(0.6, frame5);
	}


	
	function frame5()
	{

		TweenLite.to(curved, 0.2, {opacity:1, delay: 0, });	
		TweenLite.to(learn_more, 0.2, {opacity:1, left:0, delay: 0, });		
		//TweenLite.delayedCall(1.7, frame6);
	}


	init();
});

var endFrame = 0;

container.onmouseover = function() {
	if(endFrame == 1)
	{
 		TweenLite.to(learn_more_rollover, 0.2, {opacity:1});
 		TweenLite.to(learn_more, 0.2, {opacity:0});
	}

}

container.onmouseout = function() {
	if(endFrame == 1)
	{	
 		TweenLite.to(learn_more_rollover, 0.2, {opacity:0});
 		TweenLite.to(learn_more, 0.2, {opacity:1});
	}
}




// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {
  home_animation();
}

