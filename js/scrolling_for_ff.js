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
		scrollTop = caretHeight - clientHeight;
		var delta = 0;			
		if (scrollTop > obj.scrollTop) 
			delta = caretHeight - obj.scrollTop + Math.round(clientHeight/2);
		else if ( caretHeight < obj.scrollTop ){
			delta = caretHeight - obj.scrollTop - Math.round(clientHeight/2);
		}
		delta = Math.max(Math.min(scrollHeight - obj.scrollTop - clientHeight, delta), -obj.scrollTop);		
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