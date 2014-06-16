
;(function ($, window, document, undefined) {
	
	var pluginName = 'Dotter',
		defaults = {};
	function Dotter(elem, options){
		this.elem = elem;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
		this.execute();
		
	}
	
	Dotter.prototype.init = function(){
	    this._originString = this.elem.text().toString();
	};	
    
    Dotter.prototype.execute = function(){
		var fontSize = this.elem.css('font-size');
		//var span = $('<span style="display: inline-block; white-space: nowrap; font-size: '+fontSize+'; ">').appendTo('body');
		var span = this.produceVirtualElement();
		var words = this._originString.split('');
		var tail = this.options.tail || '...';
		var tailLength = getTailLength(span, tail);
		var currentLength = [];
		var i=0;

		if (this.options.multiLine) {

		} else {
			while(span.width()+(tailLength) < this.elem.width() && i<words.length){
				span.append(words[i]);
				currentLength.push(words[i]);
				i++;
			}
			if(span.width()+(tailLength) > this.elem.width()){
				currentLength = currentLength.splice(0, (currentLength.length)-1);
			}
		}
		
		var theString;
		if(i === words.length)
			theString = currentLength.join('');
		else
			theString = currentLength.join('') + tail;
		this.elem.html(theString);
		//span.remove();
		return this.elem;

		function getTailLength(span, tail){
			span.html(tail);
			var length = span.width();
			span.html('');
			return length;
		}	
	}

	Dotter.prototype.produceVirtualElement = function () {
		var virtualElement = $('<' + this.elem[0].nodeName.toString() + '>').appendTo('body');
		virtualElement.attr('style', this.elem.attr('style')).attr('class', this.elem.attr('class'));
		if (this.options.multiLine) {
			virtualElement.css({height: 'auto', display: 'inline-block'});
		} else {
			virtualElement.css({width: 'auto', display: 'inline-block'});
		}
		
		return virtualElement;
	};
	
	$.fn[pluginName] = function ( options ) {
		var self = this;
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Dotter( self, options ));
			}
			else{
			    $.data(this, 'plugin_' + pluginName).execute();
			}
		});
	};
	
})(jQuery, window, document);
