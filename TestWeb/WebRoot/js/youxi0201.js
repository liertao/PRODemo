//创建方块砖
function createwall(){
	for(var i=0;i<51;i++){
		var wall = document.createElement("div");
		wall.style.position="absolute";
		wall.style.width="60px";
		wall.style.height="60px";
		wall.setAttribute("id", "zhuan"+(i+1));
		wall.style.backgroundImage="url(../../images/zhuan1.jpg)";
		wall.style.display="block";
		if(i<=14){
			wall.style.top="200px";
			wall.style.left=70+60*i+""+"px";
		}else if(i<=29){
			wall.style.top="260px";
			wall.style.left=70+60*(i-15)+""+"px";
		}else if(i<=44){
			wall.style.top="320px";
			wall.style.left=70+60*(i-30)+""+"px";
		}else if(i<=47){
			wall.setAttribute("id", "zhuanb"+(i-44));
			wall.style.top="380px";
			wall.style.left=190+60*(i-44)+""+"px";
			wall.style.backgroundImage="url(../../images/zhuanb1.jpg)";
		}else{
			wall.setAttribute("id", "zhuanb"+(i-44));
			wall.style.top="380px";
			wall.style.left=550+60*(i-47)+""+"px";
			wall.style.backgroundImage="url(../../images/zhuanb1.jpg)";
		}

		document.getElementById("frame").appendChild(wall);
	}

}