//显示时间的方法
function showTime(){
	var now = new Date();
	document.getElementById("spantime").innerHTML = now.toLocaleTimeString();
}
//启动时钟
var timer;
function startClock(){
	timer = window.setInterval(showTime, 1000);
}
//停止时钟
function stopClock(){
	window.clearInterval(timer);
}
//打开新页面
var openTimer;
function openWindowWait(){
	var openFunc = function(){
		window.open("http://www.baidu.com");
	};
	openTimer = window.setTimeout(openFunc,5000);
}
//取消跳转按钮
function cancleOpen(){
	window.clearTimeout(openTimer);
}
//定义图片数组
var imageArray = ["0101.jpg","0102.jpg","0103.jpg","0104.jpg"];
//当前所显示图片的索引
var imageIndex=1;
//定义计时器
var imageTimer;
//启动图片轮转
function startRotate(){
	var rotateFunc=function (){
		var image = document.getElementById("img1");
		image.src="images/"+imageArray[imageIndex];
		if(imageIndex==imageArray.length-1)
			imageIndex=0;
		else 
			imageIndex++;
	};
	window.setInterval(rotateFunc, 1000);
}
//关闭图片轮播效果
function stopRotate(){
	window.clearInterval(imageIndex);
}

