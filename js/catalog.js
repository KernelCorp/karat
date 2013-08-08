// Iterate over each select element
$('.dropdowns_wrapper select').each(function() {
	// Cache the number of options
	var $this = $(this),
	numberOfOptions = $(this).children('option').length;

	// Hides the select element
	$this.addClass('s-hidden');

	// Wrap the select element in a div
	$this.wrap('<div class="select"></div>');

	// Insert a styled div to sit over the top of the hidden select element
	$this.after('<div class="styledSelect"></div>');

	// Cache the styled div
	var $styledSelect = $this.next('div.styledSelect');
	
	// Try to do
	$styledSelect.append('<p></p>')
	$styledSelect.append('<div class="corner"></div>');
	$styledSelect.append('<div class="selectArrow"></div>');

	var $styledText = $styledSelect.children('p');

	// Show the first select option in the styled div
	$styledText.text($this.children('option').eq(0).text());

	// Insert an unordered list after the styled div and also cache the list
	var $list = $('<ul/>', {
		'class': 'options'
	}).insertAfter($styledSelect);

	// Insert a list item into the unordered list for each select option
	for (var i = 0; i < numberOfOptions; i++) {
		$('<li/>', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}
	
	// Cache the list items
	var $listItems = $list.children('li');

	// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
	$styledSelect.click(function(e) {
		e.stopPropagation();
		$('div.styledSelect.active').each(function() {
			$(this).removeClass('active').next('ul.options').hide();	
		});
		$(this).toggleClass('active').next('ul.options').toggle();
	});

	// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
	// Updates the select element to have the value of the equivalent option
	$listItems.click(function(e) {
		e.stopPropagation();
		$styledText.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
		/* alert($this.val()); Uncomment this for demonstration! */
	});

// Hides the unordered list when clicking outside of it
	$(document).click(function() {
		$styledSelect.removeClass('active');
		$list.hide();
	});

});

var num = new NumberFormat();
num.setSeparators(true, ' ');
num.setPlaces('0', false);

$("#price_slider").slider({
	max: 99000000,
	min: 0,
	range: true,
	step: 100000,
	values: [0, 99000000],
	slide: function(e, ui) {
		num.setNumber(ui.values[0]);
		$('#price_low').val(num.toFormatted());
		num.setNumber(ui.values[1]);
		$('#price_high').val(num.toFormatted());
	}
});

var $pl = $("#price_low"),
	$ph = $("#price_high");

$("#price_low, #price_high").on("focusout", function() {
	var focuspocus = function() {
		var pl = parseInt($pl.val().replace(/ /g,'')),
			ph = parseInt($ph.val().replace(/ /g,''));
		$("#price_slider").slider("values", 0, pl);
		$("#price_slider").slider("values", 1, ph);
		num.setNumber($pl.val());
		$pl.val(num.toFormatted());
		num.setNumber($ph.val());
		$ph.val(num.toFormatted());
	};
	setTimeout(focuspocus, 200);	
})
