//十个地方坦克函数
//敌方坦克定时器
var timernew;//坦克数组的计数器
var timerd1;
var timerd2;
var timerd3;
var timerd4;
var timerd5;
var timerd6;
var timerd7;
var timerd8;
var timerd9;
var timerd10;
var speedd=2;//敌方坦克的初始速度
//var speeddd=2;//创建的坦克的速度初始值
var dflag1 = 0;//速度标示
var dflag2 = 0;//速度标示
var dflag3 = 0;//速度标示
var dflag4 = 0;//速度标示
var dflag5 = 0;//速度标示
var dflag6 = 0;//速度标示
var dflag7 = 0;//速度标示
var dflag8 = 0;//速度标示
var dflag9 = 0;//速度标示
var dflag10 = 0;//速度标示
var j1=0;//用于标示产生随机的运行方向
var j2=0;//用于标示产生随机的运行方向
var j3=0;//用于标示产生随机的运行方向
var j4=0;//用于标示产生随机的运行方向
var j5=0;//用于标示产生随机的运行方向
var j6=0;//用于标示产生随机的运行方向
var j7=0;//用于标示产生随机的运行方向
var j8=0;//用于标示产生随机的运行方向
var j9=0;//用于标示产生随机的运行方向
var j10=0;//用于标示产生随机的运行方向
var t=0;//用于标示是否为第一次生成坦克
//dtkrun();
var dtkrun1 = function (){//敌方坦克1运行函数
	
	//判断是否存在，display是否为none
	if(document.getElementById("dtk01")==null){
		return;
	}
	j1++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk01").offsetLeft;
	dby = document.getElementById("dtk01").offsetTop;
	if(j1%60==0){//如果j是10的倍数，重新生成dflag
		dflag1 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag1 = dflag1;
	}
	if(dflag1==1){//向左
		document.getElementById("dtk01").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk01").style.width!="50px"){
			document.getElementById("dtk01").style.width="50px";
			document.getElementById("dtk01").style.height="40px";
			document.getElementById("dtk01").offsetLeft-=5;
			document.getElementById("dtk01").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk01").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag1 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag1==2){//向上
		document.getElementById("dtk01").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk01").style.width!="40px"){
			document.getElementById("dtk01").style.width="40px";
			document.getElementById("dtk01").style.height="50px";
			document.getElementById("dtk01").offsetLeft+=5;
			document.getElementById("dtk01").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk01").offsetTop<=15){
			dflag1 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag1=="3"){//向右
		document.getElementById("dtk01").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk01").style.width!="50px"){
			document.getElementById("dtk01").style.width="50px";
			document.getElementById("dtk01").style.height="40px";
			document.getElementById("dtk01").offsetLeft-=5;
			document.getElementById("dtk01").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk01").offsetLeft>=920){
			dflag1 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk01").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk01").style.width!="40px"){
			document.getElementById("dtk01").style.width="40px";
			document.getElementById("dtk01").style.height="50px";
			document.getElementById("dtk01").offsetLeft+=5;
			document.getElementById("dtk01").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk01").offsetTop>=558){
			dflag1 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk01").style.left=dbx+"px";
	document.getElementById("dtk01").style.top=dby+"px";
			
}
	
