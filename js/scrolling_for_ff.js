function GetCaretPosition(control) {  
	var caretPos = 0;
	if (control.selectionDirection == "forward")
		caretPos = control.selectionEnd;
	if (control.selectionDirection == "backward")
		caretPos = control.selectionStart;
    return caretPos  
}  


$(document).ready(function(){
	//if ($.browser.mozilla && $.browser.version == 2.0){
		wrap = document.getElementById("pre-wrap");
		pre = document.createElement("pre");
		wrap.appendChild(pre);
		$(".textarea").keydown(function(){
			obj = document.getElementById("add-info");
			clientHeight = obj.clientHeight;
			scrollHeight = obj.scrollHeight;
			caretPos = GetCaretPosition(obj);
			pre.innerHTML = obj.value.substring(0, caretPos);
			if (scrollHeight > clientHeight){
				
			}
		});
	//
});


/*function doScroll(el) // ���� id textarea, ���� ��� ������
{
	var obj = (typeof el == "string" ? document.getElementById(el) : el);
	var clientWidth = obj.clientWidth;
	var scrollWidth = obj.scrollWidth;

	if ( g_focused == obj.id && scrollWidth > clientWidth ){
		var caret = getCaretPositions(obj); // ��� ������� ������� �� codeproject, ������ �������� � ����� "return {start: insertionS, end: insertionE};", ���� ��� ��� �� ���������. ������, � ������ FF ��� ������, �� ��� �� �����...
		var caretPos = caret.start ��� caret.end; // ����� ��� ���������. ���� ������ ���������� ������ �� start==end, �� ���� �������� - �� ���� ��������, �.�. ����� �������� ������ ������, � ����� ��������.
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