// ����Ĺ��ߺ���
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
// ȫѡ/ȡ��ȫѡ
function setRowClass2(that){
	var tbl = document.getElementById("ttab");
	for(var i=0;i<tbl.rows.length; i++){
		if(i==0){// ȡ������ѡ��
			continue;
		}
		if(that==1){// ȫѡ
			if(!tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.add("checked")
			}
		}else if(that==2){// ȫ��ȡ��ѡ��
			if(tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.remove("checked")
			}
		}
	}
}
// ѡ���������ʽ
function setRowClass(){
	var tbl = document.getElementById("ttab");
	for(var i=0;i<tbl.rows.length; i++){
		// ��꾭��ʱ����
		tbl.rows[i].onmouseover = function(){
		}
		tbl.rows[i].onclick = function () {
			i = this.getElementsByTagName("td")[0].innerText;
			if(tbl.rows[i].classList.contains("checked")){
				tbl.rows[i].classList.remove("checked");
				// ȫѡ ֻҪ��ĳ��ȡ����ʽ���ͳ���ȫѡ��ť
				var radi = document.getElementsByName("chose");
				for(var k=0;k<radi.length;k++){
					if(radi[k].checked){
						radi[k].checked = false;
					}
				}
			}else{
				tbl.rows[i].classList.add("checked");
				// ֻҪ��ĳ�����ѡ����ʽ������Ҫ����ȡ��ȫѡ
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
// �������������
function loadData(params){
	// ��������
	if(params==undefined){
		params = {};
	}
	MAjax('POST', 'findItem', params, function(data){
		var obj = eval("("+ data +")");
		// ����Ȩ����Ϣ���޸İ�ť����ʾ����
		// admin���������޸ģ�ɾ��Ȩ�ޣ�devֻ���޸ģ�queryֻ�ܲ�ѯ��û�а�ť
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
// ����Ȩ����Ϣ��̬�޸İ�ť����ʾ״̬
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
// ��ʱ����������õ�ǰʱ��
function setNow(){
	var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth() + 1)).slice(-2);
    var today = time.getFullYear() + "-" + (month) + "-" + (day);
	document.getElementById("add_plandate").value = today;
}
// �˳�����
function signout(){
	var r = confirm("ȷ���˳�ϵͳ��");
	if (r == true) {
	    window.location.href='/web/login.html';
	}
}
// �滻
function replaceAll(str,tar1, des1){
	while(str.indexOf(tar1) >0){
		str = str.replace(tar1, des1);
	}
	return str;
}