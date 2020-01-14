(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_atlas_", frames: [[1832,1269,151,36],[596,2061,638,64],[600,2127,501,48],[1236,2076,280,75],[896,1390,361,400],[1733,1316,309,371],[1832,957,155,310],[1800,0,205,368],[1832,660,200,295],[339,1792,255,295],[864,1792,176,267],[596,1792,266,246],[1611,1976,126,298],[1739,1976,168,161],[1800,370,244,288],[1318,1316,413,406],[1042,1792,191,222],[1733,1689,274,285],[0,2127,598,58],[1318,802,512,512],[1318,0,480,800],[1259,1724,350,350],[0,1706,337,371],[0,0,1316,1388],[502,1390,392,400],[0,1390,500,314]]}
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



(lib.Жмисюда = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ЗабронируйFurbyСЕЙЧАС = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Новинка2018 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Прямоугольникскруглуглы1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Слой1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Слой1_1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Слой12 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Слой16 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Слой17 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Слой18 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Слой20 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Слой22 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Слой3 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Слой4 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Слой5 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Слой6 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Слой7 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Слой8 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ЧтоуметФерби = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._1f4a4 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.fb50_garjpgcopy = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.furby_connect04u13802 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Hasbrologo = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.light_PNG14416 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.post1058801479875478 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой6();
	this.instance.parent = this;
	this.instance.setTransform(-166.3,-163.5,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.3,-163.5,332.7,327);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой6();
	this.instance.parent = this;
	this.instance.setTransform(-166.3,-163.5,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.3,-163.5,332.7,327);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fb50_garjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-132,-132,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-132,264,264);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fb50_garjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-132,-132,0.754,0.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-132,264,264);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой20();
	this.instance.parent = this;
	this.instance.setTransform(-70.4,-108.6,0.8,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-108.6,140.9,217.3);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой20();
	this.instance.parent = this;
	this.instance.setTransform(-70.4,-108.6,0.8,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-108.6,140.9,217.3);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой18();
	this.instance.parent = this;
	this.instance.setTransform(-90.2,-102.4,0.708,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-102.4,180.5,205);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой18();
	this.instance.parent = this;
	this.instance.setTransform(-90.2,-102.4,0.708,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-102.4,180.5,205);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой16();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-184,205,368);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой16();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-184,205,368);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой8();
	this.instance.parent = this;
	this.instance.setTransform(-128.5,-134.4,0.941,0.941,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-134.4,258.7,269);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой8();
	this.instance.parent = this;
	this.instance.setTransform(-128.5,-134.4,0.941,0.941,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-134.4,258.7,269);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой12();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-155,155,310);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой12();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-155,155,310);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDBjQgGgFAAgMIAAiPIghCEIgFASQgDAGgFAFQgGAGgJAAQgGAAgGgEQgEgDgEgFQgDgEgBgHIgEgMIggiEIAACPQgBAMgFAFQgFAHgJAAQgJAAgFgHQgFgFAAgMIAAijQAAgOAHgFQAHgFAMAAIANAAQAMAAAFADQAGABACAGIAGASIAdBxIAehxIAGgSQADgGAFgBQAFgDAMAAIANAAQAMAAAHAFQAHAFAAAOIAACjQAAAMgFAFQgGAHgIAAQgJAAgFgHg");
	this.shape.setTransform(9.1,-23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBkQgTgIgNgPQgNgOgGgUQgHgUAAgXQAAgYAHgUQAHgTANgOQANgPATgHQASgHAYAAQAgAAAXANQAXANAMAYQAMAYAAAgQAAAYgHATQgGAUgNAPQgNAOgTAIQgTAHgZAAQgXAAgUgHgAgXhEQgLAFgHAJQgIAJgFAOQgEAOAAARQAAARAEAOQAFAPAIAJQAIAKALAEQAKAFAMAAQAQAAAOgIQANgIAIgRQAIgRAAgYQAAgWgHgRQgIgRgNgIQgOgJgRAAQgMAAgLAFg");
	this.shape_1.setTransform(-14.5,-24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBkQgTgIgNgPQgNgOgGgUQgHgUAAgXQAAgYAHgUQAHgTANgOQANgPATgHQASgHAYAAQAgAAAXANQAXANAMAYQAMAYAAAgQAAAYgHATQgGAUgNAPQgNAOgTAIQgTAHgZAAQgXAAgUgHgAgXhEQgLAFgHAJQgIAJgFAOQgEAOAAARQAAARAEAOQAFAPAIAJQAIAKALAEQAKAFAMAAQAQAAAOgIQANgIAIgRQAIgRAAgYQAAgWgHgRQgIgRgNgIQgOgJgRAAQgMAAgLAFg");
	this.shape_2.setTransform(-37.4,-24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BoQgOAAgFgGQgGgHAAgNIAAibQAAgOAGgGQAGgGANAAIBCAAQAPAAALACQALACAJAFQAHAEAGAHQAFAHADAIQADAIAAAJQAAAfgfAPQApAMAAAmQAAARgJAOQgJAOgPAHQgJADgNACQgMACgQAAgAgrBIIAsAAQAqAAAAgfQAAgPgLgHQgLgHgVAAIgrAAgAgrgSIAmAAQAPAAAJgDQAIgDAFgIQADgGAAgHQAAgQgLgFQgLgFgWAAIgiAAg");
	this.shape_3.setTransform(-58.9,-24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBlQgFgGgBgNIAAhCIgyhOQgHgKgCgGQgDgGgBgFQABgHAFgFQAGgFAIAAQAIAAAFAFQAEAEAKAPIAmA/IAmg/IAHgKIAFgHQACgEAEgCQADgBAGAAQAIAAAFAFQAGAFgBAHQAAAFgCAGIgJAPIg1BPIAABCQABANgHAGQgGAGgIAAQgJAAgGgGg");
	this.shape_4.setTransform(-86.1,-24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BoQgOAAgFgGQgGgHAAgNIAAibQAAgOAGgGQAGgGANAAIBCAAQAPAAALACQALACAJAFQAHAEAGAHQAFAHADAIQADAIAAAJQAAAfgfAPQApAMAAAmQAAARgJAOQgJAOgPAHQgJADgNACQgMACgQAAgAgrBIIAsAAQAqAAAAgfQAAgPgLgHQgLgHgVAAIgrAAgAgrgSIAmAAQAPAAAJgDQAIgDAFgIQADgGAAgHQAAgQgLgFQgLgFgWAAIgiAAg");
	this.shape_5.setTransform(-105.1,-24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2BmQgFgDgDgFIgJgPIgRgcQgJgQgHgIQgHgIgHgDQgHgDgMAAIgOAAIAABDQAAANgGAGQgGAHgJAAQgKgBgGgGQgFgHAAgMIAAifQAAgOAGgGQAGgFANgBIBEAAIAYABQAKACAIADQAKAFAHAHQAIAIAEAKQAEAKAAAMQAAAWgNAPQgOANgaAFQALAGAKAMQAKAMAJANQAHANAFAKQAEALAAAEQAAAEgCAEQgDAEgEADQgFACgGAAQgHAAgFgEgAgrgQIAlAAQAOAAALgCQAKgDAGgGQAFgHAAgLQAAgJgEgGQgFgHgHgDQgIgDgVAAIgmAAg");
	this.shape_6.setTransform(-126,-23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBmQgRgFgLgLQgLgLgFgRQgFgRAAgXIAAhjQAAgNAFgGQAGgGAKAAQAJAAAGAGQAGAGAAANIAABlQAAASAEALQAEAMAJAHQAKAGARAAQAZAAAKgNQAKgNAAgbIAAhmQAAgNAGgGQAGgGAJAAQAKAAAFAGQAGAGAAANIAABjQAAAYgEARQgFAQgNAMQgMALgPAEQgPAFgUAAQgXAAgRgFg");
	this.shape_7.setTransform(-147.9,-24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBjQgGgGAAgNIAAifQAAgJACgFQADgHAGgCQAFgDAJAAIBiAAQALAAAEAFQAFAFAAAGQAAAIgFAEQgEAFgLAAIhRAAIAAA1IBEAAQAJAAAFAEQAFAFAAAHQAAAGgFAFQgFADgJAAIhEAAIAABFQAAANgGAGQgGAHgJAAQgKgBgFgGg");
	this.shape_8.setTransform(-167,-23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBeQgXgPgMgZQgMgYAAgbQAAgzAcgdQAbgeArAAQAdAAAXAPQAXANAMAZQAMAYAAAeQAAAggMAZQgNAZgYANQgXAMgbAAQgcABgXgOgAgxg/QgVAVAAAuQAAAlAUAVQAUAWAeAAQAfAAAUgWQAUgWAAgoQAAgYgJgTQgIgTgRgKQgQgLgVAAQgcABgVATg");
	this.shape_9.setTransform(132.4,-59.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBoIAAjPICFAAIAAAZIhqAAIAAC2g");
	this.shape_10.setTransform(116,-59.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNBoIAAjPICVAAIAAAZIh5AAIAAA/IBxAAIAAAYIhxAAIAABGIB/AAIAAAZg");
	this.shape_11.setTransform(97.7,-59.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBeQgXgPgMgZQgMgYAAgbQAAgzAcgdQAbgeArAAQAdAAAXAPQAXANAMAZQAMAYAAAeQAAAggMAZQgNAZgYANQgXAMgbAAQgcABgXgOgAgxg/QgVAVAAAuQAAAlAUAVQAUAWAeAAQAfAAAUgWQAUgWAAgoQAAgYgJgTQgIgTgRgKQgQgLgVAAQgcABgVATg");
	this.shape_12.setTransform(76.4,-59.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOBoIAAjPIBOAAQAYAAAOAHQAOAGAJANQAHANABAOQAAAOgIALQgHAMgPAHQATAGALAMQAJANABATQgBAOgFANQgHAMgJAHQgJAHgNADQgOAEgUAAgAgyBPIAzAAIASgBQAKgBAHgEQAGgEAEgIQAEgIAAgJQAAgMgGgJQgGgIgLgEQgKgDgTAAIgwAAgAgygQIAtAAQASAAAHgCQALgDAFgHQAGgIAAgKQgBgLgFgIQgEgIgKgCQgJgDgVAAIgqAAg");
	this.shape_13.setTransform(56.7,-59.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBeQgVgOgLgaQgLgaAAgdQAAggANgYQAMgYAXgNQAXgMAaAAQAfAAAWAPQAVAQAIAdIgbAGQgHgWgOgLQgOgKgUAAQgXAAgQAMQgQALgHATQgGAUAAAUQAAAaAHAUQAIATAQAKQARAKARAAQAYAAAQgOQAQgNAFgaIAcAHQgJAigWASQgXARggAAQghAAgVgNg");
	this.shape_14.setTransform(36.4,-59.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA5CAIAAijIhuCjIgcAAIAAjOIAZAAIAACkIBtikIAdAAIAADOgAgfhkQgLgJgBgSIAQAAQADAJAFAFQAGAEAKABQALgBAFgEQAGgEADgKIARAAQgCARgLAKQgLAJgRAAQgSAAgLgJg");
	this.shape_15.setTransform(8.1,-62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABCBoIgYg/IhWAAIgXA/IgdAAIBQjPIAcAAIBVDPgAgNgpIgXA8IBFAAIgWg5IgNgrQgEAUgHAUg");
	this.shape_16.setTransform(-12,-59.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhNBoIAAjPIBNAAQAXAAAPAHQAOAGAIANQAJANgBAOQAAAOgHALQgHAMgOAHQASAGAKAMQALANgBATQAAAOgFANQgHAMgJAHQgJAHgOADQgNAEgUAAgAgyBPIAzAAIATgBQAJgBAGgEQAHgEAEgIQAEgIAAgJQAAgMgGgJQgGgIgKgEQgLgDgTAAIgwAAgAgygQIAtAAQASAAAIgCQAKgDAFgHQAFgIAAgKQAAgLgEgIQgGgIgJgCQgJgDgWAAIgpAAg");
	this.shape_17.setTransform(-30.1,-59.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA5BoIAAijIhuCjIgcAAIAAjPIAZAAIAACkIBtikIAcAAIAADPg");
	this.shape_18.setTransform(-50.5,-59.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA0BoIAAhUQgmAOgaAAQgWAAgRgKQgQgKgFgPQgGgQAAgZIAAg9IAbAAIAAA7QAAAiANAKQAMAKASAAQAbAAAhgMIAAhlIAbAAIAADPg");
	this.shape_19.setTransform(-71.1,-59.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABCBoIgYg/IhWAAIgXA/IgdAAIBQjPIAcAAIBVDPgAgNgpIgXA8IBFAAIgWg5IgNgrQgEAUgHAUg");
	this.shape_20.setTransform(-87.7,-59.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAnBoIgkg5QgMgXgLgJQgJgIgPAAIAABhIgbAAIAAjPIAbAAIAABbQASAAAIgHQAIgIALgbQAIgVAGgIQAFgJALgFQAKgGANAAIAQAAIAAAYIgFAAIgGAAQgNAAgGAGQgGAHgJAUQgKAbgIAHQgHAGgJAFQATAEAUAgIArBFg");
	this.shape_21.setTransform(-104.7,-59.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzBeQgXgPgMgZQgMgYAAgbQAAgzAcgdQAbgeArAAQAdAAAXAPQAXANAMAZQAMAYAAAeQAAAggMAZQgNAZgYANQgXAMgbAAQgcABgXgOgAgxg/QgVAVAAAuQAAAlAUAVQAUAWAeAAQAfAAAUgWQAUgWAAgoQAAgYgJgTQgIgTgRgKQgQgLgVAAQgcABgVATg");
	this.shape_22.setTransform(-125.5,-59.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhOBoIAAjPIBOAAQAUAAALACQAPADAKAHQAKAHAHANQAGANAAAPQAAAbgRARQgRASgsAAIg0AAIAABVgAgzgEIA1AAQAaAAAMgKQALgKAAgSQAAgNgHgJQgGgKgLgCQgHgCgTAAIg0AAg");
	this.shape_23.setTransform(-145.4,-59.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA2BoIAAi2IhrAAIAAC2IgcAAIAAjPICjAAIAADPg");
	this.shape_24.setTransform(-166,-59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-78.6,376.5,73.2);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWCWQgJgJAAgUIAAhhIhLh0QgKgPgEgKQgEgJAAgGQAAgKAIgJQAIgHANAAQAMAAAHAHQAHAHANAWIA4BeIA6heIAJgOIAIgLQAEgGAGgCQAFgDAIAAQALAAAIAHQAIAIAAAKQAAAIgEAIQgEAJgKAPIhNB1IAABhQAAAUgIAJQgJAJgNAAQgOAAgIgJg");
	this.shape.setTransform(-24.1,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZCaQgUAAgJgJQgJgJAAgUIAAjnQAAgUAJgJQAJgJAUAAIBjAAQAVAAARADQAQADANAHQALAHAIAKQAJAKAEAMQAFAMgBAOQAAAtguAWQA9ATAAA3QAAAagNAVQgNAVgXAJQgOAGgTADQgRACgZAAgAhABrIBBAAQBAAAgBgtQAAgYgQgKQgQgLggABIhAAAgAhAgbIA5AAQAWAAANgEQAMgEAHgMQAGgKAAgLQAAgWgRgIQgRgIghAAIgyAAg");
	this.shape_1.setTransform(-52.3,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABQCYQgHgFgFgIIgOgWIgZgqQgNgWgLgNQgJgMgLgDQgLgFgRAAIgWAAIAABiQAAAVgIAIQgJAKgOgBQgPAAgIgJQgIgKAAgTIAAjrQAAgUAJgKQAJgIAUgBIBlAAQAVABAOACQAPACAMAEQAPAHALALQALAMAGAOQAGAQAAARQAAAhgUAVQgTAUgoAIQARAKAPAQQAPASAMATQAMAUAHAPQAGAQAAAGQAAAGgEAGQgEAGgGAEQgHACgJAAQgKABgIgFgAhBgYIA4AAQAWAAAPgDQAPgFAIgJQAIgJAAgRQAAgNgGgJQgHgKgLgFQgLgFgfABIg6AAg");
	this.shape_2.setTransform(-83.3,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3CYQgagIgQgQQgRgQgHgZQgIgaABgiIAAiTQgBgTAJgKQAJgJANAAQAPAAAJAJQAIAKAAATIAACWQAAAaAGARQAFARAPAKQAPAKAZgBQAlABAPgUQAPgTAAgnIAAiYQAAgUAIgJQAJgJAOAAQAOAAAJAJQAJAJgBAUIAACTQAAAkgGAYQgHAYgUASQgRAQgXAHQgVAHgfAAQgiAAgZgHg");
	this.shape_3.setTransform(-115.7,52.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhiCTQgIgJAAgUIAAjrQAAgOAEgIQAEgJAIgDQAJgEANgBICSAAQAPABAHAGQAHAHAAAKQAAAMgHAGQgHAHgPAAIh6AAIAABPIBmAAQAOgBAHAHQAHAGAAALQAAAJgHAHQgHAGgOABIhmAAIAABkQAAAUgJAJQgIAKgOgBQgOABgJgKg");
	this.shape_4.setTransform(-144,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyCaIAAkzIDeAAIAAAkIi1AAIAABfICpAAIAAAjIipAAIAABpIC8AAIAAAkg");
	this.shape_5.setTransform(138.4,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABUCaIAAjyIijDyIgpAAIAAkzIAlAAIAADzICjjzIApAAIAAEzg");
	this.shape_6.setTransform(108.1,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABQCaIAAiRIifAAIAACRIgpAAIAAkzIApAAIAAB+ICfAAIAAh+IApAAIAAEzg");
	this.shape_7.setTransform(77.1,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhyCaIAAkzIDeAAIAAAkIi1AAIAABfICpAAIAAAjIipAAIAABpIC8AAIAAAkg");
	this.shape_8.setTransform(47.8,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACTCaIg0hUQgVgggOgPQgOgNgZAAIAACQIgpAAIAAiQQgUAAgQALQgPAKgVAjIgCAEIg0BUIgyAAIBAhnQAcguAegIQgRgGgKgMQgKgLgPgkQgNghgJgJQgKgHgSgBIgRAAIAAgjIAYAAQATAAAPAIQAPAJAIAMQAJANANAeQASApALALQALAKAeABIAAiHIApAAIAACHQAeAAALgLQAMgLARgpQANgeAIgMQAIgNAQgJQAPgIASAAIAZAAIAAAjIgIAAIgIAAQgUABgJAIQgKAKgMAfQgNAigLAMQgJAMgTAHQAeAIAcAuIBABng");
	this.shape_9.setTransform(13.1,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMCLQgjgVgSglQgRgkAAgpQAAhLApgsQApgrBAAAQArAAAiAUQAiAVATAkQARAlAAAtQAAAvgSAlQgUAkgiAUQgjASgoAAQgrAAghgUgAhJhdQgfAdAABFQAAA4AeAgQAeAgAsAAQAtAAAfghQAdggAAg7QAAglgMgcQgNgcgYgPQgZgQgeAAQgrAAgfAeg");
	this.shape_10.setTransform(-22.5,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah5CXIAGgkQALAFAHAAQAOAAAGgLQAHgKAAgnIAAjXIDAAAIAAEyIgpAAIAAkOIhuAAIAACeQAAAwgEAWQgFAXgOAMQgPANgWAAQgOgBgSgFg");
	this.shape_11.setTransform(-54.9,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABUCaIAAjyIijDyIgpAAIAAkzIAlAAIAADzICjjzIApAAIAAEzg");
	this.shape_12.setTransform(-82.9,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah1CaIAAkzIB1AAQAdAAARADQAWAEAQAKQAPALAKATQAIAUABAWQAAAogZAaQgZAbhBAAIhPAAIAAB9gAhMgGIBPAAQAnAAARgPQARgPAAgbQAAgTgKgNQgKgOgQgEQgKgDgcgBIhOAAg");
	this.shape_13.setTransform(-112,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABQCaIAAkPIifAAIAAEPIgpAAIAAkzIDxAAIAAEzg");
	this.shape_14.setTransform(-142.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABUC/IAAjyIijDyIgpAAIAAk0IAlAAIAADzICjjzIApAAIAAE0gAguiVQgQgOgDgbIAaAAQADAPAIAHQAJAHAPAAQAQAAAJgHQAIgHADgPIAaAAQgDAbgQAOQgQAOgaAAQgbAAgQgOg");
	this.shape_15.setTransform(-3.7,-55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABiCaIgkhdIiAAAIgiBdIgrAAIB2kzIArAAIB+EzgAgVg+IghBZIBnAAIgghTQgPgngGgaQgGAegLAdg");
	this.shape_16.setTransform(-33.5,-51.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABMCaIAAh8Qg2AUgpABQggAAgYgPQgZgPgIgXQgIgXAAglIAAhbIAoAAIAABXQAAAzATAPQASAPAaAAQAqAAAvgSIAAiWIApAAIAAEzg");
	this.shape_17.setTransform(-63,-51.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABiCaIgkhdIiAAAIgiBdIgrAAIB2kzIArAAIB+EzgAgVg+IghBZIBnAAIgghTQgPgngGgaQgGAegLAdg");
	this.shape_18.setTransform(-87.5,-51.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA5CaIgzhTQgVgjgOgNQgOgNgXAAIAACQIgpAAIAAkzIApAAIAACHQAcAAALgKQAMgMAQgpQANgeAJgNQAHgMAQgIQAPgJATAAIAZABIAAAjIgIAAIgJAAQgTgBgKAKQgJAJgNAfQgPAngLALQgLAKgNAGQAcAGAdAwIA/Bmg");
	this.shape_19.setTransform(-112.8,-51.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhHCLQgfgVgQglQgRgnAAgrQAAgwATgkQARgkAjgTQAhgSAoAAQAvAAAfAYQAfAXANAqIgpAKQgKgigUgPQgVgPgeAAQgjAAgYARQgYARgJAcQgKAdAAAfQAAAmAMAdQALAeAYAOQAYAPAbAAQAjgBAXgTQAYgUAJgnIAoAKQgNAyghAbQgiAagvAAQgxAAgfgUg");
	this.shape_20.setTransform(-142.2,-51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-78.6,320,157.4);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("Ag3BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA8AAIAAAEQgMAAgEAEQgDAEAAAPIAAAnIAFAAQAZAAAMADQAMADAIAJQAIAKAAANQAAAQgMANQgMAMgcAAgAgOACIAAA+IAOACQAMAAAKgJQAKgJAAgQQAAgQgKgHQgLgIgQAAIgJABg");
	this.shape.setTransform(25.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgeBJIAAgEIAGAAQAIAAAEgGQACgDAAgMIAAhvIgRAAQgJAAgEACQgFACgEAGQgEAFgBAKIgEAAIABgiIBzAAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgFgDgIAAIgUAAIAABvQAAANADADQADAFAIAAIAGAAIAAAEg");
	this.shape_1.setTransform(13.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AATBKIAAgDQAJgBADgCQADgDAAgDQAAgFgFgLIgIgUIg2AAIgJAWQgEAJAAAFQAAACAEAEQADACAKABIAAADIgtAAIAAgDQAJgCADgDQAFgFAHgQIAxh2IADAAIAxB3QAFAPAFAEQAFAFAJABIAAADgAgdASIAvAAIgXg6g");
	this.shape_2.setTransform(1.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AAMBJIAAgEQANgBAEgDQAEgEAAgPIAAhuIhBAAIAABuQAAAPAEADQADAEAOABIAAAEIg9AAIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEICRAAIAAAEQgNAAgEAEQgEAEAAAPIAABbQAAAPAEADQAEAEANABIAAAEg");
	this.shape_3.setTransform(-14.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900FF").s().p("AgwAxQgPgUAAgbQAAgVAKgSQAKgSAQgKQAQgKATAAQAQAAAPAHQADADACAAQAEAAACgCQACgDABgFIAEAAIADAxIgDAAQgGgWgMgKQgNgKgQAAQgNAAgLAIQgLAHgHAQQgGAQgBAXQAAAUAHAPQAFAOANAIQAMAIAPAAQANAAALgGQALgHAMgSIADADQgKATgOAJQgOAJgUAAQgiAAgTgbg");
	this.shape_4.setTransform(-28.9,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmKEbQiih1AAimQAAinCih0QCkh0DmAAQDmAACkB0QCiB0AACnQAACmiiB1QikB1jmAAQjmAAikh1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-40,111.3,80);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("Ag3BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA8AAIAAAEQgMAAgEAEQgDAEAAAPIAAAnIAFAAQAZAAAMADQAMADAIAJQAIAKAAANQAAAQgMANQgMAMgcAAgAgOACIAAA+IAOACQAMAAAKgJQAKgJAAgQQAAgQgKgHQgLgIgQAAIgJABg");
	this.shape.setTransform(25.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgeBJIAAgEIAGAAQAIAAAEgGQACgDAAgMIAAhvIgRAAQgJAAgEACQgFACgEAGQgEAFgBAKIgEAAIABgiIBzAAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgFgDgIAAIgUAAIAABvQAAANADADQADAFAIAAIAGAAIAAAEg");
	this.shape_1.setTransform(13.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AATBKIAAgDQAJgBADgCQADgDAAgDQAAgFgFgLIgIgUIg2AAIgJAWQgEAJAAAFQAAACAEAEQADACAKABIAAADIgtAAIAAgDQAJgCADgDQAFgFAHgQIAxh2IADAAIAxB3QAFAPAFAEQAFAFAJABIAAADgAgdASIAvAAIgXg6g");
	this.shape_2.setTransform(1.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AAMBJIAAgEQANgBAEgDQAEgEAAgPIAAhuIhBAAIAABuQAAAPAEADQADAEAOABIAAAEIg9AAIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEICRAAIAAAEQgNAAgEAEQgEAEAAAPIAABbQAAAPAEADQAEAEANABIAAAEg");
	this.shape_3.setTransform(-14.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900FF").s().p("AgwAxQgPgUAAgbQAAgVAKgSQAKgSAQgKQAQgKATAAQAQAAAPAHQADADACAAQAEAAACgCQACgDABgFIAEAAIADAxIgDAAQgGgWgMgKQgNgKgQAAQgNAAgLAIQgLAHgHAQQgGAQgBAXQAAAUAHAPQAFAOANAIQAMAIAPAAQANAAALgGQALgHAMgSIADADQgKATgOAJQgOAJgUAAQgiAAgTgbg");
	this.shape_4.setTransform(-28.9,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmKEbQihh1AAimQAAinChh0QCkh0DmAAQDmAACjB0QCjB0AACnQAACmijB1QijB1jmAAQjmAAikh1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-40,111.3,80);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA+AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQAMADAIAJQAJAKAAANQgBAQgLANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQAMgJgBgQQAAgQgLgHQgLgIgQAAIgKABg");
	this.shape.setTransform(-163.8,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_1.setTransform(-176.6,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("Ag9BJIAAgEIAEAAQAGAAAEgDQAEgBABgEQACgDgBgLIAAheQAAgNgCgEQgFgEgJAAIgEAAIAAgEIBvAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQAMAAAFgEQAFgFABgNIAEAAIAAAyIgEAAQgBgKgCgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAFgCQAGgCAGgFQAGgGAHgOIAFAAIgNAlg");
	this.shape_2.setTransform(-190.1,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AANBJIAAgEQANgBAEgDQAEgEAAgPIAAhuIhDAAIAABuQAAAPAEADQADAEAOABIAAAEIg+AAIAAgEQANgBAEgEQADgDABgPIAAhbQgBgPgDgEQgEgEgNAAIAAgEICVAAIAAAEQgNAAgEAEQgDAEgBAPIAABbQABAPADADQAEAEANABIAAAEg");
	this.shape_3.setTransform(-204.8,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA+AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQAMADAIAJQAJAKAAANQgBAQgLANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQAMgJgBgQQAAgQgLgHQgLgIgQAAIgKABg");
	this.shape_4.setTransform(216.5,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_5.setTransform(203.6,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgEgLIgJgUIg3AAIgKAWQgFAJAAAFQABACADADQADADAKABIAAADIgtAAIAAgDQAJgCACgDQAGgFAHgQIAzh2IADAAIAyB3QAGAPAGAEQAEAFAJABIAAADgAgfASIAyAAIgYg6g");
	this.shape_6.setTransform(190.8,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AhABJIAAgEIAFAAQAKAAADgGQADgEgBgMIAAhdQAAgOgCgDQgEgFgJAAIgFAAIAAgEIA/AAQAQAAALADQAQAEAJAJQAIAKAAANQAAALgGAJQgIAIgMAEQAPADAHAHQAKAKAAAOQABALgHAKQgHAKgMAEQgMAFgYAAgAgWACIAAA8QAMADALAAQATAAALgJQAKgIAAgNQAAgJgFgIQgFgHgKgFQgLgEgNAAIgMAAIgHAAgAgWg+IAAA4IAJABIALAAQAPAAAHgDQAIgEAFgHQADgHAAgIQAAgNgKgJQgLgJgSAAQgLAAgIADg");
	this.shape_7.setTransform(176.6,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9900FF").s().p("Ag9BJIAAgEIAEAAQAGAAAEgDQAEgBABgEQABgDABgLIAAheQAAgNgDgEQgFgEgJAAIgEAAIAAgEIBvAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQAMAAAFgEQAFgFABgNIAEAAIAAAyIgEAAQgBgKgCgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAFgCQAGgCAFgFQAHgGAHgOIAEAAIgMAlg");
	this.shape_8.setTransform(162.9,-23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9900FF").s().p("ABIBeQgEgRgLgNQgLgMgXAAIhiAAIAAgEQAOgBAEgEQAEgDAAgPIAAhbQAAgPgEgEQgEgEgOAAIAAgEIA/AAIAAAEQgOAAgDAEQgEAEAAAPIAABgQAAAKABACQACACAMAAIAkAAQANAAABgCQABgCAAgMIAAheQAAgPgDgEQgEgEgOAAIAAgEIA/AAIAAAEQgNAAgEAEQgEAEABAPIAABcQgBAOAEAEQAEAEANAAIAAAug");
	this.shape_9.setTransform(148.3,-21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9900FF").s().p("AANBJIAAgEIAFAAQAJAAAEgFQADgEAAgNIAAgsIhDAAIAAAsQAAALABAEQABACAEACQAFADAFAAIAFAAIAAAEIg+AAIAAgEIAFAAQAJAAAEgFQACgEAAgNIAAhdQAAgLgBgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgCAEQgBADAAALIAAAqIBDAAIAAgqQAAgLgCgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgBAEQgCADAAALIAABdQAAALACAEQABACADACQAFADAFAAIAFAAIAAAEg");
	this.shape_10.setTransform(132.3,-23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgFgLIgJgUIg3AAIgJAWQgEAJgBAFQAAACAEADQADADAKABIAAADIguAAIAAgDQAKgCADgDQAFgFAHgQIAzh2IACAAIA0B3QAGAPAFAEQAFAFAIABIAAADgAgfASIAyAAIgYg6g");
	this.shape_11.setTransform(116.4,-23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_12.setTransform(102.9,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Egi8AI0Qi1h9AAizQAAi0C1iAQC0h9EBAAQEAAAC2B9QC0CAAAC0QAACzi0B9Qi2CCkAAAQkBAAi0iCgAQSCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-69.3,483.7,138.8);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("Ag4BJIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEIA9AAIAAAEQgNAAgDAEQgEAEAAAPIAAAnIAGAAQAZAAANADQANADAIAJQAHAKAAANQAAAQgMANQgMAMgdAAgAgPACIAAA+IAPACQAMAAALgJQAKgJABgQQAAgQgMgHQgLgIgQAAIgKABg");
	this.shape.setTransform(-163.7,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_1.setTransform(-176.6,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("Ag+BJIAAgEIAGAAQAFAAAEgDQAEgBABgEQACgDAAgLIAAheQAAgNgEgEQgDgEgJAAIgGAAIAAgEIBwAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQANAAADgEQAGgFABgNIAEAAIAAAyIgEAAQgCgKgBgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAFgCQAGgCAFgFQAHgGAHgOIAEAAIgMAlg");
	this.shape_2.setTransform(-190.1,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AANBJIAAgEQANgBAEgDQAEgEgBgPIAAhuIhCAAIAABuQAAAPAEADQAEAEANABIAAAEIg/AAIAAgEQAOgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgOAAIAAgEICXAAIAAAEQgOAAgEAEQgDAEAAAPIAABbQAAAPADADQAEAEAOABIAAAEg");
	this.shape_3.setTransform(-204.7,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900FF").s().p("Ag4BJIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEIA9AAIAAAEQgNAAgDAEQgEAEAAAPIAAAnIAGAAQAZAAANADQANADAIAJQAHAKAAANQAAAQgMANQgMAMgdAAgAgPACIAAA+IAPACQAMAAALgJQAKgJABgQQAAgQgMgHQgLgIgQAAIgKABg");
	this.shape_4.setTransform(216.5,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_5.setTransform(203.7,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgFgLIgJgUIg3AAIgKAWQgDAJAAAFQgBACAEADQADADALABIAAADIgvAAIAAgDQAKgCADgDQAFgFAGgQIA0h2IACAAIA0B3QAFAPAFAEQAFAFAKABIAAADgAgeASIAwAAIgXg6g");
	this.shape_6.setTransform(190.9,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AhBBJIAAgEIAGAAQAJAAAEgGQACgEABgMIAAhdQAAgOgEgDQgEgFgIAAIgGAAIAAgEIA/AAQARAAALADQAQAEAIAJQAJAKAAANQAAALgGAJQgIAIgNAEQAQADAIAHQAKAKgBAOQAAALgGAKQgHAKgMAEQgMAFgZAAgAgXACIAAA8QANADALAAQAUAAAJgJQALgIAAgNQAAgJgFgIQgFgHgKgFQgLgEgOAAIgLAAIgIAAgAgXg+IAAA4IAJABIALAAQAQAAAHgDQAIgEAEgHQAFgHAAgIQAAgNgLgJQgKgJgUAAQgKAAgJADg");
	this.shape_7.setTransform(176.6,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9900FF").s().p("Ag+BJIAAgEIAGAAQAFAAAFgDQADgBABgEQABgDAAgLIAAheQAAgNgDgEQgEgEgIAAIgGAAIAAgEIBwAAIACAgIgFAAQgCgMgDgEQgCgEgGgCQgEgCgLAAIgnAAIAAA6IAfAAQANAAADgEQAGgFABgNIAEAAIAAAyIgEAAQgCgKgBgDQgCgEgEgCQgFgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAYAAQAMAAAGgCQAFgCAFgFQAHgGAHgOIAEAAIgMAlg");
	this.shape_8.setTransform(163,-23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9900FF").s().p("ABHBeQgDgRgKgNQgLgMgXAAIhiAAIAAgEQANgBAEgEQAEgDgBgPIAAhbQABgPgEgEQgEgEgNAAIAAgEIA+AAIAAAEQgNAAgEAEQgEAEAAAPIAABgQAAAKACACQAAACAMAAIAlAAQAOAAABgCQAAgCAAgMIAAheQAAgPgDgEQgEgEgNAAIAAgEIA/AAIAAAEQgOAAgEAEQgEAEAAAPIAABcQAAAOAEAEQADAEAOAAIAAAug");
	this.shape_9.setTransform(148.3,-21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9900FF").s().p("AANBJIAAgEIAFAAQAJAAAEgFQADgEAAgNIAAgsIhDAAIAAAsQAAALABAEQABACAEACQAFADAFAAIAFAAIAAAEIg+AAIAAgEIAFAAQAJAAAEgFQACgEAAgNIAAhdQAAgLgBgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgCAEQgBADAAALIAAAqIBDAAIAAgqQAAgLgCgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgBAEQgCADAAALIAABdQAAALACAEQABACADACQAFADAFAAIAFAAIAAAEg");
	this.shape_10.setTransform(132.4,-23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9900FF").s().p("AAUBKIAAgDQAJgBADgDQADgCAAgDQAAgFgEgLIgJgUIg3AAIgLAWQgDAJgBAFQABACADADQADADALABIAAADIguAAIAAgDQAJgCACgDQAGgFAGgQIA0h2IADAAIAyB3QAHAPAEAEQAGAFAIABIAAADgAgeASIAwAAIgXg6g");
	this.shape_11.setTransform(116.5,-23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_12.setTransform(103,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Egi8AI0Qi1h9AAizQAAi0C1iAQC0h9EBAAQEAAAC2B9QC0CAAAC0QAACzi0B9Qi2CCkAAAQkBAAi0iCgAQSCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.8,-69.3,483.7,138.8);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой1();
	this.instance.parent = this;
	this.instance.setTransform(-74.2,-82.1,0.411,0.411);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13C1B8").s().p("AgbAcQgMgMAAgQQAAgPAMgNQALgLAQAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape.setTransform(-20.2,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-82.1,148.4,164.4);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой1();
	this.instance.parent = this;
	this.instance.setTransform(-74.1,-82.1,0.411,0.411);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#13C1B8").s().p("AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPAAQARAAALALQAMANAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape.setTransform(-20.1,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-82.1,148.4,164.4);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54C7BC").s().p("AjdBiQgoglAAg1QAAg0AogmQAoglA5AAQA5AAAoAlQAPAOAJAQQAJgZAWgVQAoglA5AAQA5AAAoAlQAoAmAAA1QAAA0goAlQgoAmg5AAQg5AAgogmQgPgNgJgQQgJAZgWAUQgoAmg5AAQg5AAgogmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-13.6,52.4,27.2);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54C7BC").s().p("AjdBiQgoglAAg1QAAg0AogmQAoglA5AAQA5AAAoAlQAPAOAJAQQAJgZAWgVQAoglA5AAQA5AAAoAlQAoAmAAA1QAAA0goAlQgoAmg5AAQg5AAgogmQgPgNgJgQQgJAZgWAUQgoAmg5AAQg5AAgogmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-13.6,52.4,27.2);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой7();
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-28.2,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-28.2,48.6,56.5);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой7();
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-28.2,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-28.2,48.6,56.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой5();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,-25,0.126,0.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-25,30.7,50);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой5();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,-25,0.126,0.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-25,30.7,50);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой3();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-49,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-49,41.5,98);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой3();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-49,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-49,41.5,98);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B56CE1").s().p("EgrWAHVIAAupMBWtAAAIAAOpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.4,-46.9,555,93.8);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой1();
	this.instance.parent = this;
	this.instance.setTransform(-74.1,-82.1,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-82.1,148.4,164.4);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Слой1();
	this.instance.parent = this;
	this.instance.setTransform(-74.1,-82.1,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-82.1,148.4,164.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Новинка2018();
	this.instance.parent = this;
	this.instance.setTransform(-198.5,-19,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-19,397.1,38.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Новинка2018();
	this.instance.parent = this;
	this.instance.setTransform(-198.5,-19,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-19,397.1,38.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ЧтоуметФерби();
	this.instance.parent = this;
	this.instance.setTransform(-198,-24,0.662,0.829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-24,396,48.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ЧтоуметФерби();
	this.instance.parent = this;
	this.instance.setTransform(-198,-24,0.662,0.829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-24,396,48.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Прямоугольникскруглуглы1();
	this.instance.parent = this;
	this.instance.setTransform(-69.3,0,1,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,0,280.7,77.5);


(lib.кнопка = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Жмисюда();
	this.instance.parent = this;
	this.instance.setTransform(60,21);

	this.instance_1 = new lib.Прямоугольникскруглуглы1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,0,1,1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0.7,y:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:60,y:21}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.078,scaleY:1.078,x:-10.3,y:-3}},{t:this.instance,p:{scaleX:1.078,scaleY:1.078,x:54,y:20}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.078,scaleY:1.078,x:-10.3,y:-3}},{t:this.instance,p:{scaleX:1.078,scaleY:1.078,x:54,y:20}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280.7,77.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.кнопка();
	this.instance.parent = this;
	this.instance.setTransform(-140.3,-38.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,-41.7,302.6,83.5);


// stage content:
(lib.RECOVER_банер = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_532 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("http://furby.hasbro.com", "_blank");
		}
	}
	this.frame_644 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("http://furby.hasbro.com", "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("http://furby.hasbro.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(532).call(this.frame_532).wait(112).call(this.frame_644).wait(1));

	// Actions
	this.button_3 = new lib.Symbol2();
	this.button_3.parent = this;
	this.button_3.setTransform(269.5,158.7);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(532).to({_off:false},0).wait(113));

	// Жми сюда
	this.instance = new lib.Жмисюда();
	this.instance.parent = this;
	this.instance.setTransform(187,140);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(469).to({_off:false},0).wait(173).to({_off:true},1).wait(2));

	// Прямоугольник, скругл. углы 1
	this.instance_1 = new lib.Прямоугольникскруглуглы1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131,120);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338,157.7,1,1,0,0,0,140.3,38.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},469).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},33).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},113).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(469).to({_off:false},0).wait(1).to({rotation:4.5,x:134.4,y:109.2},0).wait(1).to({rotation:-2.7,x:129.4,y:126.7},0).wait(1).to({rotation:0.5,x:131.7,y:119},0).wait(1).to({x:142.7},0).wait(1).to({x:145.7},0).wait(2).to({x:124.7},0).wait(1).to({x:122.7},0).wait(2).to({x:139.7},0).wait(1).to({x:138.7},0).wait(1).to({x:130.7},0).wait(1).to({x:127.7},0).wait(34).to({rotation:0,x:131,y:120},0).wait(1).to({rotation:4.5,x:134.4,y:109.2},0).wait(1).to({rotation:-2.7,x:129.4,y:126.7},0).wait(1).to({rotation:0.5,x:131.7,y:119},0).wait(1).to({x:142.7},0).wait(1).to({x:145.7},0).wait(2).to({x:124.7},0).wait(1).to({x:122.7},0).wait(2).to({x:139.7},0).wait(1).to({x:138.7},0).wait(1).to({x:130.7},0).to({_off:true},1).wait(116));

	// Слой 6
	this.instance_3 = new lib.Tween43("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(383.3,520.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween44("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(383.3,330.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},490).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},145).to({state:[{t:this.instance_4}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(490).to({_off:false},0).to({_off:true,y:330.5},7).wait(148));

	// Забронируй Furby СЕЙЧАС!
	this.instance_5 = new lib.Tween41("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-73,284.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween42("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(102,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},513).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},126).to({state:[{t:this.instance_6}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(513).to({_off:false},0).to({_off:true,x:102,y:251},3).wait(129));

	// Забронируй Furby СЕЙЧАС!
	this.instance_7 = new lib.ЗабронируйFurbyСЕЙЧАС();
	this.instance_7.parent = this;
	this.instance_7.setTransform(206,88,0.188,0.188);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(467).to({_off:false},0).wait(1).to({scaleX:0.34,scaleY:0.28,x:158,y:85},0).wait(1).to({scaleX:0.84,scaleY:0.73,x:6,y:45},0).wait(1).to({scaleX:0.74,x:38,y:43},0).wait(175));

	// Слой 22
	this.instance_8 = new lib.Слой22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(265,147,0.106,0.106);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0039EF").s().p("AgMBGIAAh3IgyAAIAAgUIB9AAIAAAUIgyAAIAAB3g");
	this.shape.setTransform(320.8,155.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0039EF").s().p("AgyA2QgUgSAAgjQAAgiAUgUQAUgTAfAAQAfAAAUATQATATAAAiIAAAGIhyAAQABAXANANQANALATAAQAOABAKgHQAKgHAGgPIAbADQgGAWgRALQgSAMgbAAQghAAgTgTgAgcgpQgMAKgCATIBWAAQgCgSgIgJQgNgOgUAAQgRAAgMAMg");
	this.shape_1.setTransform(306.6,155.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0039EF").s().p("Ag+BGIAAiLIA8AAQAVAAALADQALAEAHAIQAIAJAAANQABAKgFAIQgFAHgJAFQALADAHAIQAHAJAAANQgBAUgPAJQgOAKgbAAgAgkAyIAiAAQAVAAAIgEQAJgFAAgLQAAgHgEgGQgGgFgHgCQgHgCgRAAIgfAAgAgkgKIAbAAQAQAAAHgCQAGgBAFgFQAEgFAAgHQABgLgJgEQgIgFgVABIgcAAg");
	this.shape_2.setTransform(291.2,155.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0039EF").s().p("AAlBGIAAhpIhHBpIgdAAIAAiLIAbAAIAABqIBHhqIAdAAIAACLg");
	this.shape_3.setTransform(274.5,155.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0039EF").s().p("AhCBiIAAjAIAYAAIAAASQAIgLALgFQALgFAOAAQATAAAQAJQAPAJAHARQAIARAAAUQAAAVgIAQQgJASgQAJQgQAJgSAAQgMAAgLgFQgKgFgHgIIAABEgAgdhBQgNAPAAAbQAAAaAMAMQAMANARAAQAQAAANgNQAMgNAAgbQAAgbgMgOQgMgNgQAAQgRAAgMAOg");
	this.shape_4.setTransform(258.3,157.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0039EF").s().p("AA4BhIAAiqIhvAAIAACqIgcAAIAAjBICnAAIAADBg");
	this.shape_5.setTransform(238.9,152.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0039EF").s().p("AgLBGIAAh3IgsAAIAAgUIBvAAIAAAUIgsAAIAAB3g");
	this.shape_6.setTransform(316.2,155.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0039EF").s().p("AgtA2QgRgSgBgjQABgiARgUQASgTAcAAQAbAAASATQARATAAAiIAAAGIhlAAQABAXALANQAMALAQAAQANABAKgHQAJgHAEgPIAZADQgGAWgPALQgPAMgZAAQgdAAgSgTgAgZgpQgKAKgCATIBMAAQgBgSgIgJQgLgOgSAAQgPAAgLAMg");
	this.shape_7.setTransform(303.5,155.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0039EF").s().p("Ag3BGIAAiLIA2AAQASAAAKADQAJAEAIAIQAGAJABANQgBAKgEAIQgEAHgIAFQAKADAHAIQAFAJAAANQAAAUgNAJQgNAKgYAAgAggAyIAfAAQATAAAHgEQAIgFAAgLQgBgHgEgGQgEgFgHgCQgGgCgPAAIgcAAgAgggKIAZAAQAOAAAFgCQAGgBAEgFQAFgFAAgHQgBgLgHgEQgHgFgTABIgZAAg");
	this.shape_8.setTransform(289.8,155.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0039EF").s().p("AAiBGIAAhpIhBBpIgYAAIAAiLIAXAAIAABqIA/hqIAZAAIAACLg");
	this.shape_9.setTransform(274.9,155.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0039EF").s().p("Ag7BiIAAjAIAVAAIAAASQAIgLAJgFQAKgFAMAAQASAAAOAJQANAJAHARQAHARAAAUQAAAVgIAQQgHASgPAJQgOAJgQAAQgLAAgJgFQgJgFgGgIIAABEgAgahBQgMAPAAAbQAAAaALAMQALANAPAAQAPAAALgNQALgNAAgbQAAgbgLgOQgLgNgOAAQgPAAgLAOg");
	this.shape_10.setTransform(260.5,157.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0039EF").s().p("AAyBhIAAiqIhiAAIAACqIgaAAIAAjBICVAAIAADBg");
	this.shape_11.setTransform(243.2,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{scaleX:0.106,scaleY:0.106,x:265,y:147}}]},415).to({state:[{t:this.instance_8,p:{scaleX:0.252,scaleY:0.252,x:246,y:129}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.476,scaleY:0.431,x:216,y:107}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.423,scaleY:0.431,x:223,y:107}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.423,scaleY:0.431,x:223,y:107}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},28).to({state:[]},1).wait(198));

	// рука
	this.instance_9 = new lib.Tween35("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(141.5,587);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween36("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141.5,434);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(307).to({_off:false},0).to({_off:true,y:434},12).wait(326));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(307).to({_off:false},12).wait(27).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({x:185.5,y:467},9).wait(34).to({startPosition:0},0).to({x:144.5},6).wait(44).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({x:141.5,y:434},0).wait(1).to({startPosition:0},0).to({y:580},2).to({_off:true},1).wait(195));

	// Слой 20
	this.instance_11 = new lib.Слой20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(57,100,0.8,0.814);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween39("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(127.4,208.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween40("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(128.4,564.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},398).to({state:[{t:this.instance_11}]},43).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},7).to({state:[]},2).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(398).to({_off:false},0).wait(46).to({_off:true},4).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(448).to({_off:false},0).to({_off:true,x:128.4,y:564.7},7).wait(190));

	// Layer 19
	this.instance_14 = new lib.Bitmap30();
	this.instance_14.parent = this;
	this.instance_14.setTransform(58,100,0.293,0.27);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(382).to({_off:false},0).wait(62).to({_off:true},2).wait(199));

	// Слой 18
	this.instance_15 = new lib.Слой18();
	this.instance_15.parent = this;
	this.instance_15.setTransform(25,98,0.708,0.695);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween37("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(115.3,200.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween38("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(115.3,558.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},339).to({state:[{t:this.instance_15}]},102).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},7).to({state:[]},76).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(339).to({_off:false},0).wait(107).to({_off:true},2).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(448).to({_off:false},0).to({_off:true,y:558.5},7).wait(190));

	// экран
	this.instance_18 = new lib.Слой17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(59,97,0.68,0.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(287).to({_off:false},0).to({_off:true},143).wait(215));

	// Layer 6
	this.instance_19 = new lib.Tween28("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(728.9,99.7,0.975,1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(287).to({_off:false},0).to({x:387,y:95.7},6).wait(147).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({x:402,y:499.6},7).to({_off:true},76).wait(114));

	// ZZz
	this.instance_20 = new lib._1f4a4();
	this.instance_20.parent = this;
	this.instance_20.setTransform(252,30,0.172,0.172);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(182).to({_off:false},0).wait(3).to({rotation:15,x:264.9,y:20.1},0).wait(4).to({rotation:0,x:252,y:30},0).wait(4).to({rotation:15,x:264.9,y:20.1},0).wait(7).to({rotation:0,x:252,y:30},0).wait(7).to({_off:true},3).wait(435));

	// тел
	this.instance_21 = new lib.Tween31("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(568.5,200);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween32("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(127.5,200);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(211).to({_off:false},0).to({_off:true,x:127.5},3).wait(431));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(211).to({_off:false},3).wait(227).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({x:127.8,y:362.6},3).to({x:128,y:557.6},4).to({_off:true},43).wait(147));

	// Layer 16
	this.instance_23 = new lib.Tween27("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(696,231.3);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween28("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(383.1,231.3,0.975,1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(216).to({_off:false},0).to({scaleX:1.11,x:378.1},4).wait(1).to({scaleX:0.96},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.11,x:378.2,y:231.4},0).wait(1).to({scaleX:1.02,x:378.3},0).to({_off:true},52).wait(370));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(275).to({_off:false},0).wait(1).to({startPosition:0},0).to({scaleX:0.23,x:167},5).to({_off:true},158).wait(206));

	// Фкрасный
	this.instance_25 = new lib.Слой8();
	this.instance_25.parent = this;
	this.instance_25.setTransform(66,63,0.523,0.523);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween33("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(593.3,219.5);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween34("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(359.3,219.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25}]},241).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},38).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},5).to({state:[{t:this.instance_27}]},156).to({state:[]},1).wait(195));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(241).to({_off:false},0).wait(1).to({rotation:15,x:103.7,y:47},0).wait(1).to({rotation:36.7,x:183.7,y:22.1},0).wait(1).to({rotation:45.2,x:219.9,y:-0.7},0).wait(38).to({x:189.9,y:14.3},0).wait(1).to({x:157.9,y:38.1},0).wait(1).to({x:129.9,y:57},0).wait(1).to({x:117.9,y:69},0).to({_off:true},3).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(288).to({_off:false},0).to({_off:true,x:359.3},5).wait(352));

	// облак
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#54C7BC").s().p("AjdBiQgoglAAg1QAAg0AogmQAoglA5AAQA5AAAoAlQAPAOAJAQQAJgZAWgVQAoglA5AAQA5AAAoAlQAoAmAAA1QAAA0goAlQgoAmg5AAQg5AAgogmQgPgNgJgQQgJAZgWAUQgoAmg5AAQg5AAgogmg");
	this.shape_12.setTransform(275.5,166.2);

	this.instance_28 = new lib.Tween17("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(275.5,166.2);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween18("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-105.5,166.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},177).to({state:[{t:this.instance_28}]},33).to({state:[{t:this.instance_29}]},5).to({state:[]},316).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(210).to({_off:false},0).to({_off:true,x:-105.5},5).wait(430));

	// обл
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiAqQgpgRAAgZQAAgYApgSQApgRA5AAQA6AAApARQApASAAAYQAAAZgpARQgpASg6AAQg5AAgpgSg");
	this.shape_13.setTransform(265.2,354.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai+BxQhPguAAhDQAAhCBPguQBPgvBvAAQBwAABPAvQBPAuAABCQAABDhPAuQhPAvhwAAQhvAAhPgvg");
	this.shape_14.setTransform(302.2,317.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA+AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQAMADAIAJQAJAKAAANQgBAQgLANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQAMgJgBgQQAAgQgLgHQgLgIgQAAIgKABg");
	this.shape_15.setTransform(420.3,262.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_16.setTransform(407.5,262.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9900FF").s().p("AAUBLIAAgFQAIAAAEgDQADgCAAgEQAAgEgEgKIgJgWIg3AAIgKAYQgFAIAAAEQABAEADACQADADALAAIAAAFIguAAIAAgFQAJgBACgDQAGgFAHgPIAzh4IADAAIAyB5QAHAPAFAEQAEAEAJAAIAAAFgAgeASIAxAAIgYg6g");
	this.shape_17.setTransform(394.7,262);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9900FF").s().p("AANBJIAAgEQANgBAEgDQADgEAAgPIAAhuIhCAAIAABuQAAAPAEADQADAEAOABIAAAEIg/AAIAAgEQAOgBAEgEQAEgDgBgPIAAhbQABgPgEgEQgEgEgOAAIAAgEICXAAIAAAEQgOAAgEAEQgEAEAAAPIAABbQAAAPAEADQAEAEAOABIAAAEg");
	this.shape_18.setTransform(378.8,262.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9900FF").s().p("AgyAxQgOgUAAgbQAAgVAJgSQAKgSARgKQARgKAUAAQAPAAAPAHIAHADQADAAACgCQADgDABgFIAEAAIAEAxIgEAAQgGgWgNgKQgNgKgRAAQgNAAgMAIQgLAHgIAQQgGAQAAAXQAAAUAGAPQAHAOAMAIQANAIAPAAQAOAAALgGQAMgHANgSIACADQgLATgOAJQgPAJgTAAQgkAAgUgbg");
	this.shape_19.setTransform(363.6,262.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AmXEaQiph0AAimQAAimCph1QCph0DuAAQDvAACpB0QCpB1gBCmQABCmipB0QipB2jvAAQjuAAiph2g");
	this.shape_20.setTransform(393.2,262.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AhCBJIAAgEQAQgBAFgEQAEgDAAgPIAAhbQAAgPgEgEQgFgEgQAAIAAgEIBIAAIAAAEQgPAAgEAEQgFAEABAPIAAAnIAHAAQAeAAAOADQAPADAIAJQAKAKgBANQABAQgOANQgOAMgiAAgAgRACIAAA+IARACQAOAAANgJQAMgJgBgQQABgQgNgHQgNgIgTAAIgLABg");
	this.shape_21.setTransform(434.6,282.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgjBJIAAgEIAGAAQAKAAAFgGQADgDAAgMIAAhvIgVAAQgLAAgFACQgHACgEAGQgFAFgBAKIgFAAIACgiICJAAIACAiIgFAAQgBgJgDgEQgEgGgGgDQgGgDgLAAIgXAAIAABvQAAANADADQAFAFAJAAIAGAAIAAAEg");
	this.shape_22.setTransform(419.7,282.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AAXBKIAAgDQAKgBADgDQAEgCAAgDQAAgFgFgLIgKgUIhAAAIgMAWQgEAJAAAFQAAACAEADQADADAMABIAAADIg1AAIAAgDQALgCADgDQAGgFAIgPIA7h3IAEAAIA6B3QAIAQAGADQAFAFAKABIAAADgAgkASIA6AAIgcg6g");
	this.shape_23.setTransform(404.9,282);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAPBJIAAgEQAPgBAFgDQAEgEAAgPIAAhuIhNAAIAABuQAAAPAEADQAFAEAPABIAAAEIhIAAIAAgEQAPgBAFgEQAEgDAAgPIAAhbQAAgPgEgEQgFgEgPAAIAAgEICtAAIAAAEQgPAAgFAEQgEAEAAAPIAABbQAAAPAEADQAFAEAPABIAAAEg");
	this.shape_24.setTransform(386.6,282.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("Ag6AxQgRgUAAgbQAAgVAMgSQALgSATgKQAVgKAWAAQASAAASAHQAFADADAAQADAAACgCQADgDACgFIAEAAIAEAxIgEAAQgIgWgOgKQgOgKgUAAQgQAAgNAIQgOAHgHAQQgIAQAAAXQgBAUAIAPQAHAOAPAIQAPAIASAAQAQAAANgGQAMgHAPgSIAEADQgNATgRAJQgQAJgYAAQgpAAgXgbg");
	this.shape_25.setTransform(369,282.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AnXEbQjDh1ABimQgBinDDh0QDEh0ETAAQEUAADDB0QDDB0ABCnQgBCmjDB1QjDB1kUAAQkTAAjEh1g");
	this.shape_26.setTransform(403.3,282.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("Ag5BJIAAgEQANgBAEgEQAEgDAAgPIAAhbQAAgPgEgEQgEgEgNAAIAAgEIA/AAIAAAEQgNAAgEAEQgEAEAAAPIAAAnIAGAAQAaAAAMADQANADAJAJQAHAKABANQAAAQgNANQgMAMgeAAgAgPACIAAA+IAPACQAMAAALgJQALgJAAgQQAAgQgLgHQgMgIgQAAIgKABg");
	this.shape_27.setTransform(430.8,282.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgfBJIAAgEIAFAAQAJAAAFgGQACgDAAgMIAAhvIgSAAQgKAAgFACQgFACgFAGQgEAFAAAKIgEAAIABgiIB5AAIABAiIgEAAQgBgJgDgEQgCgGgHgDQgFgDgJAAIgVAAIAABvQAAANADADQAEAFAIAAIAGAAIAAAEg");
	this.shape_28.setTransform(417.8,282.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AAUBKIAAgDQAJgBADgDQADgCAAgDQAAgFgEgLIgJgUIg4AAIgKAWQgEAJAAAFQAAACADADQADADALABIAAADIgvAAIAAgDQAKgCADgDQAFgFAHgPIA0h3IADAAIAzB3QAHAQAFADQAFAFAJABIAAADgAgfASIAyAAIgYg6g");
	this.shape_29.setTransform(404.7,282);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AANBJIAAgEQAOgBAEgDQADgEAAgPIAAhuIhDAAIAABuQAAAPAEADQADAEAOABIAAAEIhAAAIAAgEQAOgBAEgEQAEgDAAgPIAAhbQAAgPgEgEQgEgEgOAAIAAgEICZAAIAAAEQgOAAgEAEQgEAEAAAPIAABbQAAAPAEADQAEAEAOABIAAAEg");
	this.shape_30.setTransform(388.6,282.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AgzAxQgPgUAAgbQAAgVAKgSQAKgSASgKQARgKAUAAQAQAAAPAHIAHADQADAAACgCQADgDABgFIAEAAIADAxIgDAAQgHgWgMgKQgNgKgSAAQgNAAgMAIQgMAHgHAQQgHAQAAAXQAAAUAHAPQAGAOANAIQANAIAQAAQAOAAALgGQALgHANgSIAEADQgLATgPAJQgPAJgVAAQgjAAgVgbg");
	this.shape_31.setTransform(373.1,282.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AmfEbQirh1AAimQAAinCrh0QCth0DyAAQDzAACsB0QCrB0AACnQAACmirB1QisB1jzAAQjyAAith1g");
	this.shape_32.setTransform(403.4,282.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9900FF").s().p("AhFBJIAAgEQARgBAEgEQAFgDAAgPIAAhbQAAgPgFgEQgEgEgRAAIAAgEIBLAAIAAAEQgPAAgFAEQgEAEAAAPIAAAnIAHAAQAfAAAPADQAPADAKAJQAKAKAAANQAAAQgPANQgPAMgjAAgAgSACIAAA+IASACQAPAAAMgJQANgJAAgQQAAgQgNgHQgOgIgTAAIgMABg");
	this.shape_33.setTransform(436,282.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9900FF").s().p("AglBJIAAgEIAGAAQAMAAAEgGQADgDAAgMIAAhvIgVAAQgMAAgGACQgGACgFAGQgFAFgBAKIgFAAIACgiICPAAIACAiIgFAAQgBgJgDgEQgEgGgGgDQgHgDgLAAIgZAAIAABvQAAANAEADQAFAFAKAAIAGAAIAAAEg");
	this.shape_34.setTransform(420.5,282.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9900FF").s().p("AAYBKIAAgDQAKgBAFgDQADgCAAgDQAAgFgFgLIgLgUIhDAAIgMAWQgEAJgBAFQABACADADQAFADAMABIAAADIg4AAIAAgDQAMgCADgDQAHgFAHgPIA+h3IAEAAIA9B3QAIAQAFADQAGAFAMABIAAADgAglASIA8AAIgdg6g");
	this.shape_35.setTransform(405,282);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AAPBJIAAgEQARgBAEgDQAFgEAAgPIAAhuIhRAAIAABuQAAAPAFADQAEAEAQABIAAAEIhLAAIAAgEQAQgBAFgEQAEgDAAgPIAAhbQAAgPgEgEQgFgEgQAAIAAgEIC1AAIAAAEQgQAAgFAEQgEAEgBAPIAABbQABAPAEADQAFAEAQABIAAAEg");
	this.shape_36.setTransform(385.9,282.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("Ag8AxQgSgUAAgbQAAgVAMgSQALgSAVgKQAVgKAXAAQATAAATAHQAFADADAAQADAAADgCQADgDACgFIAEAAIAEAxIgEAAQgIgWgPgKQgPgKgVAAQgQAAgOAIQgOAHgIAQQgJAQAAAXQAAAUAIAPQAIAOAPAIQAQAIASAAQARAAANgGQAOgHAPgSIAEADQgNATgSAJQgRAJgYAAQgrAAgYgbg");
	this.shape_37.setTransform(367.4,282.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AnsEbQjMh1AAimQAAinDMh0QDMh0EgAAQEhAADMB0QDLB0AACnQAACmjLB1QjMB1khAAQkgAAjMh1g");
	this.shape_38.setTransform(403.4,282.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("Ag3BJIAAgEQAMgBAFgEQADgDAAgPIAAhbQAAgPgDgEQgFgEgMAAIAAgEIA8AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAAMADQANADAIAJQAHAKAAANQAAAQgMANQgLAMgdAAgAgPACIAAA+IAPACQAMAAALgJQAJgJABgQQgBgQgKgHQgMgIgPAAIgKABg");
	this.shape_39.setTransform(429.9,282.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AgdBJIAAgEIAEAAQAKAAADgGQACgDAAgMIAAhvIgRAAQgKAAgEACQgFACgFAGQgDAFgBAKIgEAAIACgiIB0AAIABAiIgEAAQgBgJgCgEQgEgGgFgDQgFgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_40.setTransform(417.3,282.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBADgDQADgCAAgDQABgFgFgLIgJgUIg2AAIgJAWQgFAJAAAFQAAACAEADQADADAKABIAAADIgtAAIAAgDQAJgCADgDQAFgFAHgPIAyh3IADAAIAxB3QAHAQAFADQAEAFAJABIAAADgAgeASIAxAAIgYg6g");
	this.shape_41.setTransform(404.7,282);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AAMBJIAAgEQAOgBADgDQAEgEABgPIAAhuIhCAAIAABuQAAAPAEADQADAEANABIAAAEIg9AAIAAgEQANgBAEgEQADgDABgPIAAhbQgBgPgDgEQgEgEgNAAIAAgEICTAAIAAAEQgNAAgEAEQgEAEABAPIAABbQgBAPAEADQAEAEANABIAAAEg");
	this.shape_42.setTransform(389.1,282.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgxAxQgOgUAAgbQAAgVAJgSQAKgSARgKQAQgKATAAQAQAAAPAHQAEADACAAQADAAACgCQADgDABgFIAEAAIADAxIgDAAQgHgWgMgKQgMgKgRAAQgNAAgMAIQgLAHgHAQQgGAQAAAXQAAAUAGAPQAGAOANAIQAMAIAPAAQAOAAALgGQAKgHANgSIADADQgKATgPAJQgOAJgUAAQgiAAgUgbg");
	this.shape_43.setTransform(374.1,282.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AmREbQikh1AAimQAAinCkh0QCnh0DqAAQDqAACnB0QCmB0AACnQAACmimB1QinB1jqAAQjqAAinh1g");
	this.shape_44.setTransform(403.4,282.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AhIBJIAAgEQASgBAEgEQAFgDAAgPIAAhbQAAgPgFgEQgEgEgSAAIAAgEIBOAAIAAAEQgQAAgEAEQgFAEAAAPIAAAnIAHAAQAhAAAQADQAQADAJAJQALAKAAANQAAAQgPANQgQAMglAAgAgTACIAAA+IASACQAQAAAOgJQANgJAAgQQAAgQgOgHQgOgIgVAAIgMABg");
	this.shape_45.setTransform(437.4,282.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9900FF").s().p("AgmBJIAAgEIAGAAQAMAAAEgGQADgDABgMIAAhvIgXAAQgNAAgFACQgHACgFAGQgFAFgBAKIgFAAIACgiICVAAIACAiIgFAAQgCgJgCgEQgFgGgHgDQgGgDgMAAIgaAAIAABvQAAANAEADQAFAFALAAIAGAAIAAAEg");
	this.shape_46.setTransform(421.3,282.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9900FF").s().p("AAZBKIAAgDQALgBAEgDQAEgCAAgDQAAgFgGgLIgLgUIhGAAIgMAWQgFAJAAAFQAAACAFADQADADAOABIAAADIg7AAIAAgDQAMgCAEgDQAGgFAJgPIBBh3IADAAIBAB3QAIAQAGADQAHAFALABIAAADgAgmASIA+AAIgfg6g");
	this.shape_47.setTransform(405.1,282);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9900FF").s().p("AARBJIAAgEQAQgBAFgDQAFgEAAgPIAAhuIhVAAIAABuQAAAPAGADQAEAEARABIAAAEIhPAAIAAgEQARgBAFgEQAFgDgBgPIAAhbQABgPgFgEQgFgEgRAAIAAgEIC9AAIAAAEQgRAAgFAEQgEAEgBAPIAABbQABAPAEADQAFAEARABIAAAEg");
	this.shape_48.setTransform(385.1,282.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9900FF").s().p("Ag/AxQgTgUAAgbQAAgVANgSQAMgSAWgKQAVgKAZAAQAUAAATAHIAIADQAEAAACgCQAEgDABgFIAFAAIAEAxIgEAAQgIgWgQgKQgPgKgWAAQgRAAgPAIQgPAHgIAQQgJAQAAAXQAAAUAIAPQAIAOAQAIQAQAIAUAAQASAAANgGQAOgHAQgSIAFADQgOATgTAJQgSAJgZAAQgtAAgZgbg");
	this.shape_49.setTransform(365.9,282.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AoCEbQjTh1AAimQAAinDTh0QDVh0EtAAQEsAADWB0QDVB0AACnQAACmjVB1QjWB1ksAAQktAAjVh1g");
	this.shape_50.setTransform(403.5,282.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9900FF").s().p("Ag1BJIAAgEQANgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgNAAIAAgEIA6AAIAAAEQgMAAgDAEQgEAEAAAPIAAAnIAGAAQAXAAAMADQAMADAHAJQAIAKAAANQAAAQgMANQgLAMgbAAgAgOACIAAA+IAOACQALAAAKgJQAKgJAAgQQAAgQgKgHQgLgIgPAAIgJABg");
	this.shape_51.setTransform(428.5,282.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9900FF").s().p("AgcBJIAAgEIAEAAQAKAAADgGQACgDAAgMIAAhvIgQAAQgJAAgFACQgFACgEAGQgEAFAAAKIgEAAIACgiIBuAAIABAiIgEAAQgBgJgCgEQgDgGgFgDQgFgDgJAAIgSAAIAABvQgBANADADQAEAFAHAAIAFAAIAAAEg");
	this.shape_52.setTransform(416.6,282.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9900FF").s().p("AATBKIAAgDQAHgBAEgDQACgCAAgDQAAgFgDgLIgJgUIg0AAIgIAWQgEAJAAAFQAAACADADQADADAKABIAAADIgrAAIAAgDQAJgCACgDQAFgFAGgPIAwh3IADAAIAvB3QAFAQAFADQAEAFAJABIAAADgAgcASIAuAAIgWg6g");
	this.shape_53.setTransform(404.7,282);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9900FF").s().p("AAMBJIAAgEQANgBADgDQAEgEAAgPIAAhuIg+AAIAABuQAAAPADADQAEAEAMABIAAAEIg6AAIAAgEQANgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgNAAIAAgEICLAAIAAAEQgMAAgEAEQgDAEAAAPIAABbQAAAPADADQAEAEAMABIAAAEg");
	this.shape_54.setTransform(389.9,282.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9900FF").s().p("AguAxQgOgUAAgbQAAgVAJgSQAJgSAQgKQAQgKASAAQAOAAAPAHQAEADACAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQADgDACgFIADAAIADAxIgDAAQgHgWgLgKQgMgKgQAAQgMAAgLAIQgLAHgGAQQgHAQABAXQAAAUAFAPQAGAOAMAIQAMAIAOAAQANAAALgGQAKgHAMgSIADADQgKATgOAJQgOAJgSAAQghAAgSgbg");
	this.shape_55.setTransform(375.7,282.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Al7EbQidh1AAimQAAinCdh0QCdh0DeAAQDeAACdB0QCeB0gBCnQABCmieB1QidB1jeAAQjeAAidh1g");
	this.shape_56.setTransform(403.5,282.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9900FF").s().p("Ag3BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA8AAIAAAEQgMAAgEAEQgDAEAAAPIAAAnIAFAAQAZAAAMADQAMADAIAJQAIAKAAANQAAAQgMANQgMAMgcAAgAgOACIAAA+IAOACQAMAAAKgJQAKgJAAgQQAAgQgKgHQgLgIgQAAIgJABg");
	this.shape_57.setTransform(429.4,282.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9900FF").s().p("AgdBJIAAgEIAFAAQAIAAAEgGQACgDAAgMIAAhvIgRAAQgJAAgEACQgGACgDAGQgFAFAAAKIgEAAIABgiIBzAAIABAiIgEAAQgBgJgCgEQgEgGgFgDQgFgDgIAAIgVAAIAABvQABANADADQADAFAIAAIAGAAIAAAEg");
	this.shape_58.setTransform(417.1,282.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9900FF").s().p("AATBKIAAgDQAJgBADgDQADgCAAgDQAAgFgFgLIgIgUIg2AAIgJAWQgEAJAAAFQAAACAEADQADADAKABIAAADIgtAAIAAgDQAJgCADgDQAFgFAHgPIAxh3IADAAIAxB3QAFAQAFADQAFAFAJABIAAADgAgdASIAvAAIgXg6g");
	this.shape_59.setTransform(404.7,282);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9900FF").s().p("AAMBJIAAgEQANgBAEgDQAEgEAAgPIAAhuIhBAAIAABuQAAAPAEADQADAEAOABIAAAEIg9AAIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEICRAAIAAAEQgNAAgEAEQgEAEAAAPIAABbQAAAPAEADQAEAEANABIAAAEg");
	this.shape_60.setTransform(389.4,282.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9900FF").s().p("AgwAxQgPgUAAgbQAAgVAKgSQAJgSARgKQAQgKATAAQAPAAAQAHQADADACAAQADAAADgCQACgDABgFIAEAAIADAxIgDAAQgHgWgLgKQgMgKgRAAQgNAAgLAIQgLAHgHAQQgGAQAAAXQgBAUAHAPQAFAOANAIQAMAIAPAAQANAAALgGQALgHAMgSIADADQgKATgOAJQgOAJgUAAQgiAAgTgbg");
	this.shape_61.setTransform(374.7,282.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AmKEbQihh1AAimQAAinChh0QCkh0DmAAQDmAACjB0QCjB0AACnQAACmijB1QijB1jmAAQjmAAikh1g");
	this.shape_62.setTransform(403.6,282.4);

	this.instance_30 = new lib.Tween23("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(403.6,282.4);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween24("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-111.4,282.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},164).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.instance_30}]},37).to({state:[{t:this.instance_31}]},5).to({state:[]},316).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(210).to({_off:false},0).to({_off:true,x:-111.4},5).wait(430));

	// Слой 7
	this.instance_32 = new lib.Tween15("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(303.3,90.3);
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween16("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(335.5,50.3,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},147).to({state:[{t:this.instance_33}]},17).to({state:[]},2).wait(479));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(147).to({_off:false},0).to({_off:true,scaleX:0.43,scaleY:0.43,x:335.5,y:50.3},17).wait(481));

	// Слой 5
	this.instance_34 = new lib.Tween13("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(260.4,67);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween14("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(228.4,52,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34}]},140).to({state:[{t:this.instance_35}]},10).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},10).to({state:[]},5).wait(479));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(140).to({_off:false},0).to({_off:true,scaleX:0.76,scaleY:0.76,x:228.4,y:52},10).wait(1).to({_off:false,scaleX:1,scaleY:1,x:260.4,y:67},0).to({_off:true,scaleX:0.76,scaleY:0.76,x:228.4,y:52},10).wait(484));

	// Слой 3
	this.instance_36 = new lib.Tween11("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(338.7,159);
	this.instance_36._off = true;

	this.instance_37 = new lib.Tween12("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(393.8,139,0.663,0.663,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},137).to({state:[{t:this.instance_37}]},4).to({state:[]},25).wait(479));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(137).to({_off:false},0).to({_off:true,regX:0.1,scaleX:0.66,scaleY:0.66,x:393.8,y:139},4).wait(504));

	// микроыон
	this.instance_38 = new lib.Слой1_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(152,234,0.224,0.224);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(129).to({_off:false},0).wait(1).to({rotation:-15,x:142.5,y:244.4},0).wait(2).to({rotation:0,x:152,y:234},0).wait(1).to({rotation:-15,x:142.5,y:244.4},0).wait(1).to({rotation:0,x:152,y:234},0).wait(2).to({_off:true},30).wait(479));

	// Что умет Ферби?
	this.instance_39 = new lib.Tween1("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(688,70.1);
	this.instance_39._off = true;

	this.instance_40 = new lib.Tween2("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(292,106.1);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(69).to({_off:false},0).to({_off:true,x:292,y:106.1},3).wait(573));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(69).to({_off:false},3).wait(16).to({x:298},0).to({x:295,y:-25},2).to({_off:true},1).wait(554));

	// Layer 10
	this.instance_41 = new lib.Hasbrologo();
	this.instance_41.parent = this;
	this.instance_41.setTransform(481,344,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},102).wait(543));

	// Layer 3
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhYBKQglgfAAgrQAAgqAlgfQAlgeAzAAQA0AAAlAeQAlAfAAAqQAAArglAfQglAeg0AAQgzAAglgeg");
	this.shape_63.setTransform(289.6,278.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AkQClQhxhEAAhhQAAhfBxhFQBxhFCfAAQCfAAByBFQBxBFAABfQAABhhxBEQhyBFifAAQifAAhxhFg");
	this.shape_64.setTransform(313.7,259.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AmBEQQighxAAifQAAidCghxQCghxDhAAQDhAACgBxQChBxAACdQAACfihBxQigBwjhAAQjhAAighwg");
	this.shape_65.setTransform(341.7,198.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AmBFeQigiRAAjNQAAjLCgiQQCgiSDhAAQDhAACgCSQChCQAADLQAADNihCRQigCQjhAAQjhAAigiQg");
	this.shape_66.setTransform(393.7,146.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AmBFeQigiRAAjNQAAjLCgiQQCgiSDhAAQDhAAChCSQCgCQAADLQAADNigCRQihCQjhAAQjhAAigiQg");
	this.shape_67.setTransform(414.4,99.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9900FF").s().p("Ag4BJIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEIA9AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAaAAAMADQAMADAJAJQAHAKABANQAAAQgNANQgMAMgdAAgAgPACIAAA+IAPACQAMAAALgJQAKgJABgQQAAgQgMgHQgLgIgQAAIgKABg");
	this.shape_68.setTransform(482.1,98.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_69.setTransform(469.3,98.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9900FF").s().p("AAUBLIAAgFQAJAAADgCQADgDAAgEQAAgEgEgLIgJgVIg4AAIgKAYQgDAIAAAEQgBAEAEADQADACALAAIAAAFIguAAIAAgFQAJgBADgCQAFgGAGgQIA0h3IACAAIAzB4QAGAQAFAEQAGAEAJAAIAAAFgAgeASIAwAAIgXg6g");
	this.shape_70.setTransform(456.5,97.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#9900FF").s().p("AhABJIAAgEIAFAAQAJAAAEgGQACgEABgMIAAhdQAAgOgDgDQgFgFgIAAIgFAAIAAgEIA/AAQAQAAALADQAQAEAIAJQAJAKAAANQAAALgGAJQgIAIgNAEQAQADAIAHQAKAKgBAOQAAALgGAKQgHAKgMAEQgMAFgZAAgAgXACIAAA8QANADALAAQATAAAKgJQALgIAAgNQAAgJgFgIQgFgHgKgFQgLgEgOAAIgLAAIgIAAgAgXg+IAAA4IAJABIALAAQAQAAAHgDQAIgEAEgHQAFgHAAgIQAAgNgLgJQgLgJgTAAQgKAAgJADg");
	this.shape_71.setTransform(442.2,98.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9900FF").s().p("Ag+BJIAAgEIAGAAQAFAAAFgDQADgBABgEQACgDAAgLIAAheQgBgNgDgEQgEgEgIAAIgGAAIAAgEIBwAAIACAgIgFAAQgCgMgDgEQgCgEgGgCQgEgCgLAAIgnAAIAAA6IAfAAQANAAADgEQAGgFABgNIAEAAIAAAyIgEAAQgCgKgBgDQgCgEgEgCQgFgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAYAAQAMAAAGgCQAFgCAFgFQAHgGAHgOIAEAAIgMAlg");
	this.shape_72.setTransform(428.6,98.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9900FF").s().p("ABHBeQgCgRgLgNQgLgMgXAAIhiAAIAAgEQANgBAEgEQAEgDgBgPIAAhbQABgPgEgEQgEgEgNAAIAAgEIA+AAIAAAEQgOAAgDAEQgEAEAAAPIAABgQAAAKACACQAAACAMAAIAlAAQAOAAAAgCQABgCAAgMIAAheQAAgPgDgEQgEgEgNAAIAAgEIA/AAIAAAEQgOAAgEAEQgEAEAAAPIAABcQAAAOAEAEQAEAEANAAIAAAug");
	this.shape_73.setTransform(413.9,100.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9900FF").s().p("AANBJIAAgEIAFAAQAJAAAEgFQADgEAAgNIAAgsIhDAAIAAAsQAAALABAEQABACAEACQAFADAFAAIAFAAIAAAEIg+AAIAAgEIAFAAQAJAAAEgFQACgEAAgNIAAhdQAAgLgBgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgCAEQgBADAAALIAAAqIBDAAIAAgqQAAgLgCgEQgBgCgDgCQgFgDgFAAIgFAAIAAgEIA+AAIAAAEIgFAAQgFAAgFADQgDABgBAEQgCADAAALIAABdQAAALACAEQABACADACQAFADAFAAIAFAAIAAAEg");
	this.shape_74.setTransform(398,98.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9900FF").s().p("AAUBLIAAgFQAIAAAEgCQADgDAAgEQAAgEgEgLIgJgVIg3AAIgKAYQgFAIAAAEQABAEADADQADACAKAAIAAAFIgtAAIAAgFQAJgBACgCQAGgGAHgQIAzh3IADAAIAyB4QAHAQAFAEQAEAEAJAAIAAAFgAgfASIAyAAIgYg6g");
	this.shape_75.setTransform(382.1,97.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_76.setTransform(368.6,98.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AorFeQjmiRAAjNQAAjLDmiQQDoiSFDAAQFEAADnCSQDnCQAADLQAADNjnCRQjnCQlEAAQlDAAjoiQg");
	this.shape_77.setTransform(425.4,99.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAEgDABgPIAAhbQgBgPgEgEQgDgEgOAAIAAgEIA+AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQANADAHAJQAJAKgBANQABAQgMANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQALgJAAgQQAAgQgLgHQgLgIgQAAIgKABg");
	this.shape_78.setTransform(497.8,87.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9900FF").s().p("AAUBKIAAgEQAIAAAEgCQADgDAAgDQAAgFgFgLIgJgVIg2AAIgKAYQgFAIAAAFQABACADAEQADACAKAAIAAAEIguAAIAAgEQAKgBACgCQAGgGAHgQIAzh2IADAAIAyB3QAGAPAGAEQAFAFAIAAIAAAEgAgfASIAyAAIgYg6g");
	this.shape_79.setTransform(472.2,87);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9900FF").s().p("AhABJIAAgEIAFAAQAJAAAEgGQACgEAAgMIAAhdQAAgOgDgDQgDgFgJAAIgFAAIAAgEIA+AAQARAAALADQAQAEAJAJQAIAKAAANQAAALgHAJQgGAIgNAEQAPADAHAHQALAKAAAOQAAALgHAKQgHAKgMAEQgMAFgYAAgAgWACIAAA8QAMADALAAQATAAALgJQAKgIAAgNQAAgJgFgIQgFgHgKgFQgLgEgNAAIgMAAIgHAAgAgWg+IAAA4IAJABIALAAQAOAAAJgDQAHgEAFgHQADgHAAgIQAAgNgKgJQgLgJgSAAQgLAAgIADg");
	this.shape_80.setTransform(457.9,87.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9900FF").s().p("Ag9BJIAAgEIAEAAQAGAAAEgDQAEgBABgEQABgDABgLIAAheQgBgNgCgEQgFgEgJAAIgEAAIAAgEIBvAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQAMAAAFgEQAFgFABgNIAEAAIAAAyIgEAAQgBgKgCgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQACABAGAAIAXAAQANAAAFgCQAGgCAGgFQAGgGAHgOIAFAAIgNAlg");
	this.shape_81.setTransform(444.3,87.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9900FF").s().p("ABIBeQgDgRgMgNQgLgMgXAAIhiAAIAAgEQAOgBAEgEQADgDABgPIAAhbQgBgPgDgEQgEgEgOAAIAAgEIA/AAIAAAEQgOAAgDAEQgEAEAAAPIAABgQAAAKABACQABACANAAIAkAAQANAAABgCQABgCABgMIAAheQAAgPgEgEQgEgEgOAAIAAgEIA/AAIAAAEQgNAAgEAEQgEAEABAPIAABcQgBAOAEAEQAEAEANAAIAAAug");
	this.shape_82.setTransform(429.6,89.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9900FF").s().p("AAUBKIAAgEQAIAAAEgCQADgDAAgDQAAgFgFgLIgJgVIg3AAIgKAYQgDAIAAAFQAAACADAEQADACAKAAIAAAEIguAAIAAgEQAKgBADgCQAFgGAGgQIA0h2IACAAIA0B3QAGAPAFAEQAEAFAKAAIAAAEgAgfASIAyAAIgYg6g");
	this.shape_83.setTransform(397.8,87);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ap4FdQkHiQAAjNQAAjLEHiQQEHiSFxAAQFxAAEHCSQEICQAADLQAADNkICQQkHCRlxAAQlxAAkHiRg");
	this.shape_84.setTransform(438.5,86.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9900FF").s().p("Ag4BJIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEIA9AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQAMADAJAJQAHAKABANQAAAQgNANQgMAMgdAAgAgPACIAAA+IAPACQAMAAALgJQAKgJABgQQAAgQgMgHQgLgIgQAAIgKABg");
	this.shape_85.setTransform(493.8,88.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9900FF").s().p("AhABJIAAgEIAFAAQAJAAAEgGQACgEABgMIAAhdQAAgOgDgDQgFgFgIAAIgFAAIAAgEIA/AAQAQAAALADQAQAEAIAJQAJAKAAANQAAALgGAJQgIAIgNAEQAQADAHAHQALAKgBAOQAAALgGAKQgHAKgMAEQgMAFgZAAgAgXACIAAA8QANADALAAQATAAAKgJQALgIAAgNQAAgJgFgIQgFgHgKgFQgLgEgOAAIgLAAIgIAAgAgXg+IAAA4IAJABIALAAQAQAAAHgDQAIgEAEgHQAFgHAAgIQAAgNgLgJQgLgJgTAAQgKAAgJADg");
	this.shape_86.setTransform(453.9,88.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9900FF").s().p("ABHBeQgCgRgLgNQgLgMgYAAIhiAAIAAgEQAOgBAEgEQAEgDgBgPIAAhbQABgPgEgEQgEgEgOAAIAAgEIA/AAIAAAEQgOAAgDAEQgEAEAAAPIAABgQAAAKACACQAAACAMAAIAlAAQAOAAABgCQAAgCAAgMIAAheQAAgPgDgEQgEgEgNAAIAAgEIA/AAIAAAEQgOAAgEAEQgEAEAAAPIAABcQAAAOAEAEQAEAEANAAIAAAug");
	this.shape_87.setTransform(425.6,90.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9900FF").s().p("AAUBLIAAgFQAIAAAEgCQADgDAAgEQAAgEgEgLIgJgVIg3AAIgKAYQgFAIAAAEQABAEADADQADACALAAIAAAFIguAAIAAgFQAJgBACgCQAGgGAHgQIAzh3IADAAIAyB4QAGAQAGAEQAEAEAJAAIAAAFgAgeASIAxAAIgYg6g");
	this.shape_88.setTransform(393.8,88);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AqVFdQkSiQAAjNQAAjLESiQQETiSGCAAQGBAAETCSQEUCQAADLQAADNkUCQQkTCRmBAAQmCAAkTiRg");
	this.shape_89.setTransform(438.5,86.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9900FF").s().p("AAUBKIAAgDQAJgBADgDQADgCAAgDQAAgFgEgLIgJgUIg4AAIgKAWQgDAJAAAFQgBACAEADQADADALABIAAADIguAAIAAgDQAJgCADgDQAFgFAGgQIA0h2IACAAIAzB3QAGAPAFAEQAGAFAJABIAAADgAgeASIAwAAIgXg6g");
	this.shape_90.setTransform(468.2,85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgEgLIgJgUIg3AAIgKAWQgFAJAAAFQABACADADQADADALABIAAADIguAAIAAgDQAJgCACgDQAGgFAHgQIAzh2IADAAIAyB3QAGAPAGAEQAEAFAJABIAAADgAgeASIAxAAIgYg6g");
	this.shape_91.setTransform(393.8,85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ApHFdQjyiQAAjNQAAjLDyiQQDyiSFVAAQFUAADzCSQDzCQAADLQAADNjzCQQjzCRlUAAQlVAAjyiRg");
	this.shape_92.setTransform(438.5,86.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9900FF").s().p("Ag4BJIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEIA9AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAaAAAMADQAMADAJAJQAHAKABANQAAAQgNANQgMAMgdAAgAgPACIAAA+IAPACQAMAAALgJQALgJgBgQQABgQgMgHQgLgIgQAAIgKABg");
	this.shape_93.setTransform(494.8,85.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9900FF").s().p("AAUBKIAAgDQAJgBADgDQADgCAAgDQAAgFgEgLIgJgUIg4AAIgKAWQgDAJAAAFQgBACAEADQADADALABIAAADIguAAIAAgDQAJgCADgDQAFgFAGgQIA0h2IACAAIAzB3QAHAPAEAEQAGAFAJABIAAADgAgeASIAwAAIgXg6g");
	this.shape_94.setTransform(469.2,85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9900FF").s().p("AhABJIAAgEIAFAAQAJAAAEgGQACgEAAgMIAAhdQAAgOgCgDQgFgFgIAAIgFAAIAAgEIA/AAQAQAAALADQAQAEAJAJQAIAKAAANQAAALgGAJQgIAIgMAEQAPADAHAHQALAKgBAOQAAALgGAKQgHAKgMAEQgMAFgZAAgAgXACIAAA8QANADALAAQAUAAAJgJQALgIAAgNQAAgJgFgIQgEgHgLgFQgKgEgPAAIgLAAIgIAAgAgXg+IAAA4IAJABIAMAAQAPAAAHgDQAIgEAFgHQAEgHgBgIQAAgNgKgJQgKgJgUAAQgKAAgJADg");
	this.shape_95.setTransform(454.9,85.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9900FF").s().p("Ag+BJIAAgEIAGAAQAFAAAEgDQAEgBABgEQACgDAAgLIAAheQAAgNgEgEQgDgEgJAAIgGAAIAAgEIBwAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQANAAADgEQAGgFABgNIAEAAIAAAyIgEAAQgCgKgBgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAGgCQAFgCAFgFQAHgGAHgOIAEAAIgMAlg");
	this.shape_96.setTransform(441.3,85.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9900FF").s().p("ABHBeQgCgRgLgNQgLgMgYAAIhiAAIAAgEQAOgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgOAAIAAgEIA/AAIAAAEQgNAAgEAEQgEAEAAAPIAABgQAAAKACACQAAACAMAAIAlAAQANAAABgCQABgCAAgMIAAheQABgPgEgEQgEgEgNAAIAAgEIA/AAIAAAEQgOAAgEAEQgDAEAAAPIAABcQAAAOADAEQAEAEANAAIAAAug");
	this.shape_97.setTransform(426.6,87.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgFgLIgJgUIg2AAIgKAWQgFAJAAAFQABACADADQADADAKABIAAADIguAAIAAgDQAKgCACgDQAGgFAHgQIAzh2IADAAIAyB3QAGAPAGAEQAFAFAIABIAAADgAgfASIAyAAIgYg6g");
	this.shape_98.setTransform(394.8,85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ap/FdQkKiQAAjNQAAjLEKiQQEJiSF2AAQF1AAELCSQEKCQAADLQAADNkKCQQkLCRl1AAQl2AAkJiRg");
	this.shape_99.setTransform(438.5,86.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAFgDAAgPIAAhbQAAgPgFgEQgDgEgOAAIAAgEIA+AAIAAAEQgNAAgDAEQgEAEAAAPIAAAnIAGAAQAaAAAMADQANADAHAJQAJAKgBANQABAQgMANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQALgJAAgQQABgQgMgHQgLgIgQAAIgKABg");
	this.shape_100.setTransform(495.7,84.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9900FF").s().p("AAUBKIAAgDQAJgBADgDQADgCAAgDQAAgFgFgKIgJgVIg2AAIgKAWQgFAJAAAFQAAACAEADQADADAKABIAAADIguAAIAAgDQAKgCACgDQAGgFAHgPIAzh3IADAAIAzB4QAFAPAGADQAFAFAIABIAAADgAgfASIAyAAIgYg6g");
	this.shape_101.setTransform(470,84);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9900FF").s().p("AhBBJIAAgEIAGAAQAJAAAEgGQACgEAAgMIAAhdQAAgOgDgDQgDgFgJAAIgGAAIAAgEIA/AAQARAAALADQAQAEAIAJQAJAKAAANQAAALgHAJQgGAIgNAEQAPADAIAHQAJAKABAOQAAALgHAKQgHAKgMAEQgMAFgYAAgAgWACIAAA8QAMADALAAQATAAALgJQAKgIAAgNQAAgJgFgIQgEgHgLgFQgLgEgNAAIgMAAIgHAAgAgWg+IAAA4IAJABIAKAAQAPAAAJgDQAHgEAFgHQADgHAAgIQABgNgLgJQgLgJgSAAQgLAAgIADg");
	this.shape_102.setTransform(455.8,84.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9900FF").s().p("Ag9BJIAAgEIAEAAQAGAAAEgDQAEgBABgEQACgDgBgLIAAheQAAgNgCgEQgFgEgJAAIgEAAIAAgEIBvAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQAMAAAFgEQAFgFABgNIAEAAIAAAyIgEAAQgBgKgCgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAFgCQAGgCAGgFQAGgGAHgOIAFAAIgNAlg");
	this.shape_103.setTransform(442.1,84.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9900FF").s().p("ABIBeQgDgRgMgNQgKgMgXAAIhiAAIAAgEQANgBAEgEQADgDABgPIAAhbQgBgPgDgEQgEgEgNAAIAAgEIA+AAIAAAEQgOAAgDAEQgEAEAAAPIAABgQAAAKABACQABACANAAIAkAAQANAAACgCQABgCAAgMIAAheQAAgPgEgEQgEgEgOAAIAAgEIA/AAIAAAEQgNAAgEAEQgDAEgBAPIAABcQABAOADAEQADAEAOAAIAAAug");
	this.shape_104.setTransform(427.5,86.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9900FF").s().p("AAUBKIAAgDQAIgBAEgDQADgCAAgDQAAgFgFgKIgJgVIg3AAIgKAWQgDAJAAAFQgBACAEADQADADALABIAAADIgvAAIAAgDQAKgCADgDQAFgFAGgPIA0h3IACAAIA0B4QAFAPAFADQAFAFAKABIAAADgAgeASIAwAAIgXg6g");
	this.shape_105.setTransform(395.6,84);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ao5FeQjsiRAAjNQAAjLDsiQQDtiSFMAAQFMAADtCSQDtCQAADLQAADNjtCRQjtCQlMAAQlMAAjtiQg");
	this.shape_106.setTransform(440.4,87.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AzSWSQgmgPAAgVQAAgWAmgPQAlgPA1gBQA1ABAmAPQAlAPAAAWQAAAVglAPQgmAQg1AAQg1AAglgQgAhmpVQjsiRAAjNQAAjLDsiQQDsiTFNAAQFMAADtCTQDtCQAADLQAADNjtCRQjtCQlMAAQlNAAjsiQg");
	this.shape_107.setTransform(393.7,182.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("A3MUGQhYgrAAg/QAAg/BYgtQBXgsB7AAQB8AABXAsQBXAtAAA/QAAA/hXArQhXAuh8AAQh7AAhXgugADFnnQjriRAAjNQAAjLDriRQDtiSFNAAQFMAADtCSQDtCRAADLQAADNjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_108.setTransform(363.7,171.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("A70RdQiThfAAiJQAAiKCThiQCRhgDOAAQDPAACSBgQCRBiAACKQAACJiRBfQiSBkjPAAQjOAAiRhkgAIol0QjsiRAAjNQAAjMDsiQQDtiSFNAAQFMAADtCSQDtCQAADMQAADNjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_109.setTransform(328.2,159.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAEgDAAgPIAAhbQAAgPgEgEQgDgEgOAAIAAgEIA+AAIAAAEQgMAAgEAEQgEAEAAAPIAAAnIAGAAQAZAAANADQAMADAIAJQAJAKAAANQgBAQgLANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQAMgJgBgQQAAgQgLgHQgLgIgQAAIgKABg");
	this.shape_110.setTransform(140.4,182.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9900FF").s().p("AANBJIAAgEQANgBAEgDQAEgEAAgPIAAhuIhDAAIAABuQAAAPAEADQADAEAOABIAAAEIg+AAIAAgEQANgBAEgEQADgDABgPIAAhbQgBgPgDgEQgEgEgNAAIAAgEICVAAIAAAEQgNAAgEAEQgDAEgBAPIAABbQABAPADADQAEAEANABIAAAEg");
	this.shape_111.setTransform(99.4,182.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#9900FF").s().p("Ag9BJIAAgEIAEAAQAGAAAEgDQAEgBABgEQACgDgBgLIAAheQAAgNgCgEQgFgEgJAAIgEAAIAAgEIBvAAIABAgIgEAAQgCgMgDgEQgDgEgFgCQgEgCgLAAIgnAAIAAA6IAfAAQAMAAAFgEQAFgFABgNIAEAAIAAAyIgEAAQgBgKgCgDQgCgEgFgCQgEgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAXAAQANAAAFgCQAGgCAGgFQAGgGAHgOIAFAAIgNAlg");
	this.shape_112.setTransform(442.1,84.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#9900FF").s().p("AgeBJIAAgEIAFAAQAJAAAEgGQACgDAAgMIAAhvIgRAAQgKAAgFACQgFACgEAGQgEAFgBAKIgEAAIACgiIB2AAIABAiIgEAAQgBgJgCgEQgDgGgGgDQgGgDgJAAIgUAAIAABvQAAANADADQAEAFAIAAIAFAAIAAAEg");
	this.shape_113.setTransform(382.1,84.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("EghVANPQjRiQAAjRQAAjRDRiVQDOiRElAAQEmAADQCRQDOCVAADRQAADRjOCQQjQCXkmAAQklAAjOiXgAPHiaQjsiQAAjNQAAjMDsiQQDtiSFNAAQFMAADtCSQDtCQAADMQAADNjtCQQjtCRlMAAQlNAAjtiRg");
	this.shape_114.setTransform(286.7,137.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9900FF").s().p("Ag+BJIAAgEIAGAAQAFAAAFgDQADgBABgEQABgDAAgLIAAheQAAgNgDgEQgEgEgIAAIgGAAIAAgEIBwAAIACAgIgFAAQgCgMgDgEQgCgEgGgCQgEgCgLAAIgnAAIAAA6IAfAAQANAAADgEQAGgFABgNIAEAAIAAAyIgEAAQgCgKgBgDQgCgEgEgCQgFgDgJAAIgfAAIAAAwQAAAKABACQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAIABIAYAAQAMAAAGgCQAFgCAGgFQAGgGAHgOIAFAAIgNAlg");
	this.shape_115.setTransform(89.1,132.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9900FF").s().p("AANBJIAAgEQANgBAEgDQADgEABgPIAAhuIhDAAIAABuQAAAPAEADQAEAEANABIAAAEIg+AAIAAgEQANgBAEgEQADgDAAgPIAAhbQAAgPgDgEQgEgEgNAAIAAgEICWAAIAAAEQgOAAgEAEQgDAEgBAPIAABbQABAPADADQAEAEAOABIAAAEg");
	this.shape_116.setTransform(74.4,132.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#9900FF").s().p("Ag5BJIAAgEQAOgBADgEQAFgDAAgPIAAhbQAAgPgFgEQgDgEgOAAIAAgEIA+AAIAAAEQgNAAgDAEQgEAEAAAPIAAAnIAGAAQAaAAAMADQANADAHAJQAJAKgBANQABAQgMANQgMAMgeAAgAgPACIAAA+IAPACQAMAAAKgJQALgJAAgQQABgQgMgHQgLgIgQAAIgKABg");
	this.shape_117.setTransform(495.7,84.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("EgjfAI0Qjoh9AAizQAAi0DoiAQDlh9FHAAQFHAADnB9QDmCAAAC0QAACzjmB9QjnCClHAAQlHAAjliCgARoCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_118.setTransform(270.6,107.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("EgjxAI0QkDh9AAizQAAi0EDiAQD/h9FsAAQFsAAECB9QEACAAAC0QAACzkAB9QkCCClsAAQlsAAj/iCgASVCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_119.setTransform(266.1,107.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("EgjhAI0Qjrh9AAizQAAi0DriAQDoh9FLAAQFLAADqB9QDpCAAAC0QAACzjpB9QjqCClLAAQlLAAjoiCgARtCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_120.setTransform(270.1,107.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("Egj6AI0QkNh9gBizQABi0ENiAQELh9F9AAQF9AAENB9QEMCAAAC0QAACzkMB9QkNCCl9AAQl9AAkLiCgASoCWQjsiRABjMQgBjLDsiRQDuiSFMAAQFNAADtCSQDsCRABDLQgBDMjsCRQjtCQlNAAQlMAAjuiQg");
	this.shape_121.setTransform(264.2,107.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("EgjTAI0QjVh9AAizQAAi0DViAQDUh9EvAAQEtAADWB9QDVCAAAC0QAACzjVB9QjWCCktAAQkvAAjUiCgARJCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_122.setTransform(273.7,107.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("EgjdAI0Qjkh9AAizQAAi0DkiAQDjh9FDAAQFCAADlB9QDjCAAAC0QAACzjjB9QjlCClCAAQlDAAjjiCgARiCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_123.setTransform(271.2,107.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("Egi8AI0Qi1h9AAizQAAi0C1iAQC0h9EBAAQEAAAC2B9QC0CAAAC0QAACzi0B9Qi2CCkAAAQkBAAi0iCgAQSCWQjsiRAAjMQAAjLDsiRQDtiSFNAAQFMAADtCSQDtCRAADLQAADMjtCRQjtCQlMAAQlNAAjtiQg");
	this.shape_124.setTransform(279.2,107.5);

	this.instance_42 = new lib.Tween21("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(279.2,107.5);
	this.instance_42._off = true;

	this.instance_43 = new lib.Tween22("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(-248.8,107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},96).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_77},{t:this.shape_76,p:{x:368.6,y:98.1}},{t:this.shape_75},{t:this.shape_74,p:{x:398,y:98.1}},{t:this.shape_73},{t:this.shape_72,p:{x:428.6,y:98.1}},{t:this.shape_71},{t:this.shape_70,p:{x:456.5,y:97.9}},{t:this.shape_69,p:{x:469.3,y:98.1}},{t:this.shape_68}]},1).to({state:[{t:this.shape_84},{t:this.shape_76,p:{x:384.3,y:87.2}},{t:this.shape_83},{t:this.shape_74,p:{x:413.7,y:87.2}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_69,p:{x:485,y:87.2}},{t:this.shape_78}]},1).to({state:[{t:this.shape_89},{t:this.shape_76,p:{x:380.3,y:88.2}},{t:this.shape_88},{t:this.shape_74,p:{x:409.7,y:88.2}},{t:this.shape_87,p:{y:90.3}},{t:this.shape_72,p:{x:440.3,y:88.2}},{t:this.shape_86,p:{y:88.2}},{t:this.shape_70,p:{x:468.2,y:88}},{t:this.shape_69,p:{x:481,y:88.2}},{t:this.shape_85,p:{y:88.2}}]},1).to({state:[{t:this.shape_92},{t:this.shape_76,p:{x:380.3,y:85.2}},{t:this.shape_91},{t:this.shape_74,p:{x:409.7,y:85.2}},{t:this.shape_87,p:{y:87.3}},{t:this.shape_72,p:{x:440.3,y:85.2}},{t:this.shape_86,p:{y:85.2}},{t:this.shape_90},{t:this.shape_69,p:{x:481,y:85.2}},{t:this.shape_85,p:{y:85.2}}]},1).to({state:[{t:this.shape_99},{t:this.shape_76,p:{x:381.3,y:85.2}},{t:this.shape_98},{t:this.shape_74,p:{x:410.7,y:85.2}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_69,p:{x:482,y:85.2}},{t:this.shape_93}]},1).to({state:[{t:this.shape_106},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},1).to({state:[{t:this.shape_106},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},12).to({state:[{t:this.shape_106},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},7).to({state:[{t:this.shape_107},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},1).to({state:[{t:this.shape_108},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},1).to({state:[{t:this.shape_109},{t:this.shape_76,p:{x:382.1,y:84.2}},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_69,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_112},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_100,p:{x:495.7,y:84.2}},{t:this.shape_111},{t:this.shape_103,p:{x:114.1,y:182.7}},{t:this.shape_69,p:{x:127.6,y:182.7}},{t:this.shape_110}]},1).to({state:[{t:this.shape_118},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_119},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_120},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_121},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_122},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_123},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.shape_124},{t:this.shape_113},{t:this.shape_105},{t:this.shape_74,p:{x:411.5,y:84.2}},{t:this.shape_104},{t:this.shape_103,p:{x:442.1,y:84.2}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_76,p:{x:482.8,y:84.2}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_69,p:{x:102.6,y:132.7}},{t:this.shape_100,p:{x:115.4,y:132.7}}]},1).to({state:[{t:this.instance_42}]},74).to({state:[{t:this.instance_43}]},5).to({state:[]},316).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(210).to({_off:false},0).to({_off:true,x:-248.8},5).wait(430));

	// название
	this.instance_44 = new lib.post1058801479875478();
	this.instance_44.parent = this;
	this.instance_44.setTransform(20,75);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(24).to({_off:false},0).wait(3).to({scaleX:0.86,scaleY:0.86,x:55,y:97},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:93,y:121},0).wait(1).to({scaleX:0.42,scaleY:0.41,x:165,y:231},0).wait(32).to({scaleX:0.63,scaleY:0.6,x:114,y:200},0).wait(2).to({scaleX:0.06,scaleY:0.06,x:255,y:285},0).to({_off:true},2).wait(580));

	// ферб1
	this.instance_45 = new lib.Слой1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(245,167,0.169,0.169);

	this.instance_46 = new lib.Tween7("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(276.2,200.2,1,0.927);
	this.instance_46._off = true;

	this.instance_47 = new lib.Tween8("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(273.2,23.2,1,0.951);
	this.instance_47._off = true;

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#13C1B8").s().p("AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPAAQARAAALALQAMANAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape_125.setTransform(256,160);

	this.instance_48 = new lib.Tween19("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(276.2,167.2);
	this.instance_48._off = true;

	this.instance_49 = new lib.Tween20("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(-103.8,167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_45}]},62).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},17).to({state:[{t:this.instance_47}]},4).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},5).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},9).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},6).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.shape_125},{t:this.instance_45}]},2).to({state:[{t:this.instance_48}]},36).to({state:[{t:this.instance_49}]},5).to({state:[]},131).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({scaleX:0.25,scaleY:0.25,x:230,y:150},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:149,y:60},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:124,y:32},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:169,y:83},0).wait(2).to({scaleX:0.56,scaleY:0.56,x:175,y:89},0).wait(62).to({scaleX:0.5,scaleY:0.5,x:186,y:101},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:189,y:104},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:192,y:107},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:202,y:118},0).to({_off:true},17).wait(84).to({_off:false,y:85},0).wait(2).to({_off:true},36).wait(435));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(88).to({_off:false},0).to({_off:true,scaleY:0.95,x:273.2,y:23.2},4).wait(553));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(88).to({_off:false},4).to({regX:0.1,regY:0.1,scaleY:1,rotation:-15,x:273.3,y:116.3},2).to({rotation:-9.4,x:273.2,y:143.4},2).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({rotation:4.2,x:281.3},2).to({regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({regX:0.2,rotation:0.9,x:281.3,y:141.5},0).wait(9).to({regX:0.1,regY:0.1,rotation:-15,x:273.3,y:153.3},0).to({rotation:-9.4,x:273.2,y:143.4},2).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({regX:0.2,rotation:12.4,x:281.4,y:143.4},2).to({regX:0.1,regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({startPosition:0},0).wait(6).to({regY:0.1,rotation:-9.4,x:273.2,y:143.4},0).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({regX:0.2,rotation:12.4,x:281.4,y:143.4},2).to({regX:0.1,regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({regX:0.2,rotation:0.9,x:281.3,y:141.5},0).wait(1).to({regX:0.1,regY:0.1,rotation:-15,x:273.3,y:153.3},0).to({rotation:-9.4,x:273.2,y:143.4},2).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({regX:0.2,rotation:12.4,x:281.4,y:143.4},2).to({startPosition:0},2).to({regX:0.1,regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({regX:0.2,rotation:0.9,x:281.3,y:141.5},0).wait(1).to({regX:0.1,regY:0.1,rotation:-15,x:273.3,y:153.3},0).to({rotation:-9.4,x:273.2,y:143.4},2).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({regX:0.2,rotation:12.4,x:281.4,y:143.4},2).to({startPosition:0},2).to({regX:0.1,regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({regX:0.2,rotation:0.9,x:281.3,y:141.5},0).wait(1).to({regX:0.1,regY:0.1,rotation:-15,x:273.3,y:153.3},0).to({rotation:-9.4,x:273.2,y:143.4},2).wait(1).to({rotation:-3,x:273.3,y:143.3},0).to({regX:0.2,rotation:12.4,x:281.4,y:143.4},2).to({regX:0.1,regY:0.2,rotation:9.7,x:281.2,y:153.4},2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},2).wait(473));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(210).to({_off:false},0).to({_off:true,x:-103.8},5).wait(430));

	// розовый фон
	this.instance_50 = new lib.Tween9("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(277.5,421.9,1,1.959,0,0,0,0,0.1);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(88).to({_off:false},0).to({scaleY:1.78,y:397.5},1).to({y:209.6},7).wait(1).to({scaleY:2.38,y:209.5},0).wait(1).to({scaleY:2.75},0).wait(1).to({regY:0.3,scaleY:4.37,y:200},0).wait(347).to({startPosition:0},0).to({scaleY:3.18,y:552.9},7).to({_off:true},1).wait(191));

	// ферб2
	this.instance_51 = new lib.Слой4();
	this.instance_51.parent = this;
	this.instance_51.setTransform(49,127.6,1,0.968,-15);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(31).to({_off:false},0).wait(1).to({rotation:-7.6,x:38.8,y:162.9},0).wait(1).to({scaleY:0.88,x:39.7,y:178.8},0).wait(1).to({scaleY:0.98,x:38.7,y:156.2},0).wait(27).to({rotation:-61.3,x:22.8,y:259},0).wait(1).to({rotation:-76.3,x:-12.2,y:282.3},0).wait(1).to({rotation:-106.3,x:6.2,y:318.6},0).wait(1).to({scaleY:0.98,rotation:-151.3,x:94.1,y:325.4},0).wait(1).to({rotation:-176,x:118.6,y:298.4},0).to({_off:true},1).wait(579));

	// ферб3
	this.instance_52 = new lib.furby_connect04u13802();
	this.instance_52.parent = this;
	this.instance_52.setTransform(339,66.5,0.484,0.484,7.2);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(30).to({_off:false},0).wait(1).to({x:358,y:109.5},0).wait(1).to({scaleY:0.4,x:355.9,y:145.5},0).wait(1).to({scaleY:0.48,x:357.9,y:129.7},0).wait(28).to({rotation:37.2,x:416.8,y:108.2},0).wait(1).to({rotation:67.2,x:507.6,y:119.1},0).wait(1).to({rotation:104.9,x:602.1,y:159.3},0).wait(1).to({rotation:128.7,x:659.4,y:196.1},0).wait(1).to({_off:true},2).wait(578));

	// Новинка 2018
	this.instance_53 = new lib.Новинка2018();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-122,68,1.611,1.611);
	this.instance_53._off = true;

	this.instance_54 = new lib.Tween3("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(286.5,65);
	this.instance_54._off = true;

	this.instance_55 = new lib.Tween4("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(-196.4,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_53}]},60).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},5).to({state:[]},1).wait(570));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(2).to({_off:false},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:91,y:46},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:115,y:49},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:139,y:51},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:88,y:46},0).wait(60).to({x:144},0).wait(1).to({x:158},0).to({_off:true},2).wait(576));
	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(69).to({_off:false},0).to({_off:true,x:-196.4},5).wait(571));

	// свет
	this.instance_56 = new lib.light_PNG14416();
	this.instance_56.parent = this;
	this.instance_56.setTransform(156,79,0.607,0.607);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:8.5,x:163.5,y:46.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.2,x:138.2,y:-44.2},0).wait(1).to({rotation:26.7,x:189.6,y:-66.5},0).wait(2).to({scaleX:1.95,scaleY:1.83,rotation:30.4,x:129.6,y:-308.4},0).wait(1).to({rotation:32.9,x:151.7,y:-314.1},0).wait(1).to({rotation:35.1,x:171.6,y:-318.5},0).wait(1).to({rotation:37,x:189.6,y:-321.7},0).wait(1).to({rotation:40,x:216.6,y:-325.3},0).wait(1).to({rotation:42,x:235,y:-327},0).wait(1).to({rotation:44.2,x:255.4,y:-328.1},0).wait(1).to({rotation:47.7,x:287.6,y:-328.2},0).wait(1).to({rotation:49.6,x:305.6,y:-327.4},0).wait(1).to({rotation:51.8,x:325.8,y:-325.8},0).wait(1).to({rotation:53.3,x:339.4,y:-324.3},0).wait(1).to({rotation:55.3,x:357.2,y:-321.8},0).wait(1).to({rotation:57.8,x:379.8,y:-317.7},0).wait(1).to({rotation:60.2,x:402.1,y:-312.6},0).wait(1).to({rotation:62.7,x:424.1,y:-306.6},0).wait(1).to({rotation:65.2,x:445.9,y:-299.7},0).wait(1).to({rotation:67.4,x:465.1,y:-292.6},0).wait(1).to({rotation:69.3,x:481.8,y:-285.8},0).wait(1).to({rotation:70.8,x:494.3,y:-280.2},0).wait(1).to({rotation:73.1,x:513,y:-271.2},0).wait(1).to({rotation:75.1,x:529.3,y:-262.6},0).wait(1).to({rotation:77.1,x:545.3,y:-253.4},0).wait(1).to({rotation:78.8,x:558.7,y:-245.1},0).wait(1).to({rotation:82.7,x:588.7,y:-224.4},0).wait(2).to({rotation:84.2,x:599.4,y:-216.2},0).wait(1).to({rotation:85.4,x:608.5,y:-208.9},0).wait(1).to({rotation:86.7,x:617.2,y:-201.6},0).wait(1).to({rotation:87.9,x:625.8,y:-194.2},0).wait(1).to({rotation:89.1,x:634.2,y:-186.5},0).wait(1).to({rotation:90.8,x:645.8,y:-175.4},0).wait(1).to({rotation:92.1,x:653.8,y:-167.3},0).wait(1).to({rotation:93.8,x:664.6,y:-155.8},0).wait(1).to({rotation:95.5,x:675.2,y:-143.8},0).wait(1).to({rotation:97.2,x:685.3,y:-131.7},0).wait(1).to({rotation:98.7,x:693.6,y:-121.2},0).wait(1).to({rotation:100.1,x:701.9,y:-110.2},0).wait(1).to({rotation:101.6,x:709.7,y:-99.2},0).wait(1).to({rotation:103,x:717.2,y:-88.1},0).wait(1).to({rotation:104.3,x:723.3,y:-78.5},0).wait(1).to({rotation:106,x:731.4,y:-65},0).wait(1).to({rotation:107.4,x:738.1,y:-53.3},0).wait(1).to({rotation:108.9,x:744.4,y:-41.4},0).wait(1).to({rotation:110.3,x:750.5,y:-29.4},0).wait(1).to({rotation:112,x:757.1,y:-15.1},0).wait(1).to({rotation:113.5,x:762.5,y:-2.8},0).wait(1).to({rotation:114.7,x:766.9,y:8},0).wait(1).to({rotation:116.2,x:771.7,y:20.5},0).wait(1).to({rotation:117.6,x:776.1,y:33.2},0).wait(1).to({rotation:119.1,x:780.3,y:45.9},0).wait(1).to({rotation:123.1,x:789.9,y:81.3},0).wait(1).to({rotation:124.8,x:793.3,y:96.7},0).wait(1).to({rotation:126,x:795.4,y:107.8},0).wait(1).to({rotation:127.4,x:797.6,y:121},0).wait(1).to({rotation:128.7,x:799.2,y:132.2},0).wait(1).to({rotation:130.2,x:800.9,y:145.8},0).wait(1).to({rotation:131.9,x:802.4,y:161.8},0).wait(1).to({rotation:134.6,x:803.7,y:186.7},0).wait(1).to({rotation:136.5,x:804,y:204.7},0).wait(1).to({rotation:138.3,x:803.7,y:220.7},0).wait(1).to({scaleX:1.25,scaleY:1.17,x:613.4,y:214.3},0).wait(1).to({scaleX:0.92,scaleY:0.86,x:524.7,y:211.2},0).wait(1).to({scaleX:0.36,scaleY:0.33,x:371.5,y:206},0).wait(1).to({scaleX:1.25,scaleY:1.17,x:613.4,y:214.3},0).to({_off:true},1).wait(576));

	// Layer 1
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#55BEE9","#0000FF"],[0,0.902],0,0,0,0,0,343.1).s().p("EgrWAfiMAAAg/DMBWtAAAMAAAA/Dg");
	this.shape_126.setTransform(277.5,200.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#005FEF","#0045DE"],[0,1],0,0,0,0,0,343.1).s().p("EgrWAfiMAAAg/DMBWtAAAMAAAA/Dg");
	this.shape_127.setTransform(277.5,200.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#0053FA","#001FA4"],[0,1],0,0,0,0,0,343.1).s().p("EgrWAfiMAAAg/DMBWtAAAMAAAA/Dg");
	this.shape_128.setTransform(277.5,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126}]}).to({state:[{t:this.shape_127}]},140).to({state:[{t:this.shape_128}]},308).to({state:[{t:this.shape_128}]},109).to({state:[{t:this.shape_128}]},87).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,199,555,403.6);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banner_atlas_.png", id:"banner_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;