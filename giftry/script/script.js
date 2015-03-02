window.onload = function() {
	$('.image').hover(function() {
		$(".hover", this).toggle();
	});
	
	$('.add').click(function() {
		$(this).next().slideToggle(100);
	});
	
	$('.wish_list a').click(function() {
		$(this).parent().parent().slideUp(100);
	});
}