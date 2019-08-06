function checkGreensockReady(){
	if ( window.TimelineLite ){
		startAd();
	}else{
		setTimeout( checkGreensockReady, 50 );
	}
}

window.onload = checkGreensockReady;

var clickTag = "https://www.someurl.com";
var started = false;
var waitDirection = -5;
var jumpDirection = 5;

function startAd(){
	document.getElementById('content').addEventListener('mouseenter', hover);
	TweenLite.set(content, {display: 'block'});
	TweenLite.set([logo, cta], {autoAlpha: 0} );
	TweenLite.set([text2_1, text2_2, text3_2, text3_3], {x: "+=970"});
	TweenLite.set(text3_1, {x: "-=970"});
	wait();
	
	var tl = new TimelineLite();
	
	tl.from(text1_1, 0.5, {x: '-=970', ease: Power2.easeOut, force3D: true, rotation: 0.01, rotationZ: 0.01}, "-=0");
	tl.from(text1_2, 0.5, {x: '-=970', ease: Power2.easeOut, force3D: true, rotation: 0.01, rotationZ: 0.01}, "-=0.2");
	tl.from(text1_3, 0.5, {x: '-=970', ease: Power2.easeOut, force3D: true, rotation: 0.01, rotationZ: 0.01}, "-=0.2");
	tl.from(text1_4, 0.5, {x: '-=970', ease: Power2.easeOut, force3D: true, rotation: 0.01, rotationZ: 0.01}, "-=0.2");
	tl.from(text1_5, 0.5, {x: '-=970', ease: Power2.easeOut, force3D: true, rotation: 0.01, rotationZ: 0.01}, "-=0.2");
	tl.to(text1_1, 8, {x: "+=20", ease: Linear.easeNone, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=1');
	tl.to(text1_2, 10, {x: "+=20", ease: Linear.easeNone, force3D: false, rotation: 0.01, rotationZ: 0.01}, '-=8');
	tl.to(text1_3, 9, {x: "+=20", ease: Linear.easeNone, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=9.5');
	tl.to(text1_4, 7, {x: "+=20", ease: Linear.easeNone, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=9.5');
	tl.to(text1_5, 10, {x: "+=20", ease: Linear.easeNone, onComplete: startWalk, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=9');
}

function jump() {
	jumpDirection *= -1;
	if (jumpDirection > 0){
		TweenLite.to(character, 0.3, {y: '+=' + jumpDirection, ease: Power2.easeIn, onComplete: jump});
	}
	else{
		TweenLite.to(character, 0.3, {y: '+=' + jumpDirection, ease: Power2.easeOut, onComplete: jump});
	}
}

function wait() {
	waitDirection *= -1;
	if (!started){
		TweenLite.to(character, 0.5, {x: '+=' + waitDirection, onComplete: wait});
	}
}

function startWalk() {
	if (!started) {
		started = true;
		walk();
	}
}

function walk() {
	var tl = new TimelineLite();
	
	tl.to(text1_6, 0.5, {autoAlpha: 0})
	tl.to(character, 0.5, {x: 50, y: '-=16', scale: 0.7, transformOrigin: '50% 100%'}, '-=0.5');
	tl.to(character, 0.5, {x: '+=35', ease: Linear.easeNone});
	tl.to(character, 0.5, {y: '+=20', ease: Linear.easeNone});
	tl.to(character, 0.5, {x: '-=23', ease: Linear.easeNone});
	tl.to(character, 0.5, {y: '+=15', ease: Linear.easeNone});
	tl.to(character, 0.75, {x: '+=50', ease: Linear.easeNone});
	tl.to(character, 1, {y: '-=100', ease: Linear.easeNone});
	tl.to(character, 0.75, {x: '+=50', ease: Linear.easeNone});
	tl.to(character, 0.5, {y: '-=22', ease: Linear.easeNone});
	tl.to(character, 1, {x: '+=100', ease: Linear.easeNone});
	tl.to(character, 0.75, {y: '-=64', ease: Linear.easeNone});
	tl.to(character, 0.5, {x: '+=50', ease: Linear.easeNone});
	tl.to(character, 0.5, {y: '-=41', ease: Linear.easeNone});
	//tl.to(character, 0.5, {y: '-=37', scale: 0.4, transformOrigin: '50% 100%'});
	tl.to(character, 1, {x: '+=100', ease: Linear.easeNone});
	tl.to(character, 7, {scale: 0.4, transformOrigin: '50% 100%', ease: Power2.easeIn}, '-=8');
	tl.to(character, 1, {x: '+=12', y: '+=50', scale: 1, transformOrigin: '50% 100%', onComplete: jump}, '-=0');
	tl.to(stage, 6, {x: '-=554', ease: Linear.easeNone}, '-=4');
	tl.to(text2_1, 8, {x: '+=20', ease: Linear.easeNone, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=6');
	tl.from(text2_2, 6, {x: '+=20', ease: Linear.easeNone, force3D: true, rotation: 0.01, rotationZ: 0.01}, '-=6');
	tl.to(text2_1, 0.5, {x: '+=970', ease: Linear.easeNone}, '-=0');
	tl.to(text2_2, 0.5, {x: '+=970', ease: Linear.easeNone}, '-=0.5');
	tl.to(stage, 0.5, {x: '-=470', ease: Linear.easeNone}, '-=0.5');
	tl.to(text3_1, 0.5, {x: '+=970', ease: Linear.easeNone}, '-=0');
	tl.to(text3_2, 0.5, {x: '-=970', ease: Linear.easeNone}, '-=0.3');
	tl.to(text3_3, 0.5, {x: '-=970', ease: Linear.easeNone}, '-=0.3');
	tl.to(text3_1, 2, {x: '+=10', ease: Linear.easeNone}, '-=0.3');
	tl.to(text3_2, 2, {x: '-=10', ease: Linear.easeNone}, '-=1.7');
	tl.to(text3_3, 2, {x: '-=10', ease: Linear.easeNone}, '-=1.7');
	tl.to([cta, logo], 0.5, {autoAlpha: 1, onComplete: hover}, '-=2');
}

function exitHandler(event) {
	window.open(clickTag,'_blank');
}

function hover(event) {
	var mouseEffect = TweenLite.fromTo(ctaShine, .5, {backgroundPosition:"-141px 0"},{backgroundPosition:"141px 0",paused:true});
	mouseEffect.restart();
	startWalk();
}