var dtkrun2 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk02")==null){
		return;
	}
	j2++;
		//为每一个敌方坦克随机生成一个运行方向
		dbx = document.getElementById("dtk02").offsetLeft;
		dby = document.getElementById("dtk02").offsetTop;
		if(j2%50==0){//如果j是10的倍数，重新生成dflag
			dflag2 = Math.floor(1+Math.random()*(5-1));
		}else{
			dflag2 = dflag2;
		}
		if(dflag2==1){//向左
			document.getElementById("dtk02").style.background="url(../../images/hdtk01.png)";
			//先旋转，使方向指向目标方向(长宽交换)
			//先判定是否为横向
			if(document.getElementById("dtk02").style.width!="50px"){
				document.getElementById("dtk02").style.width="50px";
				document.getElementById("dtk02").style.height="40px";
				document.getElementById("dtk02").offsetLeft-=5;
				document.getElementById("dtk02").offsetTop+=5;
			}
			dbx-=speedd;
			//判断出界
			if(document.getElementById("dtk02").offsetLeft<=73){
				//如果出界，则重新生成运行方向
				dflag2 = Math.floor(1+Math.random()*(5-1));
			}
		}else if(dflag2==2){//向上
			document.getElementById("dtk02").style.background="url(../../images/hdtk02.png)";
			//先旋转，使方向指向目标方向(长宽交换)
			if(document.getElementById("dtk02").style.width!="40px"){
				document.getElementById("dtk02").style.width="40px";
				document.getElementById("dtk02").style.height="50px";
				document.getElementById("dtk02").offsetLeft+=5;
				document.getElementById("dtk02").offsetTop-=5;
			}
			dby-=speedd;
			//判断出界
			if(document.getElementById("dtk02").offsetTop<=15){
				dflag2 = Math.floor(1+Math.random()*(5-1));
			}
		}else if(dflag2=="3"){//向右
			document.getElementById("dtk02").style.background="url(../../images/hdtk03.png)";
			//先旋转，使方向指向目标方向(长宽交换)
			//先判定是否为横向
			if(document.getElementById("dtk02").style.width!="50px"){
				document.getElementById("dtk02").style.width="50px";
				document.getElementById("dtk02").style.height="40px";
				document.getElementById("dtk02").offsetLeft-=5;
				document.getElementById("dtk02").offsetTop+=5;
			}
			dbx+=speedd;
			//判断出界
			if(document.getElementById("dtk02").offsetLeft>=920){
				dflag2 = Math.floor(1+Math.random()*(5-1));
			}
		}else{//向下
			document.getElementById("dtk02").style.background="url(../../images/hdtk04.png)";
			//先旋转，使方向指向目标方向(长宽交换)
			if(document.getElementById("dtk02").style.width!="40px"){
				document.getElementById("dtk02").style.width="40px";
				document.getElementById("dtk02").style.height="50px";
				document.getElementById("dtk02").offsetLeft+=5;
				document.getElementById("dtk02").offsetTop-=5;
			}
			dby+=speedd;
			//判断出界
			if(document.getElementById("dtk02").offsetTop>=558){
				dflag2 = Math.floor(1+Math.random()*(5-1));
			}
		}
		document.getElementById("dtk02").style.left=dbx+"px";
		document.getElementById("dtk02").style.top=dby+"px";
}		
var dtkrun3 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk03")==null){
		return;
	}
	j3++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk03").offsetLeft;
	dby = document.getElementById("dtk03").offsetTop;
	if(j3%50==0){//如果j是10的倍数，重新生成dflag
		dflag3 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag3 = dflag3;
	}
	if(dflag3==1){//向左
		document.getElementById("dtk03").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk03").style.width!="50px"){
			document.getElementById("dtk03").style.width="50px";
			document.getElementById("dtk03").style.height="40px";
			document.getElementById("dtk03").offsetLeft-=5;
			document.getElementById("dtk03").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk03").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag3 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag3==2){//向上
		document.getElementById("dtk03").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk03").style.width!="40px"){
			document.getElementById("dtk03").style.width="40px";
			document.getElementById("dtk03").style.height="50px";
			document.getElementById("dtk03").offsetLeft+=5;
			document.getElementById("dtk03").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk03").offsetTop<=15){
			dflag3 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag3=="3"){//向右
		document.getElementById("dtk03").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk03").style.width!="50px"){
			document.getElementById("dtk03").style.width="50px";
			document.getElementById("dtk03").style.height="40px";
			document.getElementById("dtk03").offsetLeft-=5;
			document.getElementById("dtk03").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk03").offsetLeft>=920){
			dflag3 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk03").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk03").style.width!="40px"){
			document.getElementById("dtk03").style.width="40px";
			document.getElementById("dtk03").style.height="50px";
			document.getElementById("dtk03").offsetLeft+=5;
			document.getElementById("dtk03").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk03").offsetTop>=558){
			dflag3 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk03").style.left=dbx+"px";
	document.getElementById("dtk03").style.top=dby+"px";
	
}	
var dtkrun4 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk04")==null){
		return;
	}
	j4++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk04").offsetLeft;
	dby = document.getElementById("dtk04").offsetTop;
	if(j4%50==0){//如果j是10的倍数，重新生成dflag
		dflag4 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag4 = dflag4;
	}
	if(dflag4==1){//向左
		document.getElementById("dtk04").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk04").style.width!="50px"){
			document.getElementById("dtk04").style.width="50px";
			document.getElementById("dtk04").style.height="40px";
			document.getElementById("dtk04").offsetLeft-=5;
			document.getElementById("dtk04").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk04").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag4 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag4==2){//向上
		document.getElementById("dtk04").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk04").style.width!="40px"){
			document.getElementById("dtk04").style.width="40px";
			document.getElementById("dtk04").style.height="50px";
			document.getElementById("dtk04").offsetLeft+=5;
			document.getElementById("dtk04").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk04").offsetTop<=15){
			dflag4 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag4=="3"){//向右
		document.getElementById("dtk04").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk04").style.width!="50px"){
			document.getElementById("dtk04").style.width="50px";
			document.getElementById("dtk04").style.height="40px";
			document.getElementById("dtk04").offsetLeft-=5;
			document.getElementById("dtk04").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk04").offsetLeft>=920){
			dflag4 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk04").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk04").style.width!="40px"){
			document.getElementById("dtk04").style.width="40px";
			document.getElementById("dtk04").style.height="50px";
			document.getElementById("dtk04").offsetLeft+=5;
			document.getElementById("dtk04").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk04").offsetTop>=558){
			dflag4 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk04").style.left=dbx+"px";
	document.getElementById("dtk04").style.top=dby+"px";
	
}

var dtkrun5 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk05")==null){
		return;
	}
	j5++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk05").offsetLeft;
	dby = document.getElementById("dtk05").offsetTop;
	if(j5%50==0){//如果j是10的倍数，重新生成dflag
		dflag5 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag5 = dflag5;
	}
	if(dflag5==1){//向左
		document.getElementById("dtk05").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk05").style.width!="50px"){
			document.getElementById("dtk05").style.width="50px";
			document.getElementById("dtk05").style.height="40px";
			document.getElementById("dtk05").offsetLeft-=5;
			document.getElementById("dtk05").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk05").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag5 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag5==2){//向上
		document.getElementById("dtk05").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk05").style.width!="40px"){
			document.getElementById("dtk05").style.width="40px";
			document.getElementById("dtk05").style.height="50px";
			document.getElementById("dtk05").offsetLeft+=5;
			document.getElementById("dtk05").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk05").offsetTop<=15){
			dflag5 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag5=="3"){//向右
		document.getElementById("dtk05").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk05").style.width!="50px"){
			document.getElementById("dtk05").style.width="50px";
			document.getElementById("dtk05").style.height="40px";
			document.getElementById("dtk05").offsetLeft-=5;
			document.getElementById("dtk05").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk05").offsetLeft>=920){
			dflag5 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk05").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk05").style.width!="40px"){
			document.getElementById("dtk05").style.width="40px";
			document.getElementById("dtk05").style.height="50px";
			document.getElementById("dtk05").offsetLeft+=5;
			document.getElementById("dtk05").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk05").offsetTop>=558){
			dflag5 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk05").style.left=dbx+"px";
	document.getElementById("dtk05").style.top=dby+"px";
	
}

var dtkrun6 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk06")==null){
		return;
	}
	j6++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk06").offsetLeft;
	dby = document.getElementById("dtk06").offsetTop;
	if(j6%50==0){//如果j是10的倍数，重新生成dflag
		dflag6 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag6 = dflag6;
	}
	if(dflag6==1){//向左
		document.getElementById("dtk06").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk06").style.width!="50px"){
			document.getElementById("dtk06").style.width="50px";
			document.getElementById("dtk06").style.height="40px";
			document.getElementById("dtk06").offsetLeft-=5;
			document.getElementById("dtk06").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk06").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag6 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag6==2){//向上
		document.getElementById("dtk06").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk06").style.width!="40px"){
			document.getElementById("dtk06").style.width="40px";
			document.getElementById("dtk06").style.height="50px";
			document.getElementById("dtk06").offsetLeft+=5;
			document.getElementById("dtk06").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk06").offsetTop<=15){
			dflag6 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag6=="3"){//向右
		document.getElementById("dtk06").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk06").style.width!="50px"){
			document.getElementById("dtk06").style.width="50px";
			document.getElementById("dtk06").style.height="40px";
			document.getElementById("dtk06").offsetLeft-=5;
			document.getElementById("dtk06").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk06").offsetLeft>=920){
			dflag6 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk06").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk06").style.width!="40px"){
			document.getElementById("dtk06").style.width="40px";
			document.getElementById("dtk06").style.height="50px";
			document.getElementById("dtk06").offsetLeft+=5;
			document.getElementById("dtk06").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk06").offsetTop>=558){
			dflag6 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk06").style.left=dbx+"px";
	document.getElementById("dtk06").style.top=dby+"px";
	
}

