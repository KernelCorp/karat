$(document).ready(function(){
	$(".content input").focus(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 -40px no-repeat"});
	});
	$(".content input").focusout(function(){
		$(this).css({"background": "url(images/input_background_long.png) 0 0 no-repeat;"});
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