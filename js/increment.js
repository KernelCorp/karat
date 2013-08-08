(function() {
	var $inc = $(".updown_cursor.up"),
		$dec = $(".updown_cursor.down");
	
	$inc.on("click", function() {
		$input = $(this).parent(".arrows").siblings("input.count");
		$input.val(parseInt($input.val()) + 1);
	});

	$dec.on("click", function() {
		$input = $(this).parent(".arrows").siblings("input.count");
		var val = parseInt($input.val()) - 1;
		if(val > 0)
			$input.val(parseInt(val));
	});
}).call();
