
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
		var span = $('<span style="display: inline-block; white-space: nowrap; font-size: '+fontSize+'; visibility: hidden;">').appendTo('body');
		var words = this._originString.split('');
		var tail = this.options.tail || '...';
		var tailLength = getTailLength(span, tail);
		var currentLength = [];
		var i=0;
		while(span.width()+(tailLength) < this.elem.width() && i<words.length){
			span.append(words[i]);
			currentLength.push(words[i]);
			i++;
		}
		if(span.width()+(tailLength) > this.elem.width()){
			currentLength = currentLength.splice(0, (currentLength.length)-1);
		}
		var theString;
		if(i === words.length)
			theString = currentLength.join('');
		else
			theString = currentLength.join('') + tail;
		this.elem.html(theString);
		span.remove();
		return this.elem;

		function getTailLength(span, tail){
			span.html(tail);
			var length = span.width();
			span.html('');
			return length;
		}	
	}	
	
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
