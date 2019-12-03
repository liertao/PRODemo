function f1(){
	$('table tr').css('background-color','#cccccc');
	$('table tr:first').css('background-color','red');
	$('tbody tr:eq(3)').css('background-color','yellow');
	$('tbody tr:eq(0)').css('background-color','yellow');
}
function f2(){
	$('tbody tr:even').css('background-color','#fff8dc');
	$('tbody tr:odd').css('background-color','yellow');
}
function f3(){
	$('tbody tr:eq(1) td:eq(1)').css('background-color','yellow').css('font-size', '30px');
}
function f4(){
	$('tbody tr:not(#tr2)').css('background-color','yellow');
}