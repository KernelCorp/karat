$(document).ready(function(){
	$(".private_office input.large").focus(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 -40px no-repeat"});
	});
	$(".private_office input.large").focusout(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 0 no-repeat"});
	});
	$(".private_office input.middle").focus(function(){
		$(this).css({"background": "url(images/input_middle.png) 0 -41px no-repeat"});
	});
	$(".private_office input.middle").focusout(function(){
		$(this).css({"background": "url(images/input_middle.png) 0 0 no-repeat;"});
	});
	$(".private_office input.small").focus(function(){
		$(this).css({"background": "url(images/input_small.png) 0 -41px no-repeat"});
	});
	$(".private_office input.small").focusout(function(){
		$(this).css({"background": "url(images/input_small.png) 0 0 no-repeat"});
	});	
})

