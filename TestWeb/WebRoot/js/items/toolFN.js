// 请求的工具函数
function MAjax(type, url, data, success, failed){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveObject('Microsoft.XMLHTTP');
	}
	
	var random = Math.random();
	if(typeof data == 'object'){
		var str = '';
		for(var key in data){
			str += key + '=' +data[key] + '&';
		}
		data = str.replace(/&$/, '');
	}
	
	if(type.toUpperCase()=='GET'){
		if(data){
			xhr.open('GET', url + '?' +data, true);
		}else{
			xhr.open('GET', url + '?t='+random, true);
		}
		xhr.send();
	}else if(type.toUpperCase()=='POST'){
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				success(xhr.responseText);
			}else{
				if(failed){
					failed(xhr.status)
				}
			}
		}
	}
}
// 全选/取消全选
function setRowClass2(that){
	var tbl = document.getElementById("ttab");
	for(var i=0;i<tbl.rows.length; i++){
		if(i==0){// 取消标题选中
			continue;
		}
		if(that==1){// 全选
			if(!tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.add("checked")
			}
		}else if(that==2){// 全部取消选中
			if(tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.remove("checked")
			}
		}
	}
}
// 选中行添加样式
function setRowClass(){
	var tbl = document.getElementById("ttab");
	for(var i=0;i<tbl.rows.length; i++){
		// 鼠标经过时高亮
		tbl.rows[i].onmouseover = function(){
		}
		tbl.rows[i].onclick = function () {
			i = this.getElementsByTagName("td")[0].innerText;
			if(tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.remove("checked");
				// 全选 只要给某行取消样式，就撤销全选按钮
				var radi = document.getElementsByName("chose");
				for(var k=0;k<radi.length;k++){
					if(radi[k].checked){
						radi[k].checked = false;
					}
				}
			}else{
				tbl.rows[i].classList.add("checked");
				// 只要给某行添加选中样式，就需要消除取消全选
				var radi = document.getElementsByName("chose");
				for(var j=0;j<radi.length;j++){
					if(radi[j].checked){
						radi[j].checked = false;
					}
				}
			}
        }
	}
	if(i=5){i=0}
}
// 主界面加载数据
function loadData(params){
	// 加载数据
	if(params==undefined){
		params = {};
	}
	MAjax('POST', 'findItem', params, function(data){
		var obj = eval("("+ data +")");
		// 根据权限信息，修改按钮的显示问题
		// admin有新增，修改，删除权限，dev只能修改，query只能查询，没有按钮
		// alert(obj.rolesList);
		cobutton(obj.rolesList);
		var html = '';
		for(var i=0; i<obj.root.length; i++){
			if(i%2==0){
				html+='<tr class="" name="tr">'+
					'<td style=text-align:center;font-size:15px;width:4%;>'+obj.root[i].iid+'</td>'+
					'<td style=text-align:left;font-size:15px;width:5%;display:none;>'+obj.root[i].id+'</td>'+
					'<td style=text-align:left;font-size:15px;width:10%;>'+obj.root[i].item_name+'</td>'+
					'<td style=text-align:left;font-size:15px;width:20%;>'+obj.root[i].item_comm+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].item_dev+'</td>'+
					'<td style=text-align:center;font-size:15px;width:10%;>'+obj.root[i].item_plandate+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].item_status+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].test_status+'</td>'+
					'<td style=text-align:center;font-size:15px;width:8%;>'+obj.root[i].is_doc+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].create_user+'</td>'+
					'<td style=text-align:center;font-size:15px;width:10%;>'+obj.root[i].create_date+'</td>'+
					'</tr>';
			}else{
				html+='<tr class="" name="tr">'+
					'<td style=text-align:center;font-size:15px;width:4%;>'+obj.root[i].iid+'</td>'+
					'<td style=text-align:left;font-size:15px;width:5%;display:none;>'+obj.root[i].id+'</td>'+
					'<td style=text-align:left;font-size:15px;width:10%;>'+obj.root[i].item_name+'</td>'+
					'<td style=text-align:left;font-size:15px;width:20%;>'+obj.root[i].item_comm+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].item_dev+'</td>'+
					'<td style=text-align:center;font-size:15px;width:10%;>'+obj.root[i].item_plandate+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].item_status+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].test_status+'</td>'+
					'<td style=text-align:center;font-size:15px;width:8%;>'+obj.root[i].is_doc+'</td>'+
					'<td style=text-align:center;font-size:15px;width:6%;>'+obj.root[i].create_user+'</td>'+
					'<td style=text-align:center;font-size:15px;width:10%;>'+obj.root[i].create_date+'</td>'+
					'</tr>';
			}
		}
		document.getElementById("tby").innerHTML= html;
		setRowClass();
	}, function(error){alert(error)});
}
// 根据权限信息动态修改按钮的显示状态
function cobutton(str){
	if(str.indexOf("admin")<0){
		document.getElementById("button").style.display = 'none';
		document.getElementById("del").style.display = 'none';
	}
	if(str=="query"){
		document.getElementById("button").style.display = 'none';
		document.getElementById("modify").style.display = 'none';
		document.getElementById("del").style.display = 'none';
	}
}
// 给时间输入框设置当前时间
function setNow(){
	var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth() + 1)).slice(-2);
    var today = time.getFullYear() + "-" + (month) + "-" + (day);
	document.getElementById("add_plandate").value = today;
}
// 退出函数
function signout(){
	var r = confirm("确认退出系统？");
	if (r == true) {
	    window.location.href='/web/login.html';
	}
}
// 替换
function replaceAll(str,tar1, des1){
	while(str.indexOf(tar1) >0){
		str = str.replace(tar1, des1);
	}
	return str;
}