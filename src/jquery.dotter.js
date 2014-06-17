
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
		var virtualElement = this.produceVirtualElement();
		var words = this._originString.split('');
		var tail = this.options.tail || '...';
		var tailLength = getTailLength(virtualElement, tail);
		var currentLength = [];
		var i=0;

		if (this.options.multiLine) {
			while (virtualElement.height() < this.elem.height() && i < words.length) {
				virtualElement.html(virtualElement.text().replace(tail, ''));
				virtualElement.append(words[i] + tail);
				currentLength.push(words[i]);
				i++;
			}
			
			if(virtualElement.height() > this.elem.height()){
				currentLength = currentLength.splice(0, (currentLength.length)-1);
			}
		} else {
			while(virtualElement.width()+(tailLength) < this.elem.width() && i<words.length){
				virtualElement.append(words[i]);
				currentLength.push(words[i]);
				i++;
			}
			if(virtualElement.width()+(tailLength) > this.elem.width()){
				currentLength = currentLength.splice(0, (currentLength.length)-1);
			}
		}
		
		var theString;
		if(i === words.length)
			theString = currentLength.join('');
		else
			theString = currentLength.join('') + tail;
		this.elem.html(theString);
		virtualElement.remove();
		return this.elem;

		function getTailLength(virtualElement, tail){
			virtualElement.html(tail);
			var length = virtualElement.width();
			virtualElement.html('');
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
