(function($){
	$.fn.qrcode = function(options) {
		// if options is string, 
		if( typeof options === 'string' ){
			options	= { text: options };
		}

		// set default values
		// typeNumber < 1 for automatic calculation
		options	= $.extend( {}, {
			width		: 280,
			height		: 280,
			typeNumber	: -1,
			correctLevel: QRErrorCorrectLevel.H, 
			background: "#ffffff",
			foreground: "#000000"
		}, options);
		
		var createDiv = function(){
			var qrcode	= new QRCode(options.typeNumber, options.correctLevel);
			qrcode.addData(options.text);
			qrcode.make();

			var moduleCount = qrcode.getModuleCount();
			
			var tileW	= Math.floor(options.width  / moduleCount);
			var tileH	= Math.floor(options.height / moduleCount);
			
			//var outputString = "<div id='" + options.elID  + "' class='qrCode qrSize" + tileW + "'>";

			var outputString = "";
			
			var row = 0;
			var col;
			
			var w, h;
			
			for(; row < moduleCount; row++){
				outputString += "<div class='qrRow'>";
				for(col = 0; col < moduleCount; col++){
					outputString += "<div class='" + (qrcode.isDark(row, col) ? 'qrBG1' : 'qrBG2') + "'></div>";
				}
				outputString += "</div>";
			}
			
			//outputString += "</div>";
			
			return {
				"output": outputString,
				"className":"qrCode qrSize" + tileW,
				"width": moduleCount * tileW,
				"height" : moduleCount * tileH
			};
		}

		return this.each(function(){
			var obj = createDiv();
			
			$(this).html(obj.output).addClass(obj.className).css({
				"width": obj.width,
				"height": obj.height
			});
			
		});
	};
	
})(jQuery);