var dtkrun7 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk07")==null){
		return;
	}
	j7++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk07").offsetLeft;
	dby = document.getElementById("dtk07").offsetTop;
	if(j7%50==0){//如果j是10的倍数，重新生成dflag
		dflag7 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag7 = dflag7;
	}
	if(dflag7==1){//向左
		document.getElementById("dtk07").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk07").style.width!="50px"){
			document.getElementById("dtk07").style.width="50px";
			document.getElementById("dtk07").style.height="40px";
			document.getElementById("dtk07").offsetLeft-=5;
			document.getElementById("dtk07").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk07").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag7 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag7==2){//向上
		document.getElementById("dtk07").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk07").style.width!="40px"){
			document.getElementById("dtk07").style.width="40px";
			document.getElementById("dtk07").style.height="50px";
			document.getElementById("dtk07").offsetLeft+=5;
			document.getElementById("dtk07").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk07").offsetTop<=15){
			dflag7 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag7=="3"){//向右
		document.getElementById("dtk07").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk07").style.width!="50px"){
			document.getElementById("dtk07").style.width="50px";
			document.getElementById("dtk07").style.height="40px";
			document.getElementById("dtk07").offsetLeft-=5;
			document.getElementById("dtk07").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk07").offsetLeft>=920){
			dflag7 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk07").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk07").style.width!="40px"){
			document.getElementById("dtk07").style.width="40px";
			document.getElementById("dtk07").style.height="50px";
			document.getElementById("dtk07").offsetLeft+=5;
			document.getElementById("dtk07").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk07").offsetTop>=558){
			dflag7 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk07").style.left=dbx+"px";
	document.getElementById("dtk07").style.top=dby+"px";
	
}

var dtkrun8 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk08")==null){
		return;
	}
	j8++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk08").offsetLeft;
	dby = document.getElementById("dtk08").offsetTop;
	if(j8%50==0){//如果j是10的倍数，重新生成dflag
		dflag8 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag8 = dflag8;
	}
	if(dflag8==1){//向左
		document.getElementById("dtk08").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk08").style.width!="50px"){
			document.getElementById("dtk08").style.width="50px";
			document.getElementById("dtk08").style.height="40px";
			document.getElementById("dtk08").offsetLeft-=5;
			document.getElementById("dtk08").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk08").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag8 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag8==2){//向上
		document.getElementById("dtk08").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk08").style.width!="40px"){
			document.getElementById("dtk08").style.width="40px";
			document.getElementById("dtk08").style.height="50px";
			document.getElementById("dtk08").offsetLeft+=5;
			document.getElementById("dtk08").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk08").offsetTop<=15){
			dflag8 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag8=="3"){//向右
		document.getElementById("dtk08").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk08").style.width!="50px"){
			document.getElementById("dtk08").style.width="50px";
			document.getElementById("dtk08").style.height="40px";
			document.getElementById("dtk08").offsetLeft-=5;
			document.getElementById("dtk08").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk08").offsetLeft>=920){
			dflag8 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk08").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk08").style.width!="40px"){
			document.getElementById("dtk08").style.width="40px";
			document.getElementById("dtk08").style.height="50px";
			document.getElementById("dtk08").offsetLeft+=5;
			document.getElementById("dtk08").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk08").offsetTop>=558){
			dflag8 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk08").style.left=dbx+"px";
	document.getElementById("dtk08").style.top=dby+"px";
	
}

var dtkrun9 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk09")==null){
		return;
	}
	j9++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk09").offsetLeft;
	dby = document.getElementById("dtk09").offsetTop;
	if(j9%50==0){//如果j是10的倍数，重新生成dflag
		dflag9 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag9 = dflag9;
	}
	if(dflag9==1){//向左
		document.getElementById("dtk09").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk09").style.width!="50px"){
			document.getElementById("dtk09").style.width="50px";
			document.getElementById("dtk09").style.height="40px";
			document.getElementById("dtk09").offsetLeft-=5;
			document.getElementById("dtk09").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk09").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag9 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag9==2){//向上
		document.getElementById("dtk09").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk09").style.width!="40px"){
			document.getElementById("dtk09").style.width="40px";
			document.getElementById("dtk09").style.height="50px";
			document.getElementById("dtk09").offsetLeft+=5;
			document.getElementById("dtk09").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk09").offsetTop<=15){
			dflag9 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag9=="3"){//向右
		document.getElementById("dtk09").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk09").style.width!="50px"){
			document.getElementById("dtk09").style.width="50px";
			document.getElementById("dtk09").style.height="40px";
			document.getElementById("dtk09").offsetLeft-=5;
			document.getElementById("dtk09").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk09").offsetLeft>=920){
			dflag9 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk09").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk09").style.width!="40px"){
			document.getElementById("dtk09").style.width="40px";
			document.getElementById("dtk09").style.height="50px";
			document.getElementById("dtk09").offsetLeft+=5;
			document.getElementById("dtk09").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk09").offsetTop>=558){
			dflag9 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk09").style.left=dbx+"px";
	document.getElementById("dtk09").style.top=dby+"px";
	
}

