(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_", frames: [[209,380,115,84],[235,252,33,29],[0,380,207,100],[0,252,233,126],[0,0,300,250]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.base = function() {
	this.initialize(img.base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.border = function() {
	this.spriteSheet = ss["BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.spriteSheet = ss["BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.spriteSheet = ss["BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sled = function() {
	this.spriteSheet = ss["BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.whiteshadow = function() {
	this.spriteSheet = ss["BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ctashine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,14,174,0)","rgba(0,14,174,0.502)","rgba(0,14,174,0)"],[0.224,0.518,0.788],-28.4,-16.4,28.4,16.4).s().p("AlHGqIAAtTIKPAAIAANTg");
	this.shape.setTransform(32.8,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctashine, new cjs.Rectangle(0,0,65.6,85.1), null);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000EAE").s().p("AoLJAIAAx/IQXAAIAAR/g");
	this.shape.setTransform(150,125,2.863,2.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctabg, new cjs.Rectangle(0,0,300,250), null);


(lib.snow_border__mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.border();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow_border__mc, new cjs.Rectangle(0,0,115,84), null);


(lib.sled__mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sled();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sled__mc, new cjs.Rectangle(0,0,233,126), null);


(lib.shawdon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shawdon_mc, new cjs.Rectangle(0,0,207,100), null);


(lib.head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.head_mc, new cjs.Rectangle(0,0,33,29), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.base();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH7BDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAWAAAUAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgHAGQgHAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAFiBDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAXAAATAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgIAGQgGAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAB8BbIgHgIIhdh2IAABzQAAAGgEAEQgFAFgGAAQgGAAgDgFQgFgEAAgGIAAifQAAgGAEgEQAEgEAGAAQAHgBAKALIBdB3IAAiBIAeAAIAACtQAAAGgEAEQgEAFgHAAQgFgBgFgDgAkHBDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAXAAATAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgHAGQgHAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAmvBIQgVgVAAghIAAhhQAAgGAEgEQAEgEAHAAQAHAAAEAEQAEAEAAAGIAABiQAAAUAMANQANAPAWAAQAWAAANgPQAMgNAAgUIAAhwIAeAAIAABvQAAAhgVAVQgVAXgjAAQgjAAgVgXgADYBeQgHAAgEgFQgEgEAAgGIAAidQAAgGAEgFQAEgEAHAAIBcAAQAHAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgHAAIhNAAIAAAsIBFAAQARAAAAAPQAAAGgFAEQgEAEgIAAIhFAAIAAA2IBcAAIAAAegAhfBeIAAitQAAgGAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAGIAACtgAp2BeIAAisQAAgGAEgFQAEgEAGAAIBBAAQAYAAAOANQAOANAAAWQAAAZgTAOQAJADAHAHQAMAMAAAWQAAAYgQAPQgQAQgZABgApYBBIAvAAQAPgBAJgHQAIgJAAgMQAAgLgIgIQgIgJgQAAIgvAAgApYgSIAtAAQAMAAAHgGQAHgHAAgJQAAgLgHgGQgHgHgMAAIgtAAg");
	this.shape.setTransform(34.3,18.7,0.536,0.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AF8BFIgCgCIAOgMIACABQAUAUAZAAQAQAAALgKQAJgJAAgMQAAgRgTgKIgpgUQgggQAAgdQAAgUAQgNQAPgNAYgBQATABAXALQAEADAAAFQAAAEgCADQgDADgEAAIgFgCQgQgJgQAAQgRAAgJAHQgKAJAAAMQAAAJAFAHQAFAGAMAGIAoAUQAeAQAAAcQAAAUgPAOQgQAPgYAAQggABgbgagADBBWIABgDIBGirQADgGAFAAQAFAAADAGIBKC1IgSAAIgchFIhIAAIgbBCQgBAEgGAAQgJAAAAgIgAD0AFIA4AAIgchEgAAdBDQgcgcAAgnQAAgmAcgcQAcgcAnAAQAmABAbAaIACABQACAEAAADQAAADgCADQgDACgEABQgEgBgDgCQgWgWgfAAQggAAgWAXQgWAVAAAfQAAAfAWAXQAWAWAgAAQAhAAAXgZIANANQgbAegqAAQgnABgcgcgAjmBWIAAgCIAfirQACgGAHgBQAFAAACAGIA4CIIA4iIQACgGAFAAQAHABACAGIAhC0IgRAAIgciVIg0CBQgDAFgFAAQgFAAgDgFIg0iBIgbCQQgCAGgGAAQgIAAAAgIgAmhBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgngBQgnABgbgcgAmUg0QgXAVAAAfQAAAfAXAXQAWAWAfAAQAgAAAWgWQAWgXAAgfQAAgfgWgVQgWgXggAAQgfAAgWAXgApjBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAmABAcAaIABABQADAEAAADQAAADgDADQgCACgEABQgEgBgDgCQgXgWgfAAQgfAAgWAXQgXAVAAAfQAAAfAXAXQAWAWAfAAQAhAAAYgZIANANQgcAegqAAQgnABgbgcgAI6BdIAAinIgtAAQgEAAgCgCQgDgEAAgEQAAgDADgDQADgCADgBIBqAAQAEABACACQADADAAADQAAAEgDAEQgCACgEAAIgsAAIAACng");
	this.shape_1.setTransform(34.3,5,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,68.7,23.8), null);


(lib.endLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH7BDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAWAAAUAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgHAGQgHAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAFiBDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAXAAATAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgIAGQgGAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAB8BbIgHgIIhdh2IAABzQAAAGgEAEQgFAFgGAAQgGAAgDgFQgFgEAAgGIAAifQAAgGAEgEQAEgEAGAAQAHgBAKALIBdB3IAAiBIAeAAIAACtQAAAGgEAEQgEAFgHAAQgFgBgFgDgAkHBDIAWgUQAIAHAEADQANAJAQAAQANAAAJgHQAIgHAAgJQAAgOgVgLIgZgMQgTgIgJgKQgMgNAAgSQAAgWARgPQAQgOAZABQAXAAATAJQALAEAAALQAAAGgFAFQgDADgGAAQgDAAgKgEQgMgFgMgBQgOABgHAGQgHAGAAAIQAAAOARAIIAfAOQAVAKAJAMQAHAMAAAQQAAAXgRAOQgSAPgdABQgmgBgWgbgAmvBIQgVgVAAghIAAhhQAAgGAEgEQAEgEAHAAQAHAAAEAEQAEAEAAAGIAABiQAAAUAMANQANAPAWAAQAWAAANgPQAMgNAAgUIAAhwIAeAAIAABvQAAAhgVAVQgVAXgjAAQgjAAgVgXgADYBeQgHAAgEgFQgEgEAAgGIAAidQAAgGAEgFQAEgEAHAAIBcAAQAHAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgHAAIhNAAIAAAsIBFAAQARAAAAAPQAAAGgFAEQgEAEgIAAIhFAAIAAA2IBcAAIAAAegAhfBeIAAitQAAgGAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAGIAACtgAp2BeIAAisQAAgGAEgFQAEgEAGAAIBBAAQAYAAAOANQAOANAAAWQAAAZgTAOQAJADAHAHQAMAMAAAWQAAAYgQAPQgQAQgZABgApYBBIAvAAQAPgBAJgHQAIgJAAgMQAAgLgIgIQgIgJgQAAIgvAAgApYgSIAtAAQAMAAAHgGQAHgHAAgJQAAgLgHgGQgHgHgMAAIgtAAg");
	this.shape.setTransform(34.3,28.7,0.536,0.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF8BFIgCgCIAOgMIACABQAUAUAZAAQAQAAALgKQAJgJAAgMQAAgRgTgKIgpgUQgggQAAgdQAAgUAQgNQAPgNAYgBQATABAXALQAEADAAAFQAAAEgCADQgDADgEAAIgFgCQgQgJgQAAQgRAAgJAHQgKAJAAAMQAAAJAFAHQAFAGAMAGIAoAUQAeAQAAAcQAAAUgPAOQgQAPgYAAQggABgbgagADBBWIABgDIBGirQADgGAFAAQAFAAADAGIBKC1IgSAAIgchFIhIAAIgbBCQgBAEgGAAQgJAAAAgIgAD0AFIA4AAIgchEgAAdBDQgcgcAAgnQAAgmAcgcQAcgcAnAAQAmABAbAaIACABQACAEAAADQAAADgCADQgDACgEABQgEgBgDgCQgWgWgfAAQggAAgWAXQgWAVAAAfQAAAfAWAXQAWAWAgAAQAhAAAXgZIANANQgbAegqAAQgnABgcgcgAjmBWIAAgCIAfirQACgGAHgBQAFAAACAGIA4CIIA4iIQACgGAFAAQAHABACAGIAhC0IgRAAIgciVIg0CBQgDAFgFAAQgFAAgDgFIg0iBIgbCQQgCAGgGAAQgIAAAAgIgAmhBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgngBQgnABgbgcgAmUg0QgXAVAAAfQAAAfAXAXQAWAWAfAAQAgAAAWgWQAWgXAAgfQAAgfgWgVQgWgXggAAQgfAAgWAXgApjBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAmABAcAaIABABQADAEAAADQAAADgDADQgCACgEABQgEgBgDgCQgXgWgfAAQgfAAgWAXQgXAVAAAfQAAAfAXAXQAWAWAfAAQAhAAAYgZIANANQgcAegqAAQgnABgbgcgAI6BdIAAinIgtAAQgEAAgCgCQgDgEAAgEQAAgDADgDQADgCADgBIBqAAQAEABACACQADADAAADQAAAEgDAEQgCACgEAAIgsAAIAACng");
	this.shape_1.setTransform(34.3,15,0.536,0.536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHGPIAAsdQAAgJAHAAQAJAAAAAJIAAMdQgBAEgCACQgCADgEAAQgHAAAAgJg");
	this.shape_2.setTransform(80.5,21.9,0.536,0.536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002653").s().p("AiQB3IAAjtIEgAAIAADtgAByBXIgDgMIAJgHIgMAAIgDgLIgEALIgMAAIAKAHIgEAMIAKgHIAJAHgAAKBXIgEgMIAJgHIgLAAIgEgLIgCALIgLAAIAJAHIgEAMIAIgHIAKAHgAhdBXIgEgMIAJgHIgLAAIgDgLIgEALIgMAAIAKAHIgEAMIAKgHIAJAHgAA+AzIgDgLIAJgIIgMAAIgEgLIgDALIgMAAIAKAIIgEALIAJgHIAKAHgAgpAzIgEgLIAJgIIgLAAIgDgLIgEALIgLAAIAJAIIgEALIAKgHIAJAHgAByAPIgDgLIAJgHIgMAAIgDgLIgEALIgMAAIAKAHIgEALIAKgHIAJAHgAAKAPIgEgLIAJgHIgLAAIgEgLIgCALIgLAAIAJAHIgEALIAIgHIAKAHgAhdAPIgEgLIAJgHIgLAAIgDgLIgEALIgMAAIAKAHIgEALIAKgHIAJAHgAA+gUIgDgLIAJgIIgMAAIgEgLIgDALIgMAAIAKAIIgEALIAJgHIAKAHgAgpgUIgEgLIAJgIIgLAAIgDgLIgEALIgLAAIAJAIIgEALIAKgHIAJAHgAByg4IgDgLIAJgIIgMAAIgDgLIgEALIgMAAIAKAIIgEALIAKgHIAJAHgAAKg4IgEgLIAJgIIgLAAIgEgLIgCALIgLAAIAJAIIgEALIAIgHIAKAHgAhdg4IgEgLIAJgIIgLAAIgDgLIgEALIgMAAIAKAIIgEALIAKgHg");
	this.shape_3.setTransform(99.4,8,0.536,0.536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E20030").s().p("AlbDbIAAgiIK3AAIAAAigAlbCWIAAgiIK3AAIAAAigAlbBSIAAgiIK3AAIAAAigAg6ATIAAghIGWAAIAAAhgAg6gvIAAgiIGWAAIAAAigAg6hzIAAgjIGWAAIAAAjgAg6i4IAAgiIGWAAIAAAig");
	this.shape_4.setTransform(110.3,13.3,0.536,0.536);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlnDnIAAnNILPAAIAAHNg");
	this.shape_5.setTransform(110.3,13.3,0.536,0.536);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAABiQglAAgdgaQgcgZgEgmQALABAGADQAFAdAXAUQAXAUAeAAIAIAAIAAAIIAAAIgAAZBOQAZgIAQgVQAQgWAAgbQAAghgYgYQgYgYgiAAQggAAgYAXQgXAVgCAhQgJgDgIAAQAEgmAcgaQAcgbAmAAQApABAcAdQAdAcAAAoQABAigVAbQgVAaghAIg");
	this.shape_6.setTransform(110.3,33.1,0.536,0.536);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB31B").s().p("AhEBGQgdgdAAgpQgBghAWgbQAUgaAhgJIgBASQgZAIgQAWQgQAVAAAaQAAAiAYAYQAYAYAhAAQAhAAAYgWQAXgXACggQAJACAHABQgDAmgcAaQgcAagnABQgnAAgdgdgABSgLQgFgfgXgTQgXgUgfAAIgHABIAAgJIAAgJIAHAAQAmAAAdAbQAcAZADAmIgQgDg");
	this.shape_7.setTransform(104.6,37.9,0.536,0.536);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AC49").s().p("AhFBGQgcgdAAgpQAAghAUgbQAWgaAfgJIAAASQgZAIgQAWQgQAVAAAaQAAAiAYAYQAYAYAhAAQAhAAAXgWQAYgXACggQAIACAJABQgEAmgcAaQgcAagnABQgoAAgdgdgABSgLQgFgfgXgTQgXgUgfAAIgHABIAAgJIAAgJIAHAAQAnAAAcAbQAcAZAEAmIgRgDg");
	this.shape_8.setTransform(116,37.9,0.536,0.536);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0D4F").s().p("AhCBIQgcgZgDgmQAKABAHADQAEAdAXAUQAYAUAdAAQAiAAAYgYQAYgYAAgiQAAghgYgYQgYgYgiAAQgfAAgZAXQgXAVgCAhQgJgDgHAAQADgmAcgaQAcgbAmAAQApABAcAdQAdAcABAoQgBApgdAcQgcAdgpAAQgmAAgcgag");
	this.shape_9.setTransform(121.8,33.1,0.536,0.536);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0080CB").s().p("AAABiQgoAAgdgdQgdgcAAgpQAAgoAdgcQAdgdAogBQApABAdAdQAcAcAAAoQAAAigUAbQgVAaggAIIAAgRQAagIAPgVQAQgWAAgbQAAghgYgYQgYgYgiAAQghAAgYAYQgYAYAAAhQAAAiAYAYQAYAYAhAAIAIAAIAAAIIAAAIg");
	this.shape_10.setTransform(98.9,33.1,0.536,0.536);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(65.3,58.1,0.557,0.536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endLogo, new cjs.Rectangle(0,0,129.6,61.3), null);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape.setTransform(138.8,88.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_1.setTransform(120.7,88.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBkIAAjHICXAAIAAAyIhaAAIAAAYIBYAAIAAAxIhYAAIAAAZIBaAAIAAAzg");
	this.shape_2.setTransform(103.3,88.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBkIhIhqIAABqIg+AAIAAjHIA/AAIBFBkIAAhkIA9AAIAADHg");
	this.shape_3.setTransform(83.1,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBkIAAjHIA9AAIAADHg");
	this.shape_4.setTransform(67.5,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_5.setTransform(53.8,88.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BbQgVgLgKgUQgKgTAAgZIAAh1IA+AAIAABzQgBAPAJAJQAIAKARAAQATAAAIgKQAIgJAAgPIAAhzIA9AAIAAB1QAAAZgKATQgKAUgVALQgVALgiAAQggAAgWgLg");
	this.shape_6.setTransform(33.8,88.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBkIAAjHIB5AAQAVAAANAIQANAHAGANQAHALgBAMQAAATgJAMQgKALgPAEQARACAKANQALANABAUQAAAOgHAMQgGANgNAHQgOAIgUAAgAgeAzIAvAAQAHAAADgEQAEgEAAgFQAAgHgEgDQgDgEgHgBIgvAAgAgegYIAtAAQAFgBAEgEQADgDAAgGQAAgFgDgEQgEgDgFAAIgtAAg");
	this.shape_7.setTransform(12.9,88.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBkIAAiSIg2AAIAAg1ICnAAIAAA1Ig2AAIAACSg");
	this.shape_8.setTransform(140.6,65.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_9.setTransform(122.7,65.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuBkIgIgaIhMAAIgHAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhGIgWBGIAtAAg");
	this.shape_10.setTransform(103.3,65.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvBaQgYgNgOgXQgPgXAAgfQAAgeAPgXQAOgYAYgNQAZgMAeAAQAbAAASAJQATAIALANQAMAOAFAOIg0AYQgEgMgLgIQgKgJgPAAQgNAAgLAGQgKAIgGALQgGALAAANQAAAOAGALQAGALAKAHQALAHANAAQAPAAAKgIQALgJAEgMIA0AYQgGAOgKANQgMAOgTAJQgSAIgbABQgeAAgZgOg");
	this.shape_11.setTransform(82.6,65.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA6BkIAAh+IgtB+IgaAAIgsh+IAAB+Ig9AAIAAjHIBUAAIAiBlIAjhlIBUAAIAADHg");
	this.shape_12.setTransform(58.8,65.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag3BaQgZgNgOgXQgPgXAAgfQAAgeAPgXQAOgXAZgOQAYgMAfAAQAfAAAZAMQAYAOAPAXQAOAXABAeQgBAfgOAXQgPAXgYANQgZAOgfAAQgfAAgYgOgAgYgrQgLAIgGALQgGALAAANQAAAOAGALQAGALALAHQAKAHAOAAQAOAAALgHQALgHAGgLQAGgLAAgOQAAgNgGgLQgGgLgLgIQgLgGgOAAQgOAAgKAGg");
	this.shape_13.setTransform(34.1,65.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBaQgXgNgPgXQgPgXAAgfQAAgeAPgXQAPgYAXgNQAZgMAeAAQAbAAASAJQATAIALANQALAOAHAOIg1AYQgEgMgLgIQgKgJgPAAQgNAAgKAGQgLAIgGALQgGALAAANQAAAOAGALQAGALALAHQAKAHANAAQAPAAAKgIQALgJAEgMIA1AYQgHAOgKANQgMAOgTAJQgSAIgbABQgeAAgZgOg");
	this.shape_14.setTransform(12.6,65.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkBkIAAhNIhHAAIAABNIg9AAIAAjHIA9AAIAABHIBHAAIAAhHIA9AAIAADHg");
	this.shape_15.setTransform(68.1,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdBkIAAiTIg2AAIAAg0ICnAAIAAA0Ig2AAIAACTg");
	this.shape_16.setTransform(48.2,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeBkIAAjHIA8AAIAADHg");
	this.shape_17.setTransform(35,42.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBkIgahxIgZBxIg/AAIg6jHIBEAAIAaB5IAeh5IAtAAIAeB5IAZh5IBFAAIg5DHg");
	this.shape_18.setTransform(16.3,42.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_19.setTransform(133.2,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmBkIhJhrIAABrIg8AAIAAjHIA+AAIBEBjIAAhjIA9AAIAADHg");
	this.shape_20.setTransform(113.2,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_21.setTransform(93.6,19.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhYBkIAAjHIBqAAQAXAAAQAJQAQAKAIAPQAJAQAAATQAAASgJAPQgIAPgQAIQgQAKgXAAIgtAAIAABAgAgbgNIAlAAQAHgBAFgFQAGgEAAgIQAAgIgGgFQgFgFgHABIglAAg");
	this.shape_22.setTransform(75.4,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhYBkIAAjHIBpAAQAYAAAQAJQAQAKAIAPQAJAQgBATQABASgJAPQgIAPgQAIQgQAKgYAAIgtAAIAABAgAgcgNIAmAAQAIgBAEgFQAGgEAAgIQAAgIgGgFQgEgFgIABIgmAAg");
	this.shape_23.setTransform(55.8,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBkIgHgaIhNAAIgHAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhGIgWBGIAtAAg");
	this.shape_24.setTransform(34.9,19.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAkBkIAAhMIhGAAIAABMIg+AAIAAjHIA+AAIAABHIBGAAIAAhHIA8AAIAADHg");
	this.shape_25.setTransform(13.3,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy3, new cjs.Rectangle(0,0,151.5,106.6), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape.setTransform(219.1,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A459F").s().p("AguBaQgZgNgOgXQgOgXAAgfQAAgeAOgXQAOgYAZgNQAYgMAeAAQAbAAASAJQASAIAMANQAMAOAFAOIg0AYQgEgMgKgIQgLgJgPAAQgNAAgLAGQgKAIgGALQgGALAAANQAAAOAGALQAGALAKAHQALAHANAAQAPAAALgIQAKgJAEgMIA0AYQgFAOgMANQgLAOgTAJQgSAIgbABQgeAAgYgOg");
	this.shape_1.setTransform(199.9,65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A459F").s().p("AAmBkIhIhrIAABrIg9AAIAAjHIA+AAIBFBjIAAhjIA8AAIAADHg");
	this.shape_2.setTransform(178.3,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A459F").s().p("AAuBkIgHgaIhNAAIgHAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhGIgWBGIAtAAg");
	this.shape_3.setTransform(156.7,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A459F").s().p("AA6BkIAAh+IgtB+IgaAAIgsh+IAAB+Ig9AAIAAjHIBUAAIAiBlIAjhlIBUAAIAADHg");
	this.shape_4.setTransform(132.9,65.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A459F").s().p("AAVBkIgbhAIgWAAIAABAIg9AAIAAjHIBqAAQAYAAAQAJQAQAKAIAPQAIAPAAAUQAAARgGAMQgFALgIAHQgJAJgIADIAlBHgAgcgNIAkAAQAIAAAGgFQAFgFABgIQgBgJgFgEQgGgFgIABIgkAAg");
	this.shape_5.setTransform(109.9,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A459F").s().p("Ag3BaQgZgNgOgXQgPgXAAgfQAAgeAPgXQAOgXAZgOQAYgMAfAAQAfAAAZAMQAYAOAPAXQAOAXABAeQgBAfgOAXQgPAXgYANQgZAOgfAAQgfAAgYgOgAgYgrQgLAIgGALQgGALAAANQAAAOAGALQAGALALAHQAKAHAOAAQAOAAALgHQALgHAGgLQAGgLAAgOQAAgNgGgLQgGgLgLgIQgLgGgOAAQgOAAgKAGg");
	this.shape_6.setTransform(88.1,65.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAABMg");
	this.shape_7.setTransform(68.4,65.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0A459F").s().p("AAVBkIgbhAIgWAAIAABAIg9AAIAAjHIBqAAQAYAAAQAJQAQAKAIAPQAIAPAAAUQAAARgGAMQgFALgIAHQgJAJgIADIAlBHgAgcgNIAkAAQAIAAAGgFQAFgFABgIQgBgJgFgEQgGgFgIABIgkAAg");
	this.shape_8.setTransform(49.7,65.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_9.setTransform(30.8,65.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0A459F").s().p("AhZBkIAAjHIBrAAQAXAAAQAJQAQAKAIAPQAJAPAAAUQAAASgJAOQgIAQgQAIQgQAKgXAAIgtAAIAABAgAgbgNIAkAAQAJgBAEgEQAGgFAAgIQAAgIgGgFQgEgFgJABIgkAAg");
	this.shape_10.setTransform(12.6,65.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0A459F").s().p("AhDBkIAAjHIA9AAIAACTIBKAAIAAA0g");
	this.shape_11.setTransform(126.9,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0A459F").s().p("AAuBkIgIgaIhLAAIgIAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhFIgWBFIAtAAg");
	this.shape_12.setTransform(108.2,42.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0A459F").s().p("AA6BkIAAh9IgsB9IgaAAIgth9IAAB9Ig9AAIAAjHIBUAAIAiBlIAjhlIBUAAIAADHg");
	this.shape_13.setTransform(84.3,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0A459F").s().p("AgeBkIAAjHIA8AAIAADHg");
	this.shape_14.setTransform(66.5,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0A459F").s().p("AgdBkIAAiTIg2AAIAAg0ICnAAIAAA0Ig2AAIAACTg");
	this.shape_15.setTransform(53.2,42.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0A459F").s().p("AhZBkIAAjHIBqAAQAYAAAQAKQAQAIAIAQQAIAQAAASQAAAUgIAOQgIAOgQAKQgQAIgYABIgtAAIAABAgAgcgOIAlAAQAIAAAGgEQAFgFAAgIQAAgIgFgFQgGgEgIgBIglAAg");
	this.shape_16.setTransform(35.3,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0A459F").s().p("Ag3BbQgYgOgPgWQgPgYAAgfQAAgeAPgXQAPgXAYgNQAZgNAegBQAfABAZANQAYANAPAXQAOAXABAeQgBAfgOAYQgPAWgYAOQgZANgfgBQgeABgZgNgAgYgqQgLAHgGALQgGALAAANQAAAOAGAMQAGAKALAIQAKAGAOAAQAPAAAKgGQALgIAGgKQAGgMAAgOQAAgNgGgLQgGgLgLgHQgKgHgPAAQgOAAgKAHg");
	this.shape_17.setTransform(13.5,42.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0A459F").s().p("Ag3BaQgZgNgOgXQgOgXAAgfQAAgeAOgXQAOgXAZgOQAZgMAeAAQAfAAAZAMQAYAOAPAXQAOAXAAAeQAAAfgOAXQgPAXgYANQgZANgfABQgegBgZgNgAgZgrQgKAIgGALQgGALAAANQAAAOAGALQAGAMAKAGQALAHAOAAQAPAAALgHQAKgGAGgMQAGgLAAgOQAAgNgGgLQgGgLgKgIQgLgGgPAAQgOAAgLAGg");
	this.shape_18.setTransform(132.7,19.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0A459F").s().p("AgdBkIAAiTIg2AAIAAg0ICnAAIAAA0Ig2AAIAACTg");
	this.shape_19.setTransform(112.6,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0A459F").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_20.setTransform(87.3,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0A459F").s().p("AhjBkIAAjHIBaAAQAfAAAYALQAZAMAOAWQAOAWABAgQgBAggOAWQgOAWgZAMQgYAMgfAAgAgmAwIAdAAQAOgBALgGQALgHAFgKQAGgLAAgNQAAgNgFgKQgFgLgLgGQgLgGgPgBIgdAAg");
	this.shape_21.setTransform(68,19.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0A459F").s().p("AAuBkIgIgaIhLAAIgIAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhGIgWBGIAtAAg");
	this.shape_22.setTransform(46.1,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_23.setTransform(27,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0A459F").s().p("AhDBkIAAjHIA9AAIAACTIBKAAIAAA0g");
	this.shape_24.setTransform(10.4,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(0,0,229.7,83.7), null);


(lib.copy1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A459F").s().p("AhjBkIAAjHIBaAAQAfAAAYAMQAZALAOAXQAOAVABAgQgBAggOAWQgOAXgZAMQgYALgfAAgAgmAwIAdAAQAOgBALgHQALgGAFgLQAGgKAAgNQAAgNgFgLQgFgKgLgGQgLgGgPgBIgdAAg");
	this.shape.setTransform(138.3,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A459F").s().p("AhDBkIAAjHIA9AAIAACTIBKAAIAAA0g");
	this.shape_1.setTransform(119.4,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A459F").s().p("Ag3BbQgZgOgOgWQgOgYAAgfQAAgeAOgXQAOgXAZgNQAZgNAegBQAfABAZANQAYANAPAXQAOAXAAAeQAAAfgOAYQgPAWgYAOQgZANgfgBQgeABgZgNgAgZgqQgKAHgGALQgGALAAANQAAAOAGAMQAGAKAKAIQAMAGANAAQAOAAAMgGQAKgIAGgKQAGgMAAgOQAAgNgGgLQgGgLgKgHQgMgHgOAAQgNAAgMAHg");
	this.shape_2.setTransform(99.8,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A459F").s().p("AgtBbQgZgMgPgXQgOgYgBggQABgfAOgXQAPgYAZgMQAZgNAdAAQAXAAASAHQARAIAMAKQALAMAHANIgzAaQgFgKgJgFQgKgHgNAAQgNAAgLAHQgLAHgGALQgGALAAANQAAAOAGAMQAGAKALAIQALAGANAAQAKAAAIgCQAJgDAGgEIAAgJIgnAAIAAgwIBiAAIAABPQgRATgXALQgWALgegBQgdAAgZgMg");
	this.shape_3.setTransform(77.4,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAyIhaAAIAAAYIBYAAIAAAxIhYAAIAAAZIBaAAIAAAzg");
	this.shape_4.setTransform(51,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A459F").s().p("AAkBkIAAhNIhGAAIAABNIg+AAIAAjHIA+AAIAABHIBGAAIAAhHIA8AAIAADHg");
	this.shape_5.setTransform(30.8,42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A459F").s().p("AgdBkIAAiTIg2AAIAAg0ICnAAIAAA0Ig2AAIAACTg");
	this.shape_6.setTransform(10.9,42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A459F").s().p("Ag3BaQgZgNgOgXQgOgXAAgfQAAgeAOgXQAOgXAZgOQAZgMAeAAQAfAAAZAMQAYAOAPAXQAOAXAAAeQAAAfgOAXQgPAXgYANQgZANgfABQgegBgZgNgAgZgrQgKAIgGALQgGALAAANQAAAOAGALQAGAMAKAGQALAHAOAAQAPAAALgHQAKgGAGgMQAGgLAAgOQAAgNgGgLQgGgLgKgIQgLgGgPAAQgOAAgLAGg");
	this.shape_7.setTransform(132.7,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0A459F").s().p("AgdBkIAAiTIg2AAIAAg0ICnAAIAAA0Ig2AAIAACTg");
	this.shape_8.setTransform(112.6,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A459F").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_9.setTransform(87.3,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0A459F").s().p("AhjBkIAAjHIBaAAQAfAAAYALQAZAMAOAWQAOAWABAgQgBAggOAWQgOAWgZAMQgYAMgfAAgAgmAwIAdAAQAOgBALgGQALgHAFgKQAGgLAAgNQAAgNgFgKQgFgLgLgGQgLgGgPgBIgdAAg");
	this.shape_10.setTransform(68,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0A459F").s().p("AAuBkIgIgaIhLAAIgIAaIhCAAIBKjHIBLAAIBKDHgAAXAYIgXhGIgWBGIAtAAg");
	this.shape_11.setTransform(46.1,19.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0A459F").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_12.setTransform(27,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0A459F").s().p("AhDBkIAAjHIA9AAIAACTIBKAAIAAA0g");
	this.shape_13.setTransform(10.4,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1b, new cjs.Rectangle(0,0,150.8,60.8), null);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhjBkIAAjHIBaAAQAfAAAYALQAZAMAOAWQAOAWABAgQgBAggOAWQgOAWgZAMQgYAMgfAAgAgmAwIAdAAQAOgBALgGQALgHAFgKQAGgLAAgNQAAgNgFgKQgFgLgLgGQgLgGgPgBIgdAAg");
	this.shape.setTransform(86.4,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_1.setTransform(66.5,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBkIAAjHICXAAIAAAzIhaAAIAAAWIBYAAIAAAyIhYAAIAAAaIBaAAIAAAyg");
	this.shape_2.setTransform(48.9,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZBkIAAjHIBqAAQAYAAAQAJQAQAKAIAPQAIAQAAATQAAASgIAPQgIAPgQAIQgQAKgYAAIgsAAIAABAgAgbgNIAkAAQAIgBAGgFQAFgEAAgIQAAgIgFgFQgGgFgIABIgkAAg");
	this.shape_3.setTransform(30.7,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBfQgXgJgQgOIAggtQALALAQAHQARAHATAAQAJAAAGgCQAHgDAAgGQAAgGgGgEQgHgDgPgDIgagFQgOgDgNgHQgNgHgIgKQgIgMAAgTQAAgRAJgOQAJgPATgJQASgJAbAAQAZAAAVAHQAWAGARAOIghArQgNgJgPgFQgPgFgLAAQgLAAgEADQgEADAAAEQAAAGAHADQAHADAPACIAaAGQAOADANAHQAMAGAIAKQAIAMABARQgBAhgXASQgWASgpAAQgfAAgWgIg");
	this.shape_4.setTransform(11.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(0,0,98.9,37.9), null);


(lib.hitbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctabg();
	this.instance.parent = this;
	this.instance.setTransform(52,14,1,1,0,0,0,52,14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ctashinecontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctashine();
	this.instance.parent = this;
	this.instance.setTransform(32.9,42.6,1.823,1,0,0,0,32.8,42.6);
	this.instance.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctashinecontainer, new cjs.Rectangle(-26.9,0,119.6,85.1), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000EAE").s().p("AgjAvIAAhdIBGAAIAAAYIgpAAIAAALIAoAAIAAAWIgoAAIAAAMIApAAIAAAYg");
	this.shape.setTransform(101.9,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000EAE").s().p("AAKAvIgMgeIgKAAIAAAeIgdAAIAAhdIAxAAQALABAIAEQAHAEAEAHQAEAIAAAIQAAAIgDAGQgDAFgDADIgIAGIARAhgAgMgGIAQAAQADAAADgCQADgCAAgEQAAgEgDgCQgDgCgDAAIgQAAg");
	this.shape_1.setTransform(92.4,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000EAE").s().p("AgZAqQgMgGgGgLQgHgKAAgPQAAgNAHgLQAGgLAMgGQALgGAOAAQAPAAALAGQALAGAHALQAHALAAANQAAAPgHAKQgHALgLAGQgLAGgPAAQgOAAgLgGgAgKgTQgGADgCAFQgDAGAAAFQAAAHADAFQACAFAGADQAEADAGABQAHgBAFgDQAFgDACgFQADgFABgHQgBgFgDgGQgCgFgFgDQgFgDgHAAQgGAAgEADg");
	this.shape_2.setTransform(81.5,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000EAE").s().p("AAbAvIAAg6IgUA6IgNAAIgUg6IAAA6IgcAAIAAhdIAmAAIAQAvIARgvIAmAAIAABdg");
	this.shape_3.setTransform(69.3,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000EAE").s().p("AASAvIgigxIAAAxIgcAAIAAhdIAdAAIAgAuIAAguIAcAAIAABdg");
	this.shape_4.setTransform(53,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000EAE").s().p("AAKAvIgMgeIgKAAIAAAeIgdAAIAAhdIAxAAQALABAIAEQAHAEAEAHQAEAIAAAIQAAAIgDAGQgDAFgDADIgIAGIARAhgAgMgGIAQAAQADAAADgCQADgCAAgEQAAgEgDgCQgDgCgDAAIgQAAg");
	this.shape_5.setTransform(42.5,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000EAE").s().p("AAVAvIgDgMIgjAAIgEAMIgeAAIAihdIAjAAIAiBdgAALALIgLggIgKAgIAVAAg");
	this.shape_6.setTransform(32,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000EAE").s().p("AgjAvIAAhdIBGAAIAAAYIgpAAIAAALIAoAAIAAAWIgoAAIAAAMIApAAIAAAYg");
	this.shape_7.setTransform(22.4,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000EAE").s().p("AgfAvIAAhdIAdAAIAABEIAiAAIAAAZg");
	this.shape_8.setTransform(13.9,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApDCMIAAkXISHAAIAAEXg");
	mask.setTransform(58,14);

	// shine
	this.instance = new lib.ctashinecontainer();
	this.instance.parent = this;
	this.instance.setTransform(-60.2,12.6,1,1,0,0,0,32.8,42.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:52.7},14,cjs.Ease.get(-1)).to({x:175.4},14,cjs.Ease.get(1)).wait(1));

	// bg
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApDCMIAAkXISHAAIAAEXg");
	this.shape_9.setTransform(58,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,28);


// stage content:
(lib.BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_481 = function() {
		this.stop();
		var ctaHit = this.ctaHit;
		
		var cta = this.cta;
		
			cta.gotoAndPlay(2);
		
		ctaHit.addEventListener("mouseover", displayHighlight, false);
		
		function displayHighlight()
		{
			cta.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(481).call(this.frame_481).wait(62));

	// hit
	this.ctaHit = new lib.hitbutton();
	this.ctaHit.parent = this;
	new cjs.ButtonHelper(this.ctaHit, 0, 1, 2, false, new lib.hitbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaHit).to({_off:true},482).wait(61));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},482).wait(61));

	// copy1
	this.instance = new lib.copy1();
	this.instance.parent = this;
	this.instance.setTransform(-106.7,30,1,1,0,0,0,49.3,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:26},0).to({x:57.3},15,cjs.Ease.quadOut).to({_off:true},453).wait(61));

	// copy1b
	this.instance_1 = new lib.copy1b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.8,59.5,1,1,0,0,0,75.2,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({y:65.5},0).to({x:83.2,y:61.5},15,cjs.Ease.quadOut).wait(163).to({y:60.5},0).to({alpha:0},20).to({_off:true},126).wait(198));

	// copy2
	this.instance_2 = new lib.copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-133.3,76,1,1,0,0,0,114.7,40);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({x:122.7,y:71},20,cjs.Ease.quadOut).wait(213).to({y:72},0).to({alpha:0},23,cjs.Ease.sineIn).to({_off:true},1).wait(76));

	// copy3
	this.instance_3 = new lib.copy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-75.3,82.5,1,1,0,0,0,75.7,51.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(458).to({_off:false},0).to({x:84.7,y:83.5},23,cjs.Ease.quadOut).to({_off:true},1).wait(61));

	// cta
	this.cta = new lib.CTA();
	this.cta.parent = this;
	this.cta.setTransform(223,203,1,1,0,0,0,58,14);
	this.cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(458).to({alpha:1},23).to({_off:true},1).wait(61));

	// logoComcast
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.3,200.9,1,1,0,0,0,34.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(458).to({alpha:0},23,cjs.Ease.sineIn).to({_off:true},1).wait(61));

	// logoOlympics
	this.instance_5 = new lib.endLogo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(78.8,209.6,1,1,0,0,0,64.8,30.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(458).to({_off:false},0).to({alpha:1},23,cjs.Ease.sineIn).to({_off:true},1).wait(61));

	// bluebox
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(10,69,159,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(10,69,159,0.031)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(10,69,159,0.059)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(10,69,159,0.09)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(10,69,159,0.118)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(10,69,159,0.149)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(10,69,159,0.176)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(10,69,159,0.208)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(10,69,159,0.235)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(10,69,159,0.267)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(10,69,159,0.294)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(10,69,159,0.325)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(10,69,159,0.353)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(10,69,159,0.384)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(10,69,159,0.412)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(10,69,159,0.443)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(10,69,159,0.471)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(10,69,159,0.502)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(10,69,159,0.529)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(10,69,159,0.561)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(10,69,159,0.588)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(10,69,159,0.62)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(10,69,159,0.647)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_23.setTransform(150,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(10,69,159,0.678)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_24.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},443).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},16).wait(61));

	// head
	this.instance_6 = new lib.head_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(45.8,149.6,0.75,0.9,0,0.8,1.2,16.6,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:16.5,regY:14.5,scaleX:1.15,scaleY:1.15,skewX:0,skewY:0,x:131.2,y:166.4},542,cjs.Ease.circOut).wait(1));

	// sled
	this.instance_7 = new lib.sled__mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(104.5,152.8,0.75,0.9,0,0,0,116.7,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:116.5,scaleX:1.15,scaleY:1.15,x:217.5,y:170.6},542,cjs.Ease.circOut).wait(1));

	// shawdon
	this.instance_8 = new lib.shawdon_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(113.5,182.5,0.65,0.78,0,0,0,103.7,50.2);
	this.instance_8.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:103.5,regY:50.1,scaleX:1.15,scaleY:1.15,x:231.3,y:208.5,alpha:1},542,cjs.Ease.circOut).wait(1));

	// border
	this.instance_9 = new lib.snow_border__mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(58.5,208,1,1,0,0,0,57.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:42.1,scaleX:1.25,scaleY:1.25,x:35.3,y:229.2},542,cjs.Ease.circOut).wait(1));

	// whiteBG
	this.instance_10 = new lib.whiteshadow();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(543));

	// base
	this.instance_11 = new lib.bg_mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(188.1,125.1,1.254,1.254,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:112.1},542,cjs.Ease.circOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,93.3,532.2,313.5);
// library properties:
lib.properties = {
	id: '47A1E21E32E64686A5E4760E87C374CF',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/base.jpg", id:"base"},
		{src:"images/BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_.png", id:"BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['47A1E21E32E64686A5E4760E87C374CF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;