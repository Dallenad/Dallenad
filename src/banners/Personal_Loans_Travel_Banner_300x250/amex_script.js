
// var ctaShimmer = document.getElementById("ctaShimmer");

function startAd() {

    reset();
    listeners();
}

var reset = function() {

    TweenMax.set(container, {autoAlpha:1});
     animation01();
}

var hover = function(event) {
    var tl = new TimelineLite();
    tl.fromTo(ctaBTN, .5, { backgroundPosition: "-129px 0px" }, { backgroundPosition: "129px 0px", backgroundRotation: 5 })
    return tl;
}

var click = function(event) {
    window.open(window.clickTag);
}
var endFrameElements = [copyEF01,copyEF02,line01,copyEF03,line02,copyEF04,line03,copyEF05,ctaBTN,copyEF06];
/*var kitchen = [element02,element03,element04,element05,element06,element07,element08,element09];
var kitchen2 = [element01,element02,element03,element04,element05,element06,element07,element08,element09];*/

function listeners() {
    var adContainer = document.getElementById("container");
    adContainer.addEventListener('mouseenter', hover);
    adContainer.addEventListener('click', click);
    // adContainer.addEventListener('mouseleave', ctaOut, false);
}

function scaleImage() {
    TweenMax.set(background, { scale: 1, z: 0.01, rotationZ: 0.01, force3D: true, transformOrigin: "top" });
    //TweenMax.to (background, 14.5, { scale:1, y:"+150",x:"+150", ease:Linear.easeNone,transformOrigin: "bottom"} );
    TweenMax.to(background, 2, { scale: 1.3, repeat: 3, yoyo: true, ease: Linear.easeNone, transformOrigin: "bottom" });
}
//TIMELINE LINE
function animation01() {
    //setElements
    TweenMax.set([ctaBTN, copy01, copy02,endFrameElements,dark02], { opacity: 0 });
    //upPosition
    // TweenMax.set([copy01, copy02], { top: "-=150" });
    //downPosition

    //start animation
    var sequence = new TimelineMax();
    sequence
        .add("frame1")
        //timelabel_frame1
        .to(copy01, 1, { opacity: 1, ease: Sine.easeIn }, "frame1")
        .add("frame2", "+=3")
        //timelabel_frame2+PLUS A PAUSE
        .to(copy01, .5, { opacity: 0, ease: Sine.easeIn }, "frame2+=0")
        //.to(card_silver, 6, {top:176, ease:Sine.easeIn}, "frame2+=0")
        .to(copy02, 1, { opacity: 1, ease: Sine.easeIn }, "frame2+=0")
		.add('moveObjects', '-=2')
		.from(book, 1, {x: '-=100'}, 'moveObjects')
		.from(camera, 1, {x: '-=100'}, 'moveObjects')
		.from(ticket, 1, {x: '-=200'}, 'moveObjects')
		.from(socks, 1, {x: '+=150'}, 'moveObjects')
		.from(journal, 1, {x: '+=150'}, 'moveObjects')
		.from(binoculars, 1, {x: '+=50'}, 'moveObjects')
		.from(penguin, 1, {y: '-=120'}, 'moveObjects')
		.from(iceberg, 1, {y: '-=120'}, 'moveObjects')
		.from(antarctica, 1, {y: '-=120'}, 'moveObjects')
		.from(viewfinder, 1, {y: '+=120'}, 'moveObjects')
		.from(geometric, 1, {y: '+=50'}, 'moveObjects')
        .add("frame3", "+=3")
        //timelabel_frame3+PLUS A PAUSE
        //.staggerTo([logo, ctaBTN], .5, { opacity: 1, ease: Sine.easeIn,onComplete: animation02 }, .3, "frame3+=1")
        .to(copy02,1,{opacity:0,ease: Sine.easeIn,onComplete: EndFrameAnimation},"frame3")
        // .add(hover, "+=1")
        // console.log(sequence.duration());
}

function EndFrameAnimation() {

    var endFsecuence = new TimelineMax();
    endFsecuence
        //time label
        .add("endFrame")
        //takes out the logo and re-locate it, be sure to include the function resetLogo
        .to(logo,.2,{opacity:0},"endFrame")
        //takeout the previous scene
        //.to(kitchen2,.3,{opacity:0},"endFrame")
        //darken the bg
        .to(dark02,.5,{opacity:0.25},"endFrame+=.3")
        //call all endFrame elements
        .staggerTo(endFrameElements,.5,{opacity:1,ease:Sine.easeIn},.1,"endFrame")
}

//function resetLogo(){TweenMax.set(logo,{left:39,top:20});}

window.addEventListener('load', startAd);