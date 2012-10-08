/*
	Author: OpenSourceAnonymous
	Desc: 	This is the main js file for the web application
*/


var Main = {
	init: function(){

		$('#qrHook').qrHook("this plugin is great");

	},
	resize:function(){
		Win.init();
	}
};

Main.init();
