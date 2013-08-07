$(document).ready(function(){
	$(".content input").focus(function(){
		$(this).css({"background-image": "url(images/input-skin-focus.png)"});
	});
	$(".content input").focusout(function(){
		$(this).css({"background-image": "url(images/input-skin.png)"});
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