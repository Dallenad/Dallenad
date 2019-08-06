'use strict';

var APP = window.APP = window.APP || {};

APP.banner = (function(){
	var init = function() {


		TweenMax.set(bkgd, {scale:1.0, z: -0.01, rotationZ:-0.01, force3D:true});
		TweenMax.set([corner, square], {left: "+=300"});
		TweenMax.set([txt1, txt2, txt3, txt7, cta], {opacity: 0});
		TweenMax.set([txt4, txt5, txt6], {opacity: 0});
		TweenMax.set([line1, line2], { opacity: 0});

		TweenMax.to(ad, 0, {autoAlpha: 1});
		animate();
		bindEvents();
	};

	var animate = function() {
		TweenMax.to(bkgd, 2.5, {scale:1.05, ease:Sine.easeOut});
		//frame2
		TweenMax.to([corner, square], .7, {left: "-=300", delay: .5, ease:Sine.easeOut});
		TweenMax.to([txt1], .2, {opacity: 1, delay: 1.7});
		//frame3 
		TweenMax.to([txt1], .5, {opacity: 0, delay: 4.2});
		TweenMax.to(txt2, .5, {opacity: 1, delay: 4.7});
		//frame4 
		TweenMax.to(txt2, .5, {opacity: 0, delay: 7.7});
		TweenMax.to([corner, square], .5, {left: "-=208", delay: 8.2, ease:Sine.easeIn});
		TweenMax.to(txt3, .5, {opacity: 1, delay: 8.4});
		TweenMax.to(txt4, .5, {opacity: 1, delay: 8.7,ease:Sine.easeIn});
		TweenMax.to(line1, .3, {opacity: 1, delay: 8.7,ease:Sine.easeIn});
		TweenMax.to(txt5, .5, {opacity: 1, delay: 8.8,ease:Sine.easeIn});
		TweenMax.to(line2, .3, {opacity: 1, delay: 8.8,ease:Sine.easeIn});
		TweenMax.to(txt6, .5, {opacity: 1, delay: 8.9,ease:Sine.easeIn});
		TweenMax.to(txt7, .5, {opacity: 1, delay: 9.9});
		TweenMax.to(cta, .5, {opacity: 1, delay: 10.3, onComplete: mouseHover});
	};

	var bindEvents = function() {
		var ad = document.getElementById('ad');
		ad.addEventListener('click', handler);
		ad.addEventListener('mouseenter', handler);
	}

	var handler = function(event) {
		switch(event.type) {
			case 'mouseenter':
				mouseHover();
				break;
			case 'click':
				clickTrough();
				break;
		}
	}

	var mouseHover = function(){
		var mouseEffect = TweenMax.fromTo(cta, 1, {backgroundPosition: "-100px 0"},{backgroundPosition: "200px 0",paused:true});
		mouseEffect.restart();
	};

	var clickTrough = function() {
		window.open(window.clickTag, '_blank');
	}

	return {
		init: init
	};
}());

window.addEventListener('load', function(){
	APP.banner.init();
});