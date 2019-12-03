//购物车减少点击事件
function decrease(btnObj){
	var nodes = btnObj.parentNode.childNodes;
	//价格
	var nodes1 = btnObj.parentNode.previousSibling;
	//价格小计
	var nodes2 = btnObj.parentNode.nextSibling;
	
	var newCount;
	for(var i=0;i<nodes.length;i++){
		if(nodes[i].nodeName=="INPUT" && nodes[i].type=="text"){
			var oldCount = parseInt(nodes[i].value);
			newCount = oldCount-1;
			if(oldCount==0){
				newCount = 0;
			}
			nodes[i].value=newCount;
		}
	}
	nodes2.innerHTML=parseInt(nodes1.innerHTML)*newCount;
	//循环求和
	var trnodes = document.getElementsByTagName("tr");
	var tdnodes;
	var sum = 0;
	var sum1;
	for(var i=1;i<=trnodes.length-1;i++){
		if(i<=trnodes.length-2){
			tdnodes = trnodes[i].getElementsByTagName("td")[3];
			sum1 = parseInt(tdnodes.innerHTML);
			sum=sum+sum1;
		}
		if(i==trnodes.length-1){
			tdnodes = trnodes[i].getElementsByTagName("td")[1];
			tdnodes.innerHTML=sum;
		}
	}
	
}

//购物车增加点击事件
function increase(btnObj){
	var nodes = btnObj.parentNode.childNodes;
	//价格
	var nodes1 = btnObj.parentNode.previousSibling;
	//价格小计
	var nodes2 = btnObj.parentNode.nextSibling
	var newCount;
	for(var i=0;i<nodes.length;i++){
		if(nodes[i].nodeName=="INPUT" && nodes[i].type=="text"){
			var oldCount = parseInt(nodes[i].value);
			newCount = oldCount+1;
			nodes[i].value=newCount;
		}
	}
	nodes2.innerHTML=parseInt(nodes1.innerHTML)*newCount;
	//循环求和
	var trnodes = document.getElementsByTagName("tr");
	var tdnodes;
	var sum = 0;
	var sum1;
	for(var i=1;i<=trnodes.length-1;i++){
		if(i<=trnodes.length-2){
			tdnodes = trnodes[i].getElementsByTagName("td")[3];
			sum1 = parseInt(tdnodes.innerHTML);
			sum=sum+sum1;
		}
		if(i==trnodes.length-1){
			tdnodes = trnodes[i].getElementsByTagName("td")[1];
			tdnodes.innerHTML=sum;
		}
	}
	
}
//页面动态图添加新元素
function addyuansu(){
	//得到div1
	var div1 = document.getElementById("div1");
	//在前面创建节点
	var newnode1 = document.createElement("input");
	newnode1.type="button";
	newnode1.value="new button";
	newnode1.onclick=function(){
		alert("Hello");
	}
	div1.insertBefore(newnode1, document.getElementById("add"));
	
	//在后面创建超极链接
	var newnode2 = document.createElement("a");
	newnode2.href="http://www.baidu.com";
	newnode2.target="_blank";
	newnode2.innerHTML="百度";
	div1.appendChild(newnode2);
	
}
//联动菜单
function classChanged(){
	//保存课程方向的二维数组
	var projectArray = new Array();
	projectArray[0]=["请选择"];
	projectArray[1]=["CoreJava","Oracle","JSP","JDBC"];
	projectArray[2]=["PS","CSS"];
	projectArray[3]=["PHP","Mysql","Jquery"];
	
	//得到方向想选择索引和对应的数组
	var i = document.getElementById("selClass").selectedIndex;
	var data = projectArray[i];
	//得到所选课程对象
	var selObj = document.getElementById("selProject");
	//删除原有数组
	while(selObj.childNodes.length>0){
		selObj.removeChild(selObj.lastChild);
	}
	//循环写入新的options
	for(var i=0;i<data.length;i++){
		var optionObj = document.createElement("option");
		optionObj.value=i;
		optionObj.innerHTML=data[i];
		selObj.appendChild(optionObj);
	}	
}
//联动菜单（HTML DOM）实现
function classChangedByHTMLDOM(){
	//保存课程方向的二维数组
	var projectArray = new Array();
	projectArray[0]=["请选择"];
	projectArray[1]=["CoreJava","Oracle","JSP","JDBC"];
	projectArray[2]=["PS","CSS"];
	projectArray[3]=["PHP","Mysql","Jquery"];
	
	var i = document.getElementById("selClass").selectedIndex;
	var data = projectArray[i];
	
	var selObj = document.getElementById("selProject");
	selObj.options.length=0;
	
	//循环添加新的元素
	for(var i=0;i<data.length;i++){
		var optionObj = new Option(data[i],i);
		selObj.options[i]=optionObj;
	}
	
}





	