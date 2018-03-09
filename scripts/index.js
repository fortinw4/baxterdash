
$(function(){

	var mask = '<span style="position:absolute; top:600; left:65%; padding: 0 60px 0 60px; background-color:black;"> 000-000-0000 </span>';

	$('.num').append(mask);
	$('.num').hover(function(){
		$(this).find('span').remove();
	}, function(){
		$(this).append(mask);
	});
})
