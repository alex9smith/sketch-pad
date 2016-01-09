function draw_pad_area(n) {
	//Draws the pad area in a grid of n by n divs to fill the container div
	//Each div has class "pixel" and "active" and id "(x,y)"
	n = n-1;
	var pixelSize = 500 / n;
	for (x=0; x < n; x++) {
		//$('.board-container').append('<div class="pixel"></div>');
		for (y=0; y < n; y++) {
			$('<div>').addClass('pixel').css({'width': pixelSize, 'padding-bottom': pixelSize}).appendTo('.board-container');
		};
	};

	//This makes one extra div, so remove the last one
	$('div.pixel:last').remove();

	//If n is greater than 17, then remove the next last 3 as well.

	if (n > 16) {
		$('div.pixel:last').remove();
		$('div.pixel:last').remove();
		$('div.pixel:last').remove();
	}
};

function reset_board() {
	//Resets the board and draws a new one
	$('div.pixel').remove();

	rows = $('input.number-rows').val();
	rows = parseInt(rows);

	draw_pad_area(rows);

	$("div.pixel").mouseover(function() {
		//change colour of the div
		$(this).addClass('active');	
	});
}

$(document).ready(function(){
	draw_pad_area(15);

	$("button.reset").click(function() {
		reset_board();
	});

	$("div.pixel").mouseover(function() {
		//change colour of the div
		$(this).addClass('active');
	})

});