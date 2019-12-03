//验证账号录入
function valiAccount(){
	document.getElementById("txtAccount").className="txt";
	var account = document.getElementById("txtAccount").value;
	//定义正则表达式，用于验证
	var reg = /^[A-Za-z0-9]{1,10}$/;
	var error = reg.test(account);
	//判断验证结果
	var spanObj = document.getElementById("accountInfo");
	if(error){
		spanObj.innerHTML="";
		spanObj.className = "vali_success";
	}else{
		spanObj.innerHTML="10长度以内的字母，数字的组合";
		spanObj.className = "vali_fail";
	}
	//返回验证结果
	return error;
	
}
//验证电话号的录入
function valiPhone(){
	document.getElementById("txtPhone").className="txt";
	var phone = document.getElementById("txtPhone").value;
	//定义正则表达式
	var reg = /^\d{3}-\d{8}$/;
	var error = reg.test(phone);
	//判断验证结果
	var spanObj = document.getElementById("phoneInfo");
	if(error){
		spanObj.innerHTML="";
		spanObj.className="vali_success";
	}else{
		spanObj.innerHTML="形如：010-12345678";
		spanObj.className="vali_fail";
	}
	return error;
	
}
//校验所有的数据
function valiData(){
	//验证账号
	var r1 = valiAccount();
	//验证电话号码
	var r2 = valiPhone();
	//返回结果
	return r1 && r2;
}


