"use strict";

var clickTag = "https://www.artmatch.ca/price/";
var ctaColor1 = "hsl(301, 81, 37)";
var ctaColor2 = "hsl(301, 81, 27)";

var click = function(event) {
    window.open(clickTag, "_blank");
};

function checkGreensockReady(){
	if ( window.TimelineLite ){
		startAd();
	}else{
		setTimeout( checkGreensockReady, 50 );
	}
}

function startAd() {
    var adContainer = document.getElementById("container");
	var cta = document.getElementById("cta");
	
	cta.addEventListener('mouseenter', hover);
    cta.addEventListener('mouseleave', ctaOut, false);
    adContainer.addEventListener('click', click);
	
	TweenLite.from(container, 12, { backgroundPositionY: '-=120' });
	
	var tl = new TimelineLite();
	
	tl.set(container, { autoAlpha: 1 });
	tl.from(mainMessage, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, "+=0");
	tl.from(submessage1, 0.5, {y: '+=90', ease: Power2.easeOut}, "+=1");
	tl.to(submessage1, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, "+=2");
	tl.from(submessage2, 0.5, {y: '+=90', ease: Power2.easeOut}, "-=0");
	tl.to(submessage2, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, "+=2");
	tl.from(submessage3, 0.5, {y: '+=90', ease: Power2.easeOut}, "-=0");
	tl.to(submessage3, 0.5, {autoAlpha: 0, ease: Power2.easeOut}, "+=2");
	tl.from(submessage4, 0.5, {y: '+=90', ease: Power2.easeOut}, "-=0");
}

var hover = function(event) {
    var tl = new TimelineLite();
    tl.to(cta, .4, { backgroundColor: ctaColor1 });
    return tl;
};

var ctaOut = function(event) {
    var tl = new TimelineLite();
    tl.to(cta, .4, { backgroundColor: ctaColor2 });
    return tl;
};

window.addEventListener('load', checkGreensockReady);