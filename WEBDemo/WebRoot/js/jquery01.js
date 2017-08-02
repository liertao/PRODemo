//传统方式
function f1(){
	var obj = document.getElementById("a1");
	alert(obj.innerHTML);
}
//jQuery方式
function f2(){
	//将原来的DOM封装为一个jquery对象
	var obj = $('#a1');
	alert(obj.html());
	
}
//
function f4(){
	$('#d1').css('font-size', '60px').css('font-style', 'italic');
}
//DOM转换为jQuery对象
function fa1(){
	var obj = document.getElementById("a3");
	var $obj = $(obj);
	alert($obj.html());
	
}
//jQuery转换为DOM对象
function fa2(){
	var $obj = $('#a2');
	var obj = $obj.get()[0];
	alert(obj.innerHTML);
}




