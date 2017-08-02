function f1(){
	var $obj = $('<div>猜对了，在这里<div>');
	$('body').append($obj);
}
function f2(){
	$('body').append('<div>猜对了，在这里<div>');
}
function f3(){
	$('ul').before('<p>hello jQuery</p>');
}
function f4(){
	$('ul li').empty();
}