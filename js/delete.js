(function() {
	var $del = $("a.delete");
	
	$del.on("click", function(e) {
		e.preventDefault();
		$(this).parents(".basket_elem").remove();
	});
}).call();
