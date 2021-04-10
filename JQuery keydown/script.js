$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37: /*Left arrow key pressed*/
				$('img').animate({left: "-=24px"}, 'fast');
				break;
			case 38: /*Up arrow key pressed*/
				$('img').animate({top: "-=24px"}, 'fast');
				break;
			case 39: /*Right arrow key pressed*/
				$('img').animate({left: "+=24px"}, 'fast');
				break;
			case 40: /*Down arrow key pressed*/
				$('img').animate({top: "+=24px"}, 'fast');
				break;
		}
	});
});