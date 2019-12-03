//请求的工具函数
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

//选中行添加样式
function setRowClass(){
	var tbl = document.getElementById("ttab");
	for(var i=0;i<tbl.rows.length; i++){
		//鼠标经过时高亮
		tbl.rows[i].onmouseover = function(){
		}
		tbl.rows[i].onclick = function () {
			i = this.getElementsByTagName("td")[0].innerText;
			if(tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.remove("checked")
			}else{
				tbl.rows[i].classList.add("checked");
			}
        }
	}
	if(i=5){i=0}
}
//主界面加载数据
function loadData(){
	//加载数据
	var data = {};
	MAjax('POST', 'findItem', data, function(data){
		var obj = eval("("+ data +")");
		//根据权限信息，修改按钮的显示问题
		//admin有新增，修改，删除权限，dev只能修改，query只能查询，没有按钮
		//alert(obj.rolesList);
		cobutton(obj.rolesList);
		var html = '';
		for(var i=0; i<obj.root.length; i++){
			if(i%2==0){
				html+='<tr class="" name="tr">'+
					'<td style=text-align:center;width:5%;>'+obj.root[i].iid+'</td>'+
					'<td style=text-align:left;width:5%;display:none;>'+obj.root[i].id+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_name+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_comm+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_dev+'</td>'+
					'</tr>';
			}else{
				html+='<tr class="" name="tr" style="border:1px solid red;">'+
					'<td style=text-align:center;width:5%;>'+obj.root[i].iid+'</td>'+
					'<td style=text-align:left;width:5%;display:none;>'+obj.root[i].id+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_name+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_comm+'</td>'+
					'<td style=text-align:left;width:20%;>'+obj.root[i].item_dev+'</td>'+
					'</tr>';
			}
		}
		document.getElementById("tby").innerHTML= html;
		setRowClass();
	}, function(error){alert(error)});
}
//根据权限信息动态修改按钮的显示状态
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