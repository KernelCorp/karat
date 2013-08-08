$(document).ready(function(){
	$(".private_office input.large").focus(function(){
		$(this).css({"background-image": "url(images/input-skin-focus.png)"});
	});
	$(".private_office input.large").focusout(function(){
		$(this).css({"background-image": "url(images/input-skin.png)"});
	});
	$(".private_office input.middle").focus(function(){
		$(this).css({"background-image": "url(images/input_middle_focus.png)"});
	});
	$(".private_office input.middle").focusout(function(){
		$(this).css({"background-image": "url(images/input_middle.png)"});
	});
	$(".private_office input.small").focus(function(){
		$(this).css({"background-image": "url(images/input_small_focus.png)"});
	});
	$(".private_office input.small").focusout(function(){
		$(this).css({"background-image": "url(images/input_small.png)"});
	});	
})