var dtkrun10 = function (){//敌方坦克1运行函数
	//判断是否存在，display是否为none
	if(document.getElementById("dtk010")==null){
		return;
	}
	j10++;
	//为每一个敌方坦克随机生成一个运行方向
	dbx = document.getElementById("dtk010").offsetLeft;
	dby = document.getElementById("dtk010").offsetTop;
	if(j10%50==0){//如果j是10的倍数，重新生成dflag
		dflag10 = Math.floor(1+Math.random()*(5-1));
	}else{
		dflag10 = dflag10;
	}
	if(dflag10==1){//向左
		document.getElementById("dtk010").style.background="url(../../images/hdtk01.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk010").style.width!="50px"){
			document.getElementById("dtk010").style.width="50px";
			document.getElementById("dtk010").style.height="40px";
			document.getElementById("dtk010").offsetLeft-=5;
			document.getElementById("dtk010").offsetTop+=5;
		}
		dbx-=speedd;
		//判断出界
		if(document.getElementById("dtk010").offsetLeft<=73){
			//如果出界，则重新生成运行方向
			dflag10 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag10==2){//向上
		document.getElementById("dtk010").style.background="url(../../images/hdtk02.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk010").style.width!="40px"){
			document.getElementById("dtk010").style.width="40px";
			document.getElementById("dtk010").style.height="50px";
			document.getElementById("dtk010").offsetLeft+=5;
			document.getElementById("dtk010").offsetTop-=5;
		}
		dby-=speedd;
		//判断出界
		if(document.getElementById("dtk010").offsetTop<=15){
			dflag10 = Math.floor(1+Math.random()*(5-1));
		}
	}else if(dflag10=="3"){//向右
		document.getElementById("dtk010").style.background="url(../../images/hdtk03.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		//先判定是否为横向
		if(document.getElementById("dtk010").style.width!="50px"){
			document.getElementById("dtk010").style.width="50px";
			document.getElementById("dtk010").style.height="40px";
			document.getElementById("dtk010").offsetLeft-=5;
			document.getElementById("dtk010").offsetTop+=5;
		}
		dbx+=speedd;
		//判断出界
		if(document.getElementById("dtk010").offsetLeft>=920){
			dflag10 = Math.floor(1+Math.random()*(5-1));
		}
	}else{//向下
		document.getElementById("dtk010").style.background="url(../../images/hdtk04.png)";
		//先旋转，使方向指向目标方向(长宽交换)
		if(document.getElementById("dtk010").style.width!="40px"){
			document.getElementById("dtk010").style.width="40px";
			document.getElementById("dtk010").style.height="50px";
			document.getElementById("dtk010").offsetLeft+=5;
			document.getElementById("dtk010").offsetTop-=5;
		}
		dby+=speedd;
		//判断出界
		if(document.getElementById("dtk010").offsetTop>=558){
			dflag10 = Math.floor(1+Math.random()*(5-1));
		}
	}
	document.getElementById("dtk010").style.left=dbx+"px";
	document.getElementById("dtk010").style.top=dby+"px";	
}

//英雄坦克的子弹函数
//定时器用于子弹的运行
var timer;//子弹计时器
var speed = 2;
var speedx;
var dxmin;
var dxmax;
var dymin;
var dymax;
var zdrun = function(){
	yc++;
	//alert(zdArray.length);
	//alert(zdArray.toString());
	var nflag = 0;//新的判定方向的常量
	//对子弹进行遍历
	//首先判断是否有子弹存在
	if(zdArray.length==0){
		if(t==0){
			for(var i=0;i<9;i++){
				createtk();
			}
			t++;
			//alert(t);
		}
		return;
	}else{
		for(var k=0;k<zdArray.length;k++){
			//alert("zd00"+(k+1));///打印子弹Id
			if(null==document.getElementById("zd00"+(k+1))){//用于判定子弹的起始属性,如果不存在，直接跳过这个子弹
				continue;
			}
			//判断子弹的display是否为none，如果是，直接跳过不进行这个子弹的遍历，减轻程序运行压力
			if(document.getElementById("zd00"+(k+1)).style.display=="none"){
				continue;
			}
			var bx = document.getElementById("zd00"+(k+1)).offsetLeft;
			var by = document.getElementById("zd00"+(k+1)).offsetTop;
			zdArray[k]=zdArray[k]+"";//转换为字符串
			nflag = zdArray[k].substr(zdArray[k].length-1,zdArray[k].length);
			//alert(nflag);//打印方向
			if(nflag=="1"){//向左飞
				bx-=speed;
				document.getElementById("zd00"+(k+1)).style.left=bx+"px";
				document.getElementById("zd00"+(k+1)).style.top=by+"px";
			}else if(nflag=="2"){//向上飞
				by-=speed;
				document.getElementById("zd00"+(k+1)).style.left=bx+"px";
				document.getElementById("zd00"+(k+1)).style.top=by+"px";
			}else if(nflag=="3"){//向右飞
				bx+=speed;
				document.getElementById("zd00"+(k+1)).style.left=bx+"px";
				document.getElementById("zd00"+(k+1)).style.top=by+"px";
			}else{//向下飞
				by+=speed;
				document.getElementById("zd00"+(k+1)).style.left=bx+"px";
				document.getElementById("zd00"+(k+1)).style.top=by+"px";
			}
			//为英雄坦克子弹循环砖块
			for(var zdi=0;zdi<45;zdi++){
				var zdxmin=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("zd00"+(k+1)).style.display="none";
					document.getElementById("zhuan"+(zdi+1)).style.display="none";
					//break;
				}
			}
			//为英雄坦克子弹循环6块白砖块
			for(var zdi=0;zdi<6;zdi++){
				var zdxmin=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("zd00"+(k+1)).style.display="none";
					//document.getElementById("zhuanb"+(zdi+1)).style.display="none";
			
				}
			}
			//遍历基地围墙(两块竖砖)
			for(var zdi=0;zdi<2;zdi++){
				var zdxmin=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetLeft)+30;
				var zdymin=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("zd00"+(k+1)).style.display="none";
					document.getElementById("wzhuan"+(zdi+1)).style.display="none";
					//break;
				}
			}
			//遍历基地围墙(两块横砖)
			for(var zdi=0;zdi<2;zdi++){
				var zdxmin=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetTop)+30;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("zd00"+(k+1)).style.display="none";
					document.getElementById("wzhuan"+(zdi+3)).style.display="none";
					//break;
				}
			}
			//判定撞击红心
			for(var zdi=0;zdi<1;zdi++){
				var zdxmin=parseInt(document.getElementById("xin").offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("xin").offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("xin").offsetTop)-10;
				var zdymax=parseInt(document.getElementById("xin").offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("zd00"+(k+1)).style.display="none";
					document.getElementById("xin").style.display="none";
					//判定红心是否消失来判定游戏是否结束(清楚定时器)
					if("none"==document.getElementById("xin").style.display){
						window.clearInterval(timernew);
						window.clearInterval(timerd1)
						window.clearInterval(timerd2);
						window.clearInterval(timerd3);
						window.clearInterval(timerd4);
						window.clearInterval(timerd5);
						window.clearInterval(timerd6);
						window.clearInterval(timerd7);
						window.clearInterval(timerd8);
						window.clearInterval(timerd9);
						window.clearInterval(timerd10);
					}
				}
			}
			
			//判断子弹是否击中边框，以及是否击中敌方坦克，击中则子弹消失，敌方被击中坦克也消失（即display="none"）;
			bxpd = document.getElementById("zd00"+(k+1)).offsetLeft;
			bypd = document.getElementById("zd00"+(k+1)).offsetTop;
			
			//循环所有的dtk
			for(var f=0;f<10;f++){
				//如果坦克的不存在，直接循环下一个，减小frame的压力
				if(document.getElementById("dtk0"+(f+1))==null){
					continue;
				}else if(document.getElementById("dtk0"+(f+1)).style.display=="none"){
					continue;
				}else{
					var ql = parseInt(document.getElementById("dtk0"+(f+1)).offsetLeft);
					var qt = parseInt(document.getElementById("dtk0"+(f+1)).offsetTop)
					var qzw = parseInt(document.getElementById("zd00"+(k+1)).style.width);
					var qzh = parseInt(document.getElementById("zd00"+(k+1)).style.height);
					var qdw = parseInt(document.getElementById("dtk0"+(f+1)).style.width);
					var qdh = parseInt(document.getElementById("dtk0"+(f+1)).style.height);
					dxmin = ql-qzw;
					dxmax = ql+qdw;
					dymin = qt-qzh;
					dymax = qt+qdh;
				}
				//如果坦克的display为none，直接循环下一个，可以减少程序运行压力
//				if(document.getElementById("dtk0"+(f+1)).style.display=="none"){
//					continue;
//				}
				
				if(bxpd>=dxmin && bxpd<=dxmax && bypd>=dymin && bypd<=dymax){//判断击中敌方坦克
					//击中 子弹消失   敌方被击中坦克消失
					document.getElementById("dtk0"+(f+1)).style.display="none";
					document.getElementById("zd00"+(k+1)).style.display="none";
					//document.getElementById("frame").removeChild(document.getElementById("dtk0"+(f+1)));//固定方块消失后刪除节点，减小frame压力
					//document.getElementById("frame").removeChild(document.getElementById("zd00"+(k+1)));//子彈消失后刪除节点，减小frame压力
				}
			}
			
			//遍历新生成的坦克
			if(fxArray.length==0){
				return;
			}else{
				for(var i=0;i<fxArray.length;i++){
					//判断是否存在，如果不存在直接跳出
					if(null==document.getElementById("ctk0"+(i+1))){
						continue;
					}
					//如果display为none，也不循环
					if(document.getElementById("ctk0"+(i+1)).style.display=="none"){
						continue;
					}
					//新坦克的碰撞判定
					dxmin = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft)-parseInt(document.getElementById("zd00"+(k+1)).style.width);
					dxmax = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft)+parseInt(document.getElementById("ctk0"+(i+1)).style.width);
					dymin = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop)-parseInt(document.getElementById("zd00"+(k+1)).style.height);
					dymax = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop)+parseInt(document.getElementById("ctk0"+(i+1)).style.height);
					
					if(bxpd>=dxmin && bxpd<=dxmax && bypd>=dymin && bypd<=dymax){//判断击中敌方坦克
						//击中 子弹消失   敌方被击中坦克消失，坦克数减少1
						document.getElementById("ctk0"+(i+1)).style.display="none";
						document.getElementById("zd00"+(k+1)).style.display="none";
						document.getElementById("frame").removeChild(document.getElementById("ctk0"+(i+1)));//固定方块消失后刪除节点，减小frame压力
						//document.getElementById("frame").removeChild(document.getElementById("zd00"+(k+1)));//子彈消失后刪除节点，减小frame压力
						nowdtk--;//击中实时生成的坦克数减少1；
						//如果创建的坦克次数少于20次，当实时坦克较少时，就继续创建，否则不创建
						if(pn<=50){
							//判断nowdtk
							if(nowdtk<=5){
									createtk();
									createtk();
									createtk();
									createtk();
									createtk();
							}
						}
						
					}
				}
			}
			
			if(bxpd<=67||bxpd>=963||bypd>=600||bypd<=7){//撞击边框
				document.getElementById("zd00"+(k+1)).style.backgroundColor="black";
				document.getElementById("zd00"+(k+1)).style.display="none";
				document.getElementById("frame").removeChild(document.getElementById("zd00"+(k+1)));//子彈消失后刪除节点，减小frame压力
			}				
		}
	}	
}
//敌方坦克不足时，创建坦克 的方法
//用于存放敌方生成的坦克的数组
var dctkArray = new Array();
var fxArray = new Array();//创建用于存放速度标示的数组
var pn=0;//用于标示生成坦克数量的标示,参与生成坦克的速度标示；
var nowdtk = 0;//实时的创建坦克的数量

