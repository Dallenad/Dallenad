var _loadedImages = 0,
_imageArray = new Array('copy_f1_01.png','copy_f4_01.png','copy_f4_02.png','cta.svg','ctaArrw.svg','i0.png','i1.png','i3.png','logoShire.svg','xiidra_logo.png','xiidra_logoLow.png'),
_isiText = document.getElementById('isi-text'),
_container = document.getElementById('isi'),
_isiControls = document.getElementById('isi-controls'),
_scrollForMore = document.getElementById('scrollForMore'),
_scrollerBeingDragged = false,
_scroller,_scrollerline,_arrowUp,_arrowDown,
_normalizedPosition,
_topPosition,
_contentPosition = 0,
_percentY,
autoScroll,//Interval
autoScrollSpeed = 80,//
scrollStep = 5,//Arrow click seek
_textScrollHeight;
var _tl = new TimelineMax(),
    _bEO = Back.easeOut,
    _bEI = Back.easeIn,
    _p1EI = Power1.easeIn,
    _p1EO = Power1.easeOut,
    _p2EI = Power2.easeIn,
    _p1EIO = Power1.easeInOut,
    _p4EIO = Power4.easeInOut,
    _p0 = Power0.easeNone,
    _s1IO = SlowMo.ease.config(0.1, 0.4, false),
    _flyingPath1 =[{x:140,y:-190},{x:150,y:-170},{x:160,y:-100}],
    _flyingPath2 =[{x:160,y:-100},{x:200,y:-170},{x:250,y:-100}],
    _flyingPath3 =[{x:250,y:-100},{x:280,y:-170},{x:355,y:-100}],
    _flyingPath4 =[{x:355,y:-100},{x:380,y:-170},{x:455,y:-100}],
    _flyingPath5 =[{x:455,y:-100},{x:475,y:-170},{x:495,y:-180}],
    _i1aPath = "M17.4,10.8l0-3.8c0,0-3.4-0.6-8.3-0.3C6.6,6.8,2.8,7.1,0.5,8.1l0.1,3.5c0,0,4.2-1.2,8.8-1.2 C13.2,10.3,17.4,10.8,17.4,10.8z",
    _i1bPath = "M17.1,4.5l0-3.8c0,0-3.5-0.6-8.4-0.3C6.1,0.6,3.1,1.1,0.1,1.8l0.1,3.5c0,0,4.9-1.2,8.8-1.2 C13.6,4.1,17.1,4.5,17.1,4.5z";

var isCH = /Google Inc/.test(navigator.vendor),
    isFF = /Firefox/.test(navigator.userAgent),
    isSF = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
    isIE =  /Trident/.test(navigator.userAgent),
    scrollToBrowser;

if( isCH == true ){
    scrollToBrowser = 105;
    // console.log('728x90 Chrome true','scrollToBrowser =',scrollToBrowser);
}else if( isFF == true ){
    scrollToBrowser = 113;
    // console.log('728x90 Firefox true','scrollToBrowser =',scrollToBrowser);
}else if( isSF == true ){
    scrollToBrowser = 105;
    // console.log('728x90 Safari true','scrollToBrowser =',scrollToBrowser);
}else if( isIE == true ){
    scrollToBrowser = 103;
    // console.log('728x90 iE true','scrollToBrowser =',scrollToBrowser);
}else {
    scrollToBrowser = 103;
    // console.log('420x90 none true','scrollToBrowser =',scrollToBrowser);
}

MorphSVGPlugin.convertToPath('circle,rect,polygon')

this.addEventListener('DOMContentLoaded',preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load',trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) init();
}

