function checkGreensockReady(){
	if ( window.TimelineLite ){
		startAd();
	}else{
		setTimeout( checkGreensockReady, 50 );
	}
}

window.onload = checkGreensockReady;

var clickTag = "https://www.someurl.com";

function startAd(){
	document.getElementById('content').addEventListener('mouseenter', hover);
	TweenLite.set(coinEdge, {rotationX: 75});
	
	var tl = new TimelineLite();
	
	tl.from(text1, 1, {scale: 0, ease: Power2.easeOut}, "-=0");
	
	tl.from(line1Mask, 0.7, {rotation: -90, transformOrigin: "top left", ease: Power0.easeNone});
	tl.from(line1, 0.7, {rotation: 90, transformOrigin: "top left", ease: Power0.easeNone}, "-=0.7");
	
	tl.from(icon1, 1, {x: "-=200", rotation: -720, ease: Power2.easeOut, onComplete: spin}, "-=0");
	tl.from(dollar, 1, {x: "-=200", ease: Power2.easeOut}, "-=1");
	
	tl.from(line2Mask, 0.7, {rotation: 90, transformOrigin: "92px 82px", ease: Power0.easeNone});
	tl.from(line2, 0.7, {rotation: -90, transformOrigin: "52px 72px", ease: Power0.easeNone, perspective: 600, translateZ: 0.000001, z: 0.01}, "-=0.7");
	tl.to(line2Mask, .1, {height: "+=10", ease: Power0.easeNone}, "-=0");
	
	tl.from(text2, 1, {scale: 0, ease: Power2.easeOut}, "-=0");
	tl.from(text2, 1, {y: "-=30", ease: Power0.easeNone}, "-=1");
	
	tl.from(line3, .4, {width: 0, ease: Power0.easeNone}, "-=0");
	
	tl.from(icon2, 1, {x: "+=100", ease: Power2.easeOut}, "-=0");
	
	tl.from(line4, .5 , {height: 0, ease: Power0.easeNone}, "-=0");
	
	tl.from(text3, 1, {scale: 0, ease: Power2.easeOut}, "-=0");
	tl.from(text3, 1, {y: "-=30", ease: Power0.easeNone}, "-=1");
	
	tl.from(line5, .4 , {backgroundPositionX: "-=30", left: "+=30", ease: Power0.easeNone}, "-=0");
	
	tl.from(icon3, 1, {x: "-=100", ease: Power2.easeOut}, "-=0");
	tl.from([coin, coinEdge], 1, {x: "-=100", ease: Power2.easeOut, onComplete: coinSpin}, "-=1");
	
	tl.from(line6Mask, 0.7, {rotation: 90, transformOrigin: "top right", ease: Power0.easeNone});
	tl.from(line6, 0.7, {rotation: -90, transformOrigin: "top right", ease: Power0.easeNone}, "-=0.7");
	
	tl.from(text4, 1, {scale: 0, ease: Power2.easeOut}, "-=0");
	tl.from(text4, 1, {x: "-=30", ease: Power0.easeNone}, "-=1");
	
	tl.from(line7Mask, 0.7, {rotation: -90, transformOrigin: "top left", ease: Power0.easeNone});
	tl.from(line7, 0.7, {rotation: 90, transformOrigin: "top left", ease: Power0.easeNone}, "-=0.7");
	
	tl.from(icon4, 1, {x: "-=150", ease: Power2.easeOut, onComplete: hover}, "-=0");
}

function spin() {
	TweenLite.to(icon1, 12, {rotation: 1080, ease: Power0.easeInOut});
}

function coinSpin() {
	var cs = new TimelineLite();
	cs.to(coin, 3.5, {rotationX: 720, ease: Power0.easeNone});
	cs.set(coin, {rotation: -10});
	cs.set(coinEdge, {alpha: 0});
	cs.to(coin, 0.5, {y: "+=10", x: "+=1", ease: Power0.easeNone});
	cs.to(coin, 0.5, {backgroundPositionY: "+=17", ease: Power0.easeNone});
}

function hover(event) {
	var mouseEffect = TweenLite.fromTo(ctaShine, .5, {backgroundPosition:"-116px 0"},{backgroundPosition:"200px 0",paused:true});
	mouseEffect.restart();
}

function exitHandler(event) {
	window.open(clickTag,'_blank');
}