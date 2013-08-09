$(document).ready(function(){
	$(".feedback_form input.large").focus(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 -40px no-repeat"});
	});
	$(".feedback_form input.large").focusout(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 0 no-repeat"});
	});
	$(".feedback_form input.middle").focus(function(){
		$(this).css({"background":"url(images/input_middle.png) 0 -41px no-repeat"});
	});
	$(".feedback_form input.middle").focusout(function(){
		$(this).css({"background": "url(images/input_middle.png) 0 0 no-repeat"});
	});
	$(".feedback_form input.small").focus(function(){
		$(this).css({"background": "url(images/input_small.png) 0 -41px no-repeat"});
	});
	$(".feedback_form input.small").focusout(function(){
		$(this).css({"background": "url(images/input_small.png) 0 0 no-repeat"});
	});
	$("textarea.textarea-large").focus(function(){		
		$(".textarea-wrap").css({"background-position-y": "-181px"});
	});
	$("textarea.textarea-large").focusout(function(){
		$(".textarea-wrap").css({"background-position-y": "0"});		
	});
	$("input.submit").mousedown(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit-active.png)"});
	});
	$("input.submit").mouseup(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit-hover.png)"});
	});
	$("input.submit").mouseleave(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit.png)"});
	});
	$("input.submit").mouseenter(function(){		
		$(this).css({"background-image": "url(images/kontact-data-submit-hover.png)"});
	})
})
