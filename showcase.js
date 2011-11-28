var showcase_width;
var animation_time = 2000;

var next_slide = function() {
	$('#slide-reel').animate({left: '-=' + showcase_width, }, animation_time, function() {   //move the slide-reel to the left
		$('#slide-reel').css('padding-left', '+=' + showcase_width);   //pad the left of the slide-reel
		$('#slide-reel').append($('.slide-wrapper:first'));   //move the first slide to the end of the reel
	});
};

var previous_slide = function() { 
	$('#slide-reel').css('padding-left', '-=' + showcase_width);   //make some room on the left side of the slide-reel for an additional slide
	$('#slide-reel').prepend($('.slide-wrapper:last'));   //move the last slide to the beginning of the reel
	$('#slide-reel').animate({'padding-left': '+=' + showcase_width, }, animation_time);   //move the slide-reel to the right
};

$(document).ready(function() {

	showcase_width = $('#showcase').css('width');   //set the initial showcase width

	$('#slide-reel').css({
		'width': String($('.slide-wrapper').length) + '00%',  //set the slide reel width to n*100% for n slides
		//set some initial padding in case the user wants to click left first
		'left': '-' + showcase_width,
		'padding-left': showcase_width,
	});
	$('.slide-wrapper').css('width', showcase_width);   //make the slide-wrappers the same width as the showcase
	
	$(document).on('click', '.slide-button.right', next_slide);
	
	$(document).on('click', '.slide-button.left', previous_slide); 

	setInterval(next_slide, 10000);
});
	
//resize the slideshow
$(window).resize(function() {
	showcase_width = $('#showcase').css('width');	
	$('.slide-wrapper').css('width', showcase_width);   //update the slide-wrappers on resize
});