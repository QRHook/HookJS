/*
	Author: OpenSourceAnonymous
	Desc: 	This is the main js file for the web application
*/


var Main = {
	init: function(){

		$('#qrHook').qrHook("this plugin is great");


		// $('#QRTypeSelect').on('change',function(){
		// 	// alert("It changed!!!");
		// 	// var target = $(evt.target);
		// 	// alert(target.id);
		// 	// alert(this.id);

			

		// });

	},
	resize:function(){
		Win.init();
	}
};

Main.init();

$(window).on('resize',function(){
	Main.resize();
});
