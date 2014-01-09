
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
		var div = $('<span style="display: inline-block; font-size: '+fontSize+';">').appendTo('body');
		var words = this._originString.split('');
		var dotLength = getDotLength(div);
		var currentLength = [];
		var i=0;
		while(div.width()+(dotLength*3) <= this.elem.width() && i<words.length){
			div.append(words[i]);
			currentLength.push(words[i]);
			i++;
		}
		if(div.width()+(dotLength*3) > this.elem.width()){
			currentLength = currentLength.splice(0, (currentLength.length)-1);
		}
		var theString;
		if(i === words.length)
			theString = currentLength.join('');
		else
			theString = currentLength.join('') + '...';
		this.elem.html(theString);
		div.remove();
		return this.elem;
		function getDotLength(div){
			div.html('.');
			var length = div.width();
			div.html('');
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
