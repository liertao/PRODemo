//验证名字
function validateUserName(){
	var name = document.getElementById("txtName").value;
	var reg=/^[a-zA-Z0-9]{3,6}$/;
	var isRight = reg.test(name);
	if(!isRight){
		alert("用户名录入错误");
	}
}
//验证电话号
function validateNumber(){
	var phone = document.getElementById("txtNumber").value;
	var reg = /^\d{6}$/;
	var isRight = reg.test(phone);
	if(!isRight){
		alert("电话号录入错误");
	}
}
//时间段的查询
function getRangeDays(days){
	//得到当前日期
	var end = new Date();
	var endString = end.toLocaleDateString();
	//修改日期
	end.setDate(end.getDate()-days+1);
	//显示日期
	var s= "开始日期为："+end.toLocaleDateString()+"\n";
	s+="结束日期为："+endString;
	alert(s);
}
//计算平方或者加法
function myMethod(){
	if(arguments.length==1){
		//计算平方
		var n = parseInt(arguments[0]);
		alert(n+"的平方为"+n*n);
	}else if(arguments.length==2){
		var n = parseInt(arguments[0]);
		var m = parseInt(arguments[1]);
		var result = m+n;
		alert(n+"与"+m+"的和为："+result);
	}
}
//实现数组的排序
function sortArray(){
	var array = [34,24,14,56,43];
	//使用Finction对象
	array.sort(new Function("a","b","return a-b;"));
	alert(array.toString());
	//使用匿名函数
	array.sort(function(a,b){return b-a;});
	alert(array.toString());
}
//简单计算器功能
function simpleCal(str){
	if(str=="="){
		var result = eval(document.getElementById("txtData").value);
		document.getElementById("txtData").value=result;
	}else{
		var s = document.getElementById("txtData").value;
		document.getElementById("txtData").value=s+str; 
	}
}
//模拟删除按钮
function Fucdelete(){
	var result = confirm("确定要删除吗？");
	return result;
}



