function secondMethod(){
	alert("Hello World in script file");
}
//转换函数：计算录入数据的平方
function getSquare(){
	var str = document.getElementById("txtData").value;
	if(isNaN(str))
		alert("请录入数值");
	else
		var data = parseFloat(str);
		var result = data*data;
		alert(result);
}
//猜数字游戏
function guessNumber(){
	//内置数字 
	var result = 10;
	var str = document.getElementById("txtNumber").value;
	
	if(isNaN(str))
		alert("请录入数字");
	else
		var data = parseFloat(str);
		var info = data>result?"大了":"小了";
		info = data == result?"猜对了":info;
		alert(info);
}
//求10的阶乘
function getJc10(){
	var a = 10;
	var result=1;
	for(var i=1;i<=10;i++){
		result*=i;
	}
	alert('10 的阶乘为'+result);
}
//过滤js字符串
function changeString(){
	var str = document.getElementById("txtString").value;
	var index = str.indexOf("js",0);
	while(index>-1){
		str = str.replace("js", "**");
		index = str.indexOf("js",index+1);
	}
	document.getElementById("txtString").value = str;
}
//过滤js字符串(采用正则表达式)
function changeStReg(){
	var str = document.getElementById("txtString").value;
	var result = str.match(/js/gi);
	document.getElementById("txtString").value=str.replace(/js/gi, "*");
	alert("共替换了"+result.length+"处");
}
//数组倒转
function operateArray(t){
	var array = document.getElementById("txtNumbers").value.split(",");
	
	switch(t){
	case 1:
		array.reverse();
		break;
	case 2:
		array.sort();
		break;
	case 3:
		array.sort(sortFuc);
		break;
	}
	alert(array.toString());
	
}
function sortFuc(a,b){
	return a-b;
}

//生成随机数
function getRandomNumber(){
	var max = parseFloat(document.getElementById("max").value);
	var min = parseFloat(document.getElementById("min").value);
	var ran = Math.random();
	alert(ran);
	var data = Math.floor(ran*(max-min))+min;
	alert(data);
}
//计算折旧价值
function zhejiuzj(){
	var jiazhi = parseFloat(document.getElementById("jiazhi").value);
	var zhejiu = parseFloat(document.getElementById("zhejiu").value);
	var nianxian = parseFloat(document.getElementById("nianxian").value);
	var data = 0;
	var s = "年限&nbsp;&nbsp;剩余价值</br>";
	for(var i=1;i<nianxian;i++){
		//data = Math.pow(jiazhi,(1-zhejiu)^nianxian);
		data = jiazhi*Math.pow((1-zhejiu),i);
		s+=i+"     "+data+"   "+data.toFixed(2)+"</br>";
	}
	document.getElementById("jieguo").innerHTML = s;
}
//计算器的js
function jisuan(){
	var array=null;
	var str = document.getElementById("result").value;
	if(str.indexOf("+")>-1){
		array = str.split("+");
		if(array.length>2){
			alert("请每次输入两个数进行运算");
			return;
		}
		var data = parseFloat(array[0])+parseFloat(array[1]);
	}else if(str.indexOf("-")>-1){
		array = str.split("-");
		if(array.length>2){
			alert("请每次输入两个数进行运算");
			return;
		}
		var data = parseFloat(array[0])-parseFloat(array[1]);
	}else if(str.indexOf("*")>-1){
		array = str.split("*");
		if(array.length>2){
			alert("请每次输入两个数进行运算");
			return;
		}
		var data = parseFloat(array[0])*parseFloat(array[1]);
	}else if(str.indexOf("÷")>-1){
		array = str.split("÷");
		if(array.length>2){
			alert("请每次输入两个数进行运算");
			return;
		}
		
		var data = parseFloat(array[0])/parseFloat(array[1]);
	}

	document.getElementById("result").value=data;
}
//获得按钮数值
function an1(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi1").value);
	}else{
		s+=document.getElementById("shuzi1").value;
		document.getElementById("result").value=s;
	}
}
function an2(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi2").value);
	}else{
		s+=document.getElementById("shuzi2").value;
		document.getElementById("result").value=s;
	}
}
function an3(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi3").value);
	}else{
		s+=document.getElementById("shuzi3").value;
		document.getElementById("result").value=s;
	}
}
function an4(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi4").value);
	}else{
		s+=document.getElementById("shuzi4").value;
		document.getElementById("result").value=s;
	}
}
function an5(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi5").value);
	}else{
		s+=document.getElementById("shuzi5").value;
		document.getElementById("result").value=s;
	}
}
function an6(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi6").value);
	}else{
		s+=document.getElementById("shuzi6").value;
		document.getElementById("result").value=s;
	}
}
function an7(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi7").value);
	}else{
		s+=document.getElementById("shuzi7").value;
		document.getElementById("result").value=s;
	}
}
function an8(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi8").value);
	}else{
		s+=document.getElementById("shuzi8").value;
		document.getElementById("result").value=s;
	}
}
function an9(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi9").value);
	}else{
		s+=document.getElementById("shuzi9").value;
		document.getElementById("result").value=s;
	}
}
function an0(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("shuzi0").value);
	}else{
		s+=document.getElementById("shuzi0").value;
		document.getElementById("result").value=s;
	}
}
function an11(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("fuhao1").value);
	}else{
		s+=document.getElementById("fuhao1").value;
		document.getElementById("result").value=s;
	}
}
function an12(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("fuhao2").value);
	}else{
		s+=document.getElementById("fuhao2").value;
		document.getElementById("result").value=s;
	}
}
function an13(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("fuhao3").value);
	}else{
		s+=document.getElementById("fuhao3").value;
		document.getElementById("result").value=s;
	}
}
function an14(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=parseFloat(document.getElementById("fuhao4").value);
	}else{
		s+=document.getElementById("fuhao4").value;
		document.getElementById("result").value=s;
	}
}
function an20(){
	var s = document.getElementById("result").value;
	if(null==s||""==s){
		document.getElementById("result").value=document.getElementById("dian").value;
	}else{
		s+=document.getElementById("dian").value;
		document.getElementById("result").value=s;
	}
}
function chongzhi(){
	document.getElementById("result").value="";
}