function createtk(){
	var fx="fx";//用于标示每一个生成的坦克的运行方向；
	pn++;
	nowdtk++;
	fx+=pn+"";
	fx+=Math.floor(1+Math.random()*(5-1));//子弹的速度标示（fxb(1234)）
	//给方向标记添加一个速度
	fx+="2";
	var ctk01 = "ctk0";
	ctk01+=pn+"";
	ctk01 = document.createElement("div");
	ctk01.style.width="40px";
	ctk01.style.height="50px";
	var xxyy = 100+Math.floor(Math.random()*(800-100));
	ctk01.style.left = xxyy+"px";
	ctk01.style.top = "30px";
	ctk01.style.position="absolute";
	ctk01.style.display="block";
	ctk01.setAttribute("id", "ctk0"+pn);
	ctk01.style.background="url(../../images/dtk01.png)";
	var tk00 = document.getElementById("tk00");
	var frame = document.getElementById("frame");
	frame.insertBefore(ctk01, tk00);//将新节点插入指定节点前面
	dctkArray=dctkArray.concat(ctk01);//将创建的坦克加入到数组中供遍历使用
	fxArray=fxArray.concat(fx);
	//alert(dctkArray.length);
	
	
}
//遍历敌方坦克的函数
var dtknewrun = function(){
	v++;//每调用一次，使v加1，用于判定到达一定的数值 后产生新的运行方向
	//判断数组是否为空
	if(dctkArray.length==0){
		return;
	}else{
		for(var i=0;i<=fxArray.length;i++){//以b（即Id为标记遍历生成的所有坦克）
			if(document.getElementById("ctk0"+(i+1))==null){//判断要遍历的坦克是否存在
				continue;
			}
			//如果v达到一定的数值后，重新生成新的速度标示
			if((v+i*30)%60==0){
				fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+Math.floor(1+Math.random()*(5-1))+"2";
			}
			dbx = document.getElementById("ctk0"+(i+1)).offsetLeft;
			dby = document.getElementById("ctk0"+(i+1)).offsetTop;
			var a = fxArray[i].length-2;
			var b = fxArray[i].length-1;
			var fxcell = fxArray[i].substring(3, 4);
//			alert(fxArray[i]);
//			alert(fxcell);
			if(fxcell=="1"){//向左
				document.getElementById("ctk0"+(i+1)).style.background="url(../../images/dtk01.png)"
				//先旋转，使方向指向目标方向(长宽交换)
				//先判定是否为横向
				if(document.getElementById("ctk0"+(i+1)).style.width!="50px"){
					document.getElementById("ctk0"+(i+1)).style.width="50px";
					document.getElementById("ctk0"+(i+1)).style.height="40px";
					document.getElementById("ctk0"+(i+1)).offsetLeft-=5;
					document.getElementById("ctk0"+(i+1)).offsetTop+=5;
				}
				dbx-=parseInt(fxArray[i].substr(fxArray[i].length-1));
				//判断出界
				if(document.getElementById("ctk0"+(i+1)).offsetLeft<=72){
					//如果出界，则重新生成运行方向,替换原来的参数
					var str = "234"
					var a = str.charAt(Math.floor(Math.random()*3));
					fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"2";
				}
				//判断坦克碰撞墙壁(左)
				for(var zi=0;zi<45;zi++){
					if(document.getElementById("zhuan"+(zi+1)).style.display=="none"){//首先判断砖是否显示
						continue;	
					}else{//如果转存在
						//上边界
						var zhuan1s = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
						//下边界
						var zhuan1x = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)+60;
						//左边界
						var zhuan1l= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)+parseInt(document.getElementById("ctk0"+(i+1)).style.width);
						//右边界
						var zhuan1r= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)+60;
						var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
						var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
						if(xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x){
							//xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x
//							var str = "1234";
//							var a = str.charAt(Math.floor(Math.random()*4));
							fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
						}else{
							
						}
					}
				}
				//判断碰撞围墙
				for(var zi=0;zi<1;zi++){
					//上边界
					var sbj = document.getElementById("wzhuan3").offsetTop;
					//下边界
					var xbj = document.getElementById("wzhuan3").offsetTop+90;
					//左边界
					var zbj = document.getElementById("wzhuan3").offsetLeft;
					//右边界
					var ybj = document.getElementById("wzhuan3").offsetLeft+120;
					if(xctk>=zbj&&xctk<=ybj&&yctk>=sbj&&yctk<=xbj){
						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
					}
					
				}
				//白砖
//				for(var i=0;i<6;i++){
//					if(null==document.getElementById("zhuanb"+i)){
//						continue;
//					}
//					var ysbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
//					var yxbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)+60;
//					var xzbj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
//					var xybj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)+60;
//					var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
//					var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
//					if(xctk>=xzbj&&xctk<=xybj&&yctk>=ysbj&&yctk<=yxbj){
//						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"0";
//					}
//				}
				
			}else if(fxcell=="2"){//向上
				document.getElementById("ctk0"+(i+1)).style.background="url(../../images/dtk02.png)"
				//先旋转，使方向指向目标方向(长宽交换)
				if(document.getElementById("ctk0"+(i+1)).style.width!="40px"){
					document.getElementById("ctk0"+(i+1)).style.width="40px";
					document.getElementById("ctk0"+(i+1)).style.height="50px";
					document.getElementById("ctk0"+(i+1)).offsetLeft+=5;
					document.getElementById("ctk0"+(i+1)).offsetTop-=5;
				}
//				if(canUpArray[i]){
					dby-=parseInt(fxArray[i].substr(fxArray[i].length-1));
//				}else{
//					dby-=0;
//				}
				//判断出界
				if(document.getElementById("ctk0"+(i+1)).offsetTop<=15){
					var str = "134"
					var a = str.charAt(Math.floor(Math.random()*3));
					fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"2";
				}
				//判断坦克碰撞墙壁(上)
				for(var zi=0;zi<45;zi++){
					if(document.getElementById("zhuan"+(zi+1)).style.display=="none"){//首先判断砖是否显示
						continue;	
					}else{//如果转存在
						//上边界
						var zhuan1s = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
						//下边界
						var zhuan1x = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)+60;
						//左边界
						var zhuan1l= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft);
						//右边界
						var zhuan1r= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)+60;
						var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
						var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
						if(xctk>=zhuan1l&&xctk<=zhuan1r&&yctk<=zhuan1x&&yctk>=zhuan1s){
							//xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x
//							var str = "1234";
//							var a = str.charAt(Math.floor(Math.random()*4));
							fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
						}else{
							
						}
					}
				}
				//判断碰撞围墙
				for(var zi=0;zi<1;zi++){
					//上边界
					var sbj = document.getElementById("wzhuan3").offsetTop;
					//下边界
					var xbj = document.getElementById("wzhuan3").offsetTop+90;
					//左边界
					var zbj = document.getElementById("wzhuan3").offsetLeft;
					//右边界
					var ybj = document.getElementById("wzhuan3").offsetLeft+120;
					if(xctk>=zbj&&xctk<=ybj&&yctk>=sbj&&yctk<=xbj){
						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
					}
					
				}
				//白砖
