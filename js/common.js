$(window).scroll(function() {
	var st = $(this).scrollTop();
	var cssValues = {
		'-webkit-transform' : 'translate(0%, ' + st + '%)',
		'-ms-transform' : 'translate(0%, ' + st + '%)',
		'-o-transform' : 'translate(0%, ' + st + '%)',
		'transform' : 'translate(0%, ' + st + '%)'
};

	$('.header_text-').css(cssValues);
	$('.sect_2 img').css({
		'-webkit-transform' : 'translate(0%, -' + st/20 + '%)',
		'-ms-transform' : 'translate(0%, -' + st/20 + '%)',
		'-o-transform' : 'translate(0%, -' + st/20 + '%)',
		'transform' : 'translate(0%, -' + st/20 + '%)' 
	});	
});