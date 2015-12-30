function draw_pad_area(n) {
	//Draws the pad area in a grid of n by n divs to fill the container div
	//Each div has class "pixel" and "active" and id "(x,y)"
};

function reset_board() {
	//Resets the board and draws a new one

}

$(document).ready(function(){
	draw_pad_area(16);

	$("button.reset").click(function() {
		reset_board();
	});

	$("div.pixel").mouseover(function() {
		//change colour of the div
		$(this).toggleClass(active)
	})

});