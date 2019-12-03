//
function f1(){
	alert($('#d1').text());
}
function f2(){
	$('#d1').html('<p>Hello dojo</p>');
}
function f3(){
	$(':text').val('Kitty');
}
function f4(){
	$('#d1').attr('style','color:red;font-style:italic;');
}