//				for(var i=0;i<6;i++){
//					if(null==document.getElementById("zhuanb"+i)){
//						continue;
//					}
//					var ysbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
//					var yxbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)+60;
//					var xzbj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
//					var xybj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)+60;
//					var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
//					var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
//					if(xctk>=xzbj&&xctk<=xybj&&yctk>=ysbj&&yctk<=yxbj){
//						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"0";
//					}
//				}
				
			}else if(fxcell=="3"){//向右
				document.getElementById("ctk0"+(i+1)).style.background="url(../../images/dtk03.png)"
				//先旋转，使方向指向目标方向(长宽交换)
				//先判定是否为横向
				if(document.getElementById("ctk0"+(i+1)).style.width!="50px"){
					document.getElementById("ctk0"+(i+1)).style.width="50px";
					document.getElementById("ctk0"+(i+1)).style.height="40px";
					document.getElementById("ctk0"+(i+1)).offsetLeft-=5;
					document.getElementById("ctk0"+(i+1)).offsetTop+=5;
				}
//				if(canRightArray[i]){
					dbx+=parseInt(fxArray[i].substr(fxArray[i].length-1));
//				}else{
//					dbx+=0;
//				}
				//判断出界
				if(document.getElementById("ctk0"+(i+1)).offsetLeft>=920){
					var str = "124"
					var a = str.charAt(Math.floor(Math.random()*3));
					fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"2";
				}
				//判断坦克碰撞墙壁(右)
				for(var zi=0;zi<45;zi++){
					if(document.getElementById("zhuan"+(zi+1)).style.display=="none"){//首先判断砖是否显示
						continue;	
					}else{//如果转存在
						//上边界
						var zhuan1s = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
						//下边界
						var zhuan1x = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)+60;
						//左边界
						var zhuan1l= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
						//右边界
						var zhuan1r= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)+60;
						var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
						var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
						if(yctk>=zhuan1s&&yctk<=zhuan1x&&xctk>=zhuan1l&&xctk<=zhuan1r){
							//xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x
//							var str = "1234";
//							var a = str.charAt(Math.floor(Math.random()*4));
							fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
						}else{
							
						}
					}
				}
				//判断碰撞围墙
				for(var zi=0;zi<1;zi++){
					//上边界
					var sbj = document.getElementById("wzhuan3").offsetTop;
					//下边界
					var xbj = document.getElementById("wzhuan3").offsetTop+90;
					//左边界
					var zbj = document.getElementById("wzhuan3").offsetLeft;
					//右边界
					var ybj = document.getElementById("wzhuan3").offsetLeft+120;
					if(xctk>=zbj&&xctk<=ybj&&yctk>=sbj&&yctk<=xbj){
						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
					}
					
				}
				//白砖
