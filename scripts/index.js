
$(function(){

	var mask = '<span style="position:absolute; top:600; left:73.5%; padding: 0 25px 0 25px; background-color:black;"> 000-000-0000 </span>';

	$('.num').append(mask);
	$('.num').hover(function(){
		$(this).find('span').remove();
	}, function(){
		$(this).append(mask);
	});
})
