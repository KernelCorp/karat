function GetCaretPosition(control) {  	
    return control.selectionEnd 
}  

function onScroll(){
	
	obj = document.getElementById("add-info");
	clientHeight = obj.clientHeight;
	scrollHeight = obj.scrollHeight;
	if (scrollHeight > clientHeight){									
		caretPos = GetCaretPosition(obj);
		pre.innerHTML = obj.value.substring(0, caretPos);
		caretHeight = pre.offsetHeight;
		console.log(pre.innerHTML);	
		scrollTop = caretHeight - clientHeight;
		var delta = 0;
					
		//console.log(caretPos);					
		//console.log(obj.scrollTop);			
		//console.log(scrollTop);			
		if (scrollTop > obj.scrollTop) 
			delta = caretHeight - obj.scrollTop + Math.round(clientHeight/2);
		else if ( caretHeight < obj.scrollTop ){
			delta = caretHeight - obj.scrollTop - Math.round(clientHeight/2);
		}
		delta = Math.max(Math.min(scrollHeight - obj.scrollTop - clientHeight, delta), -obj.scrollTop);
		//console.log(delta);
		if ( delta ){
			obj.scrollTop += delta;
		}
	}
}

$(document).ready(function(){
	if ($.browser.mozilla && $.browser.version == 2.0){
		wrap = document.getElementById("pre-wrap");
		pre = document.createElement("pre");
		wrap.appendChild(pre);
		$(".textarea").keydown(onScroll);		
		$(".textarea").scroll(onScroll);
		$(".textarea").select(onScroll);
		
	}
});


/*function doScroll(el) // либо id textarea, либо сам объект
{
	var obj = (typeof el == "string" ? document.getElementById(el) : el);
	var clientWidth = obj.clientWidth;
	var scrollWidth = obj.scrollWidth;

	if ( g_focused == obj.id && scrollWidth > clientWidth ){
		var caret = getCaretPositions(obj); // Эту функцию поищите на codeproject, только добавьте в конце "return {start: insertionS, end: insertionE};", если там еще не поправили. Вообще, в случае FF все просто, но тем не менее...
		var caretPos = caret.start или caret.end; // здесь еще недоделал. Если просто перемещать курсор то start==end, но если выделять - то надо выбирать, т.к. можно выделять справа налево, а можно наоборот.
		g_pre.innerHTML = obj.value.substring(0, caretPos).replace(/.+\n/g, "");

		var caretWidth = pre.offsetWidth;
		var scrollLeft = caretWidth - clientWidth;
		var delta = 0;
		if ( scrollLeft > obj.scrollLeft ){
			delta = scrollLeft - obj.scrollLeft + Math.round(clientWidth/2);
		}
		else if ( caretWidth < obj.scrollLeft ){
			delta = caretWidth - obj.scrollLeft - 300;//Math.round(clientWidth/2);
		}
		delta = Math.max(Math.min(scrollWidth - obj.scrollLeft - clientWidth, delta), -obj.scrollLeft);
		if ( delta ){
			obj.scrollLeft += delta;
		}

		g_keydown_timer = null;
	}
	else
	{
		obj.scrollLeft = 0;
	}
}*/