function f1(){
	$('#form1 input:disabled').css('border', '1px dotted red');
}
function f2(){
	$('#form1 input:enabled').css('border', '1px dotted red');
	$('#form1 input:enabled').attr('disabled', 'true');
}
function f3(){
	var length = $('#form2 input:checked').length;
	alert(length);
	alert($('#form2 input:checked').val());
}
function f4(){
	alert($('#form3 select option:selected').val());
	alert($('option:selected').val());
}