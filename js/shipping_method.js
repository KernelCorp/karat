$(document).ready(function(){
	$(".content input.large").focus(function(){
		$(this).css({"background-image": "url(images/input-skin-focus.png)"});
	});
	$(".content input.large").focusout(function(){
		$(this).css({"background-image": "url(images/input-skin.png)"});
	});
	$(".content input.middle").focus(function(){
		$(this).css({"background-image": "url(images/input_middle_focus.png)"});
	});
	$(".content input.middle").focusout(function(){
		$(this).css({"background-image": "url(images/input_middle.png)"});
	});
	$(".content input.small").focus(function(){
		$(this).css({"background-image": "url(images/input_small_focus.png)"});
	});
	$(".content input.small").focusout(function(){
		$(this).css({"background-image": "url(images/input_small.png)"});
	});
	$("textarea.textarea").focus(function(){		
		$(".textarea-wrap").css({"background-position-y": "-100px"});
	});
	$("textarea.textarea").focusout(function(){
		$(".textarea-wrap").css({"background-position-y": "-1px"});		
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
