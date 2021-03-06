$(document).ready(function(){
	$(".content input.large").focus(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 -40px no-repeat"});
	});
	$(".content input.large").focusout(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 0 no-repeat"});
	});
	$(".content input.middle").focus(function(){
		$(this).css({"background":"url(images/input_middle.png) 0 -41px no-repeat"});
	});
	$(".content input.middle").focusout(function(){
		$(this).css({"background": "url(images/input_middle.png) 0 0 no-repeat"});
	});
	$(".content input.small").focus(function(){
		$(this).css({"background": "url(images/input_small.png) 0 -41px no-repeat"});
	});
	$(".content input.small").focusout(function(){
		$(this).css({"background": "url(images/input_small.png) 0 0 no-repeat"});
	});
	$("textarea.textarea").focus(function(){		
		$(".textarea-wrap").css({"background-position-y": "-106px"});
	});
	$("textarea.textarea").focusout(function(){
		$(".textarea-wrap").css({"background-position-y": "0"});		
	});
	$("button.submit").mousedown(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit-active.png)"});
	});
	$("button.submit").mouseup(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit-hover.png)"});
	});
	$("button.submit").mouseleave(function(){
		$(this).css({"background-image": "url(images/kontact-data-submit.png)"});
	});
	$("button.submit").mouseenter(function(){		
		$(this).css({"background-image": "url(images/kontact-data-submit-hover.png)"});
	})
})
