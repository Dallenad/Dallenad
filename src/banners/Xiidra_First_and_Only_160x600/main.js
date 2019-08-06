var _loadedImages = 0,
_imageArray = new Array('copy_f1_01.png','copy_f2_01.png','copy_f3_01.png','copy_f4_01.png','copy_f4_02.png','cta.svg','ctaArrw.svg','i0.png','i0EF.png','i1.png','i3.png','logoShire.svg','xiidra_logo.png','xiidra_logoLow.png'),
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
    _s2IO = SlowMo.ease.config(0.1, 1, false),
    _flyingPath0 = [{x:0,y:0},{x:40,y:-150},{x:90,y:-10}],
    _flyingPath1 = [{x:90,y:-15},{x:135,y:-150},{x:165,y:-15}],
    _flyingPath2 = [{x:165,y:-15},{x:200,y:-150},{x:250,y:-15}],
    _flyingPath3 = [{x:250,y:-15},{x:280,y:-150},{x:355,y:-15}],
    _flyingPath4 = [{x:355,y:-15},{x:426,y:-600},{x:426,y:-70}],
    _flyingPath5 = [{x:426,y:-70},{x:426,y:-110},{x:426,y:-102}],
    _i0aPath = "M9.8,24H2.2c0,0,2.2,5.8,2.2,16.8C4.4,47,2.2,56,2.2,56h7.6c0,0,2.2-5.9,2.2-15.2C12,29.8,9.8,24,9.8,24z",
    _i0bPath = "M9.8,24H2.2c0,0-2.2,5.8-2.2,16.8C0,47,2.2,56,2.2,56h7.6c0,0-2.2-5.9-2.2-15.2C7.6,29.8,9.8,24,9.8,24z";
    _i0cPath = "M9.8,24H2.2c0,0,0,5.8,0,16.8c0,6.2,0,15.2,0,15.2h7.6c0,0,0-5.9,0-15.2C9.8,29.8,9.8,24,9.8,24z";

var isCH = /Google Inc/.test(navigator.vendor),
    isFF = /Firefox/.test(navigator.userAgent),
    isSF = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
    isIE =  /Trident/.test(navigator.userAgent),
    scrollToBrowser;

if( isCH == true ){
    scrollToBrowser = 145;
    // console.log('160x600 Chrome true','scrollToBrowser =',scrollToBrowser);
}else if( isFF == true ){
    scrollToBrowser = 140;
    // console.log('160x600 Firefox true','scrollToBrowser =',scrollToBrowser);
}else if( isSF == true ){
    scrollToBrowser = 135;
    // console.log('160x600 Safari true','scrollToBrowser =',scrollToBrowser);
}else if( isIE == true ){
    scrollToBrowser = 138;
    // console.log('160x600 iE true','scrollToBrowser =',scrollToBrowser);
}else {
    scrollToBrowser = 138;
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

function iiAnimInit(ident,path1,path2){
    // console.log('i2Anim');
    TweenMax.to('#i'+ident+'a',.25,{morphSVG:path1,ease:_p1EI})
    TweenMax.to('#i'+ident+'b',.25,{morphSVG:path2,ease:_p1EI})
}
function iiAnim(ident,path1,path2){
    // console.log('i2Anim');
    // TweenMax.to('#i'+ident+'a',.15,{ease:_p0,repeat:-1,yoyo:true,morphSVG:path1})
    // TweenMax.to('#i'+ident+'b',.15,{ease:_p0,repeat:-1,yoyo:true,morphSVG:path2})

    TweenMax.to('#i'+ident+'a',.15,{ease:_p0,morphSVG:_i0cPath})
    TweenMax.to('#i'+ident+'b',.15,{ease:_p0,morphSVG:_i0cPath})
}

function initAnimations(){
    _customEase = CustomEase.create("_customEase", "M0,0,C0,0,0.274,0,0.4,0.072,0.999,0.414,1,1,1,1");

    _tl
    // .addPause()
    // .timeScale(200)
    .addLabel("f1","+=1")
    .to(['#copy_f1_01','#copy_f2_01','#copy_f3_01'],8,{x:"-=415",ease:_p1EI,onStart:function(){
        TweenMax.to('#bg',7,{x:"-=415",ease:_p1EI,delay:2})
    },onComplete:function(){
        TweenMax.killTweensOf(['#i1a','#i1b'])
        }
    },.1,'-=.5')
    .staggerTo(".i0",.1,{scaleY:.9,scaleX:1.4,y:"+=10",transformOrigin:'10px 50px',ease:_p1EI},.1,"f1")
    .staggerTo(".i0",.1,{scaleY:1,scaleX:1,y:'-=10',transformOrigin:'10px 50px',onStart:iiAnimInit,onStartParams:['1',_i0aPath,_i0aPath],ease:_p1EI},.1,"f1+=.1")

    .call(function(){
        var _tl2 = new TimelineMax();
        var _hop = 1.5;
        _tl2
        .timeScale(1.2)
        .to('.i0_Cont',_hop,{onStart:iiAnim,onStartParams:['1',_i0bPath,_i0bPath],scale:.55,bezier:{type:"quadratic",values:_flyingPath0,autoRotate:["x","y","rotation",90,false]},ease:_s1IO})
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath1,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop)
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath2,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop*2)
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath3,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop*3)
        .to('.i0_Cont',_hop+=.85,{bezier:{type:"quadratic",values:_flyingPath4,autoRotate:["x","y","rotation",0,true]},ease:_s1IO,onComplete:function(){
            TweenMax.to('.i0_Cont',.1,{bezier:{type:"quadratic",values:_flyingPath5,autoRotate:["x","y","rotation",0,true]}})
        }},_hop*2.5)
        .to('.i0EF',.1,{opacity:1},_hop*2.9)
        .to('.i0_Cont',_hop/2,{scale:.65,ease:_s1IO},_hop*3)

    }, [], this, 1.4)

    .from("#logoXiidra",.5,{y:-105},'-=.25')
    .staggerFrom(["#copy_f4_01","#copy_f4_02","#cta"],.5,{x:"+=160",ease: _p1EO,onStart:actionsButton},.1,'-=.5')
    .from("#isi",.5,{y:220},'-=.5')
    .set("#FPILink",{display:'block'},'-=.5')
    .to("#btnExit",.5,{height:400},'-=.5')

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
