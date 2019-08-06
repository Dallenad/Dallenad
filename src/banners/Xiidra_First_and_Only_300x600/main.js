var _loadedImages = 0,
_imageArray = new Array('copy_f1_01.png','copy_f2_01.png','copy_f3_01.png','copy_f4_01.png','copy_f4_02.png','cta.svg','ctaArrw.svg','i0.png','i1.png','i3.png','logoShire.svg','xiidra_logo.png','xiidra_logoLow.png'),
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
autoScrollSpeed = 350,//
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
    _flyingPath0 = [{x:0,y:0},{x:40,y:-150},{x:130,y:-25}],
    _flyingPath1 = [{x:130,y:-25},{x:165,y:-150},{x:275,y:-25}],
    _flyingPath2 = [{x:275,y:-25},{x:355,y:-150},{x:445,y:-25}],
    _flyingPath3 = [{x:445,y:-25},{x:530,y:-150},{x:586,y:-25}],
    _flyingPath4 = [{x:586,y:-25},{x:600,y:-150},{x:500,y:-550}],
    _i0aPath = "M16.3,36.9H3.5c0,0,3.7,9.8,3.7,28.1c0,10.4-3.7,25.5-3.7,25.5h12.7c0,0,3.7-9.8,3.7-25.5 C20,46.7,16.3,36.9,16.3,36.9z",
    _i0bPath = "M16.3,36.9H3.5c0,0-3.5,9.8-3.5,28.1c0,10.4,3.5,25.5,3.5,25.5h12.7c0,0-3.5-9.8-3.5-25.5 C12.7,46.7,16.3,36.9,16.3,36.9z";
    _i0cPath = "M16.3,36.9H3.5c0,0,0,9.8,0,28.1c0,10.4,0,25.5,0,25.5h12.7c0,0,0-9.8,0-25.5C16.3,46.7,16.3,36.9,16.3,36.9z";

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
    .to(['#copy_f1_01','#copy_f2_01','#copy_f3_01','#bg'],8,{x:"-=800",ease:_p1EI,onStart:actionsButton,onComplete:function(){
        TweenMax.killTweensOf(['#i1a','#i1b'])
        }
    },.1,'-=.5')
    .staggerTo(".i0",.1,{scaleY:.9,scaleX:1.4,y:"+=10",transformOrigin:'10px 100px',ease:_p1EI},.1,"f1")
    .staggerTo(".i0",.1,{scaleY:1,scaleX:1,y:'-=10',transformOrigin:'10px 100px',onStart:iiAnimInit,onStartParams:['1',_i0aPath,_i0aPath],ease:_p1EI},.1,"f1+=.1")

    .call(function(){
        var _tl2 = new TimelineMax();
        var _hop = 1.5;
        _tl2
        .timeScale(1.2)
        .to('.i0_Cont',_hop,{onStart:iiAnim,onStartParams:['1',_i0bPath,_i0bPath],scale:.55,bezier:{type:"quadratic",values:_flyingPath0,autoRotate:["x","y","rotation",90,false]},ease:_s1IO})
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath1,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop)
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath2,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop*2)
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath3,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop*3)
        .to('.i0_Cont',_hop,{bezier:{type:"quadratic",values:_flyingPath4,autoRotate:["x","y","rotation",90,false]},ease:_s1IO},_hop*4)
    }, [], this, 1.4)

    .from("#logoXiidra",.5,{y:-160},'-=.25')
    .staggerFrom(["#copy_f4_01","#copy_f4_02","#cta"],.5,{x:"+=300",ease:_p1EO,onStart:actionsButton,onComplete:function(){
        TweenMax.killTweensOf(['#i1a','#i1b'])
        }
    },.1,'-=.5')

    .from("#isi",.5,{y:220},'-=1.25')
    .set("#FPILink",{display:'block'},'-=1')
    .to("#btnExit",.5,{height:378},'-=.5')

    .staggerFrom(".i3",.5,{y:"-=150",opacity:0,ease:_bEO},.1)
    .staggerTo(".i3",.25,{scaleY:.7,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.2')
    .staggerTo(".i3",.1,{scaleY:1.25,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.1')
    .staggerTo(".i3",.05,{scaleY:1,transformOrigin:'0 33px',ease:_p1EO},.1,'-=.05')

    .to(_isiText,18,{scrollTo:{y:225},ease:Power0.easeNone})
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
