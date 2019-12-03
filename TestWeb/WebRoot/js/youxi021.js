if(i>=2){//用于连续发射子弹的间距，避免子弹过多
			if(flag==01){
				var a1 = document.getElementById("zd00"+i).offsetLeft;
				var a2 = document.getElementById("zd00"+(i-1)).offsetLeft;
				//如果子弹距离太近，将不把子弹放进数组
			if(Math.abs(a1-a2)<=100){
				document.getElementById("frame").removeChild(zd001);
				i--;
				break;
			}
			}else if(flag==02){
				var a1 = document.getElementById("zd00"+i).offsetTop;
				var a2 = document.getElementById("zd00"+(i-1)).offsetTop;
				//如果子弹距离太近，将不把子弹放进数组
			if(Math.abs(a1-a2)<=100){
				document.getElementById("frame").removeChild(zd001);
				i--;
				break;
			}
			}else if(flag==03){
				var a1 = document.getElementById("zd00"+i).offsetLeft;
				var a2 = document.getElementById("zd00"+(i-1)).offsetLeft;
				//如果子弹距离太近，将不把子弹放进数组
			if(Math.abs(a1-a2)<=100){
				document.getElementById("frame").removeChild(zd001);
				i--;
				break;
			}
			}else{
				var a1 = document.getElementById("zd00"+i).offsetTop;
				var a2 = document.getElementById("zd00"+(i-1)).offsetTop;
				//如果子弹距离太近，将不把子弹放进数组
			if(Math.abs(a1-a2)<=100){
				document.getElementById("frame").removeChild(zd001);
				i--;
				break;
			}
			}
			
		}