//				for(var i=0;i<6;i++){
//					if(null==document.getElementById("zhuanb"+i)){
//						continue;
//					}
//					var ysbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
//					var yxbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)+60;
//					var xzbj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
//					var xybj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)+60;
//					var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
//					var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
//					if(xctk>=xzbj&&xctk<=xybj&&yctk>=ysbj&&yctk<=yxbj){
//						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"0";
//					}
//				}
				
			}else{//向下
				document.getElementById("ctk0"+(i+1)).style.background="url(../../images/dtk04.png)"
				//先旋转，使方向指向目标方向(长宽交换)
				if(document.getElementById("ctk0"+(i+1)).style.width!="40px"){
					document.getElementById("ctk0"+(i+1)).style.width="40px";
					document.getElementById("ctk0"+(i+1)).style.height="50px";
					document.getElementById("ctk0"+(i+1)).offsetLeft+=5;
					document.getElementById("ctk0"+(i+1)).offsetTop-=5;
				}
				dby+=parseInt(fxArray[i].substr(fxArray[i].length-1));
				//判断出界
				
				if(document.getElementById("ctk0"+(i+1)).offsetTop>=558){
					
					var str = "123"
					
					var a = str.charAt(Math.floor(Math.random()*3));
					
					fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"2";
				}
				//判断坦克碰撞墙壁(下)
				for(var zi=0;zi<45;zi++){
					if(document.getElementById("zhuan"+(zi+1)).style.display=="none"){//首先判断砖是否显示
						continue;	
					}else{//如果转存在
						//求出每一个砖块的边界
						//上边界
						var zhuan1s = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
						//下边界
						var zhuan1x = parseInt(document.getElementById("zhuan"+(zi+1)).offsetTop)+60;
						//左边界
						var zhuan1l= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
						//右边界
						var zhuan1r= parseInt(document.getElementById("zhuan"+(zi+1)).offsetLeft)+60;
						var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
						var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
						if(xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x){
							//alert("01");
							//xctk>=zhuan1l&&xctk<=zhuan1r&&yctk>=zhuan1s&&yctk<=zhuan1x
//							var str = "1234";
//							var a = str.charAt(Math.floor(Math.random()*4));
							fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
						}else{
							
						}
					}
				}
				//判断碰撞围墙
				for(var zi=0;zi<1;zi++){
					//上边界
					var sbj = document.getElementById("wzhuan3").offsetTop;
					//下边界
					var xbj = document.getElementById("wzhuan3").offsetTop+90;
					//左边界
					var zbj = document.getElementById("wzhuan3").offsetLeft;
					//右边界
					var ybj = document.getElementById("wzhuan3").offsetLeft+120;
					if(xctk>=zbj&&xctk<=ybj&&yctk>=sbj&&yctk<=xbj){
						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-1)+"0";
					}
					
				}
				//白砖
//				for(var i=0;i<6;i++){
//					if(null==document.getElementById("zhuanb"+i)){
//						continue;
//					}
//					var ysbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)-parseInt(document.getElementById("ctk0"+(i+1)).style.height);
//					var yxbj = parseInt(document.getElementById("zhuanb"+i).offsetTop)+60;
//					var xzbj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)-parseInt(document.getElementById("ctk0"+(i+1)).style.width);
//					var xybj = parseInt(document.getElementById("zhuanb"+i).offsetLeft)+60;
//					var xctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetLeft);
//					var yctk = parseInt(document.getElementById("ctk0"+(i+1)).offsetTop);
//					if(xctk>=xzbj&&xctk<=xybj&&yctk>=ysbj&&yctk<=yxbj){
//						fxArray[i] = fxArray[i].substring(0,fxArray[i].length-2)+a+"0";
//					}
//				}
				
			}
			document.getElementById("ctk0"+(i+1)).style.left=dbx+"px";
			document.getElementById("ctk0"+(i+1)).style.top=dby+"px";
			
			if(v%7==0){
				var sj01 = Math.floor(1+Math.random()*(5-1))
				
				if(sj01==1){
					h++;//参数生成新子弹的唯一标示的Id值
					//产生子弹加入到数组
					dzd+=h+""+fxcell;
					var dzd001= document.createElement("div");
					//zd001.style.backgroundColor="black";
					dzd001.style.position="absolute";
					dzd001.setAttribute("id", "dzd"+h);//生成具有单独标示的子弹
					dzd001.style.width="10px";
					dzd001.style.height="10px";
					
					bx = document.getElementById("ctk0"+(i+1)).offsetLeft;
					by = document.getElementById("ctk0"+(i+1)).offsetTop;
					if(fxcell=="1"){//左面产生子弹
						dzd001.style.left= bx-7+"px";
						dzd001.style.top= by+15+"px";
						dzd001.style.backgroundImage="url(../../images/zdfb1p.png)";
					}else if(fxcell=="2"){//上面产生子弹
						dzd001.style.left= bx+15+"px";
						dzd001.style.top= by-7+"px";
						dzd001.style.backgroundImage="url(../../images/zdfb2p.png)";
					}else if(fxcell=="3"){//右面产生子弹
						dzd001.style.left= bx+52+"px";
						dzd001.style.top= by+15+"px";
						dzd001.style.backgroundImage="url(../../images/zdfb3p.png)";
					}else{//下面产生子弹
						dzd001.style.left= bx+15+"px";
						dzd001.style.top= by+52+"px";
						dzd001.style.backgroundImage="url(../../images/zdfb4p.png)";
					}
					dzd001.style.display="block";
					document.getElementById("frame").appendChild(dzd001);
					//将新生成的子弹加入到数组
					dzdArray=dzdArray.concat(dzd);
					
				}
				
			}
		}
	}
}

