//新增窗口鼠标事件 鼠标事件
var isDown = false;
function mouseDown(obj,e){
	//点击时添加阴影效果
	document.getElementById("twoBox").style.boxShadow="2px 2px 10px red";
	objX = twoBox.style.left;
	objY = twoBox.style.top;
	mouseX = e.clientX;
	mouseY = e.clientY;
	isDown = true;
}
function mouseMove(e){
	var div = document.getElementById("twoBox");
	var x = e.clientX;
	var y = e.clientY;
	//alert(x);
	if(isDown){
		if(parseInt(twoBox.style.left)<=550 && parseInt(twoBox.style.left)>=0){
			div.style.left = parseInt(objX)+parseInt(x)-parseInt(mouseX)+"px";
		}else if(parseInt(twoBox.style.left)>550){
			div.style.left = "550px";
		}else{
			div.style.left = "0";
		}
		if(parseInt(twoBox.style.top)<=350 && parseInt(twoBox.style.top)>=0){
			div.style.top = parseInt(objY)+parseInt(y)-parseInt(mouseY)+"px";
		}else if(parseInt(twoBox.style.top)>350){
			div.style.top = "350px";
		}else{
			div.style.top = "0";
		}
	}
}
function mouseUp(e){
	if(isDown){
		var x = e.clientX;
		var y = e.clientY;
		var div = document.getElementById("twoBox");
		div.style.left = parseInt(objX)+parseInt(x)-parseInt(mouseX)+"px";
		div.style.top = parseInt(objY)+parseInt(y)-parseInt(mouseY)+"px";
		mouseX = x;
		mouseY = y;
		twoBox.style.cursor="default";
		isDown = false;
		
	}
}

//修改窗 鼠标事件
function mouseDownM(obj,e){
	//点击时添加阴影效果
	document.getElementById("thrBox").style.boxShadow="2px 2px 10px red";
	objX = thrBox.style.left;
	objY = thrBox.style.top;
	mouseX = e.clientX;
	mouseY = e.clientY;
	isDown = true;
}
function mouseMoveM(e){
	var div = document.getElementById("thrBox");
	var x = e.clientX;
	var y = e.clientY;
	if(isDown){
		if(parseInt(thrBox.style.left)<=550 && parseInt(thrBox.style.left)>=0){
			div.style.left = parseInt(objX)+parseInt(x)-parseInt(mouseX)+"px";
		}else if(parseInt(thrBox.style.left)>550){
			div.style.left = "550px";
		}else{
			div.style.left = "0";
		}
		if(parseInt(thrBox.style.top)<=350 && parseInt(thrBox.style.top)>=0){
			div.style.top = parseInt(objY)+parseInt(y)-parseInt(mouseY)+"px";
		}else if(parseInt(thrBox.style.top)>350){
			div.style.top = "350px";
		}else{
			div.style.top = "0";
		}
	}
}
function mouseUpM(e){
	if(isDown){
		var x = e.clientX;
		var y = e.clientY;
		var div = document.getElementById("thrBox");
		div.style.left = parseInt(objX)+parseInt(x)-parseInt(mouseX)+"px";
		div.style.top = parseInt(objY)+parseInt(y)-parseInt(mouseY)+"px";
		mouseX = x;
		mouseY = y;
		thrBox.style.cursor="default";
		isDown = false;
	}
}