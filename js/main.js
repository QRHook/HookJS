/*
	Author: OpenSourceAnonymous
	Desc: 	This is the main js file for the web application
*/


var Main = {
	qrHook:$('#qrHook'),

	getAddress1:function(){
		var address = $('#qrHookInputAddress1').val() ? $('#qrHookInputAddress1').val() + " ":"" + $('#qrHookInputAddress2').val();
		var str = "";
		if(address){
			str += "ADR:" + address + ";";
		}
		return str;
	},
	getCompany:function(){
		var company = $('#qrHookInputCompany').val();
		var str = "";
		if(company){
			str += "ORG:" + company + ";";
		}
		return str;
	},
	getEmail:function(){
		var email = $('#qrHookInputEmail').val();
		var str = "";
		if(email){
			str += "EMAIL:" + email + ";";
		}
		return str;
	},
	getMemo:function(){
		var memo = $('#qrHookInputMemo').val();
		var str = "";
		if(memo){
			str += "NOTE:" + memo + ";";
		}
		return str;
	},
	getName:function(){
		var name = $('#qrHookInputName').val();
		var str = "";
		if(name){
			str += "N:" + name + ";";
		}
		return str;
	},
	getPhoneNumber:function(){
		var phoneNumber = $('#qrHookInputPhoneNumber').val();
		var str = "";
		if(phoneNumber){
			str += "TEL:" + phoneNumber + ";";
		}
		return str;
	},
	getTitle:function(){ //Combine this with memo somehow
		var title = $('#qrHookInputTitle').val();
		var str = "";

		var memo = Main.getMemo();

		if(title){
			str += memo ? "" : "NOTE:" + title + ";";
		}
		return memo + str;
	},
	getWebsite:function(){
		var website = $('#qrHookWebsite').val();
		var str = "";
		if(website){
			str += "URL:" + website.replace(/:/,'\:') + ";";
		}
		return str;
	},
	init: function(){
		this.qrHook.qrHook('');

		$('#qrHookSelection > div').on('click',function(){
			var className = this.id.replace(/.*?_/,'');
			$('#qrHookBox').removeClass().addClass(className);
		});

		$('#qrHookInputEmailAddress').on('keyup',function(){
			var email = 'mailto:' + $(this).val();
			Main.qrHook.qrHook(email);
		});

		$('#qrHookInputURL').on('keyup',function(){
			var url = $(this).val();
			Main.qrHook.qrHook(url);
		});

		// This is for straight text
		$('#qrHookTextAreaText').on('keyup',function(){
			var text = $(this).val();
			Main.qrHook.qrHook(text);
		});

		// $('#qrHookInputName,#qrHookInputCompany,#qrHookInputTitle,#qrHookInputPhoneNumber,#qrHookInputEmail,#qrHookInputAddress1,#qrHookInputAddress2,#qrHookWebsite,#qrHookInputMemo').on('');

		$('#QRType_contactInformation .input-xlarge').on('keyup',function(){
			// Get MECARD or vCard
			var str = "";
			str += Main.getName();
			str += Main.getCompany();
			str += Main.getTitle();
			str += Main.getPhoneNumber();
			str += Main.getEmail();
			str += Main.getAddress1();
			str += Main.getWebsite();

			var cardType = $('#cardType').val();

			if(cardType == "MECARD"){
				str = "MECARD:" + str + ";";
			}
			else{
				str = "BEGIN:VCARD\n" + str.replace(/;/g,'\n') + "END:VCARD";
			}

			//alert($('#cardType').val() );

			Main.qrHook.qrHook(str);
		});

		$('#qrHookInputSMSPhoneNumber,#qrHookTextAreaSMSMessage').on('keyup',function(){
			//Add error correction here

			var str = "";

			str += "smsto:" + $('#qrHookInputSMSPhoneNumber').val();

			str += ":" + $('#qrHookTextAreaSMSMessage').val();

			Main.qrHook.qrHook(str);
		});

		$('#qrHookPhoneNumberOnly').on('keyup',function(){
			Main.qrHook.qrHook("tel:" + $(this).val());
		});

	},
	resize:function(){
		Win.init();
	}
};

Main.init();

$(window).on('resize',function(){
	Main.resize();
});