//运行时间 用于判定子弹产生速度
var showtime = function(){
	var now = new Date();
	var strmiao = now.getMilliseconds();
	var fa = parseInt(strmiao);
	return fa;
}

//遍历新子弹数组函数
var dzdArray = new Array();//用于存放敌方坦克生成的子弹
var dzdnewrun = function(){
	var dnflag = 0;
	if(dzdArray.length==0){
		return;
	}else{
		for(var i=0;i<dzdArray.length;i++){
			if(document.getElementById("dzd"+(i+1))==null){
				continue;
			}
			bx = document.getElementById("dzd"+(i+1)).offsetLeft;
			by = document.getElementById("dzd"+(i+1)).offsetTop;
			dzdArray[i]=dzdArray[i]+"";//转换为字符串
			dnflag = dzdArray[i].substr(dzdArray[i].length-1,dzdArray[i].length);
			//alert(dnflag);//打印方向
			if(dnflag=="1"){//向左飞
				bx-=speed;
				document.getElementById("dzd"+(i+1)).style.left=bx+"px";
				document.getElementById("dzd"+(i+1)).style.top=by+"px";
			}else if(dnflag=="2"){//向上飞
				by-=speed;
				document.getElementById("dzd"+(i+1)).style.left=bx+"px";
				document.getElementById("dzd"+(i+1)).style.top=by+"px";
			}else if(dnflag=="3"){//向右飞
				bx+=speed;
				document.getElementById("dzd"+(i+1)).style.left=bx+"px";
				document.getElementById("dzd"+(i+1)).style.top=by+"px";
			}else{//向下飞
				by+=speed;
				document.getElementById("dzd"+(i+1)).style.left=bx+"px";
				document.getElementById("dzd"+(i+1)).style.top=by+"px";
			}
			//撞击砖块判定（如果撞击则砖块消失，子弹消失）
			for(var zdi=0;zdi<45;zdi++){
				var zdxmin=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("zhuan"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					document.getElementById("zhuan"+(zdi+1)).style.display="none";
					//break;
				}
			}
			//遍历6块白砖
			for(var zdi=0;zdi<6;zdi++){
				var zdxmin=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("zhuanb"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					//document.getElementById("zhuanb"+(zdi+1)).style.display="none";
			
				}
			}
			//遍历基地围墙(两块竖砖)
			for(var zdi=0;zdi<2;zdi++){
				var zdxmin=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetLeft)+30;
				var zdymin=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("wzhuan"+(zdi+1)).offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					document.getElementById("wzhuan"+(zdi+1)).style.display="none";
					//break;
				}
			}
			//遍历基地围墙(两块横砖)
			for(var zdi=0;zdi<2;zdi++){
				var zdxmin=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetTop)-10;
				var zdymax=parseInt(document.getElementById("wzhuan"+(zdi+3)).offsetTop)+30;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					document.getElementById("wzhuan"+(zdi+3)).style.display="none";
					//break;
				}
			}
			//判定撞击红心
			for(var zdi=0;zdi<1;zdi++){
				var zdxmin=parseInt(document.getElementById("xin").offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("xin").offsetLeft)+60;
				var zdymin=parseInt(document.getElementById("xin").offsetTop)-10;
				var zdymax=parseInt(document.getElementById("xin").offsetTop)+60;
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					document.getElementById("xin").style.display="none";
					//判定红心是否消失来判定游戏是否结束(清楚定时器)
					if("none"==document.getElementById("xin").style.display){
						window.clearInterval(timernew);
						window.clearInterval(timerd1)
						window.clearInterval(timerd2);
						window.clearInterval(timerd3);
						window.clearInterval(timerd4);
						window.clearInterval(timerd5);
						window.clearInterval(timerd6);
						window.clearInterval(timerd7);
						window.clearInterval(timerd8);
						window.clearInterval(timerd9);
						window.clearInterval(timerd10);
					}
					over();
					document.getElementById("txt").style.display="block";
				}
			}
			//遍历判定英雄机
			for(var zdi=0;zdi<1;zdi++){
				var zdxmin=parseInt(document.getElementById("tk00").offsetLeft)-10;
				var zdxmax=parseInt(document.getElementById("tk00").offsetLeft)+parseInt(document.getElementById("tk00").style.width);
				var zdymin=parseInt(document.getElementById("tk00").offsetTop)-10;
				var zdymax=parseInt(document.getElementById("tk00").offsetTop)+parseInt(document.getElementById("tk00").style.height);
				if(bx>=zdxmin&&bx<=zdxmax&&by>=zdymin&&by<=zdymax){
					document.getElementById("dzd"+(i+1)).style.display="none";
					document.getElementById("tk00").style.display="none";
					//判定游戏结束
					if("none"==document.getElementById("tk00").style.display){
						window.clearInterval(timernew);
						window.clearInterval(timerd1)
						window.clearInterval(timerd2);
						window.clearInterval(timerd3);
						window.clearInterval(timerd4);
						window.clearInterval(timerd5);
						window.clearInterval(timerd6);
						window.clearInterval(timerd7);
						window.clearInterval(timerd8);
						window.clearInterval(timerd9);
						window.clearInterval(timerd10);
					}
					over();
					document.getElementById("txt").style.display="block";
				}
			}
			
			//撞击边界判定
			bxpd = document.getElementById("dzd"+(i+1)).offsetLeft;
			bypd = document.getElementById("dzd"+(i+1)).offsetTop;
			
			if(bxpd<=67||bxpd>=963||bypd>=600||bypd<=7){//撞击边框
				document.getElementById("dzd"+(i+1)).style.backgroundColor="black";
				document.getElementById("dzd"+(i+1)).style.display="none";
				document.getElementById("frame").removeChild(document.getElementById("dzd"+(i+1)));//子彈消失后刪除节点，减小frame压力
			}
		}
	}
}

//绘制结束的函数
function over(){
	var frame = document.getElementById("frame");
	var divover = document.createElement("div");
	divover.setAttribute("id", "over");
	divover.style.width="900px";
	divover.style.height="600px";
	divover.style.index="9999";
	divover.style.position="absolute";
	divover.style.index="9000";
	divover.style.background="url(../../images/tkdbj2.png)";
	frame.appendChild(divover);
}

//重启游戏的函数
function refresh(){
	history.go(0);
}