function init(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel','stylesheet' );
    css.setAttribute( 'type','text/css' );
    css.setAttribute( 'href',"style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);


//***** Start - Scroll creation and events registering
    createScroll(false);
//***** End

    initAnimations();

}

function elem(id){return document.querySelector(id)};

function iiAnim(ident,path1,path2){
    // console.log('i2Anim');
    // TweenMax.to('#i'+ident+'a',.15,{ease:_p0,repeat:-1,yoyo:true,morphSVG:path1})
    // TweenMax.to('#i'+ident+'b',.15,{ease:_p0,repeat:-1,yoyo:true,morphSVG:path2})
}

function initAnimations(){
    _tl
    // .addPause()
    .addLabel("f1","+=1")

    .staggerTo(".i0",.2,{scaleY:.5,scaleX:1.4,transformOrigin:'10px 120px',ease:_p1EI},.1,"f1")
    .staggerTo(".i0",.7,{y:"-=330",ease:_p1EI},.1,"f1")
    .staggerTo(".i0",.1,{scaleY:1.3,scaleX:1,transformOrigin:'10px 120px',ease:_p1EI},.1,"f1+=.15")

    .call(function(){
        var _tl2 = new TimelineMax();
        var _hop = 1.5;
        _tl2
        .timeScale(1.75)
        .to("#i1",_hop+1,{onStart:iiAnim,onStartParams:['1',_i1aPath,_i1bPath],bezier:{type:"quadratic",values:_flyingPath1,autoRotate:["x","y","rotation",0,false]},ease:_p4EIO})
        .to("#i1",_hop,{bezier:{type:"quadratic",values:_flyingPath2,autoRotate:["x","y","rotation",0,false]},ease:_s1IO},_hop+'+=.2')
        .to("#i1",_hop,{bezier:{type:"quadratic",values:_flyingPath3,autoRotate:["x","y","rotation",0,false]},ease:_s1IO},_hop*2+'+=.2')
        .to("#i1",_hop,{bezier:{type:"quadratic",values:_flyingPath4,autoRotate:["x","y","rotation",0,false]},ease:_s1IO},_hop*3+'+=.2')
        .to("#i1",_hop,{bezier:{type:"quadratic",values:_flyingPath5,autoRotate:["x","y","rotation",0,false]},ease:_s1IO},_hop*4+'+=.2')
    }, [], this, 1.25)

    .addLabel("f2")
    .to('#copy_f1_01',4,{x:'-=728',ease:_p1EI})
    .to('#bg',4,{opacity:0,ease:_p1EI},'-=4')
    .staggerFrom(["#copy_f4_01","#copy_f4_02","#cta"],.5,{y:"+=90",ease: _p1EO,onStart:actionsButton},.2,'-=.5')
    .from(["#isi","#logoXiidra","#FPILink"],.5,{x:"+=365",ease: _p1EO})
    .to("#btnExit",.5,{width:378,ease: _p1EO},"-=.5")

    .staggerFrom(".i3",.5,{y:"-=30",opacity:0,ease:_bEO},.1)
    .staggerTo(".i3",.25,{scaleY:.7,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.2')
    .staggerTo(".i3",.1,{scaleY:1.25,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.1')
    .staggerTo(".i3",.05,{scaleY:1,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.05')

    .to(_isiText,18,{scrollTo:{y:scrollToBrowser},ease:Power0.easeNone})
    ;
}

function actionsButton(){
    elem('#btnExit').addEventListener('mouseover',function(){ TweenMax.to('#cta',.15,{ backgroundColor:'#FED100' }); TweenMax.to('#ctaArrw',.15,{ x:2 })});
    elem('#btnExit').addEventListener('mouseout',function(){ TweenMax.to('#cta',.15,{ backgroundColor:'#280091' }); TweenMax.to('#ctaArrw',.15,{ x:0 })});
}

//***** Scrolling functions *****//
function createScroll(hasArrows,hasScroller){//***** Scrolling function - Creation(init)
    hasArrows = typeof hasArrows !== 'undefined' ? hasArrows: true;
    hasScroller = typeof hasScroller !== 'undefined' ? hasScroller: true;
    if (hasArrows){
        _arrowUp= document.createElement("div");
        _arrowUp.id = 'arrowUp';
        _arrowUp.className = 'retina';
        _isiControls.appendChild(_arrowUp);
    }

    if (hasScroller){
        _scrollerline= document.createElement("div");
        _scrollerline.className = hasArrows? 'isiLineWithArrows': 'isiLineNoArrows';
        _isiControls.appendChild(_scrollerline);

        _scroller = document.createElement("div");
        _scroller.className = 'scroller';
        _scrollerline.appendChild(_scroller);
    }

    if (hasArrows){
        _arrowDown= document.createElement("div");
        _arrowDown.id = 'arrowDown';
        _arrowDown.className = 'retina';
        _isiControls.appendChild(_arrowDown);
    }

//Listeners
    if (hasScroller){
        _isiText.addEventListener('scroll',moveScroller);

        _scroller.addEventListener('mousedown',startDrag);
        _scrollerline.addEventListener('click',seekTo);

        window.addEventListener('mousemove',scrollBarScroll);
    }

    if (hasArrows){
        _arrowUp.addEventListener('mousedown',scrollUp);
        _arrowDown.addEventListener('mousedown',scrollDown);
        _arrowUp.addEventListener('mouseup',scrollStop);
        _arrowDown.addEventListener('mouseup',scrollStop);

    }

    _isiText.addEventListener('wheel',isiWheel);
    window.addEventListener('mouseup',stopDrag);

}

function seekTo(evt){//***** Scrolling function - Seeks to an specific point
    var normalPosition = (evt.clientY - _isiControls.offsetParent.offsetTop - _scrollerline.offsetTop) / _scrollerline.clientHeight;
    _textScrollHeight = _isiText.scrollHeight - _container.offsetHeight;//gets the text height(offset) to scroll
    _isiText.scrollTop = normalPosition * _textScrollHeight;
    clearIntervalFunct();
}

function startDrag(evt) {//***** Scrolling function - Starts dragging when holds scroller button
    _normalizedPosition = evt.clientY - _scrollerline.scrollTop;
    _contentPosition = _isiText.scrollTop;
    _scrollerBeingDragged = true;
    clearIntervalFunct();
}

function stopDrag(evt) {//***** Scrolling function - Stops dragging when releases scroller button
    if (typeof buttonPress != 'undefined' && buttonPress)
    clearInterval(buttonPress);
    _scrollerBeingDragged = false;
}

function scrollBarScroll(evt) {//***** Scrolling function - Moves text up/down
        evt.preventDefault();
    if (_scrollerBeingDragged === true) {
        var mouseDifferential = evt.clientY - _normalizedPosition;
        var scrollEquivalent = mouseDifferential * (_isiText.scrollHeight / _scrollerline.clientHeight);
        _isiText.scrollTop = _contentPosition + scrollEquivalent;
    }
}

function moveScroller(evt) {//***** Scrolling function - Moves scroller button up/down
    evt.preventDefault();
    _textScrollHeight = _isiText.scrollHeight - _container.offsetHeight;//gets the text height(offset) to scroll
    var remainOffsetHieght = _textScrollHeight - _isiText.scrollTop;//when scrolling,it gets the remaining height(top offset)
    var percentHeigh = 1 - remainOffsetHieght/_textScrollHeight;//transform to a percentage
    _scroller.style.top = Math.abs((_scrollerline.offsetHeight -_scroller.offsetHeight) * percentHeigh) + 'px';//To equivalent scroller line height
}

function autoScroll(){//***** Scrolling function - Autoscrolls text velocity must be and integer
        _isiText.scrollTop+=1;
}

function isiWheel(evt){//***** Scrolling function - Clears autoscroll interval when mouse wheel scrolling
    clearIntervalFunct();
}

function scrollUp(){//***** Scrolling function - Sets text a step up
    console.log("up");
    clearIntervalFunct();
    buttonPress = setInterval(function(){_isiText.scrollTop-=scrollStep},100);
}

function scrollDown(){//***** Scrolling function - Sets text a step down
    console.log("down")
    clearIntervalFunct();
    buttonPress = setInterval(function(){_isiText.scrollTop+=scrollStep},100);
}

function scrollStop(){//***** Scrolling function - Clears buttons interval
    clearInterval(buttonPress);
}
function clearIntervalFunct(){
    // clearInterval(autoScroll);
    _tl.kill(null,_isiText);
    _scrollForMore.style.display = 'none';
}
