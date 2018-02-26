<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="java.text.SimpleDateFormat"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<%@ include file="/public/head.jspf" %>
	<style type="text/css">
		#menu{
			width:200px;
		}
		#menu ul{
			list-style:none;
			padding:0px;
			margin:0px;
		}
		#menu ul li{
			border-bottom:1px solid #fff;
		}
		#menu ul li a{
			display:block;
			/*background-color:#008972;*/
			background-color:#ccc;
			color:#fff;
			padding:5px;
			text-decoration:none;
		}
		#menu ul li a:hover{
			background-color:#00a6ac;
		}
	</style>
	<script type="text/javascript">
		$(function(){
			$("a[title]").click(function(){
				var text = $(this).text();
				var href = $(this).attr("title");
				//1,判断当前是否存在 相应的tab
				if($("#tt").tabs("exists",text)){
					//2,如果没有创建一个新的tab，否则切换到当前的tab
					$("#tt").tabs("select",text)
				}else{
					$("#tt").tabs("add",{
						title:text,
						closable:true,
						content:'<iframe src="send_category_category.action" frameborder="0" width="100%" height="100%"/>'
					})
				}
				
			});
		});
	</script>
</head>
	<body class="easyui-layout">
	    <div data-options="region:'north',title:'欢迎来到管理系统',split:true" style="height:100px;padding:5px;">
	    	当前登录用户：系统管理员</br>
	    	登录日期：<%=new SimpleDateFormat("yyyy-MM-dd").format(new Date()) %></br>
	    	用户权限：管理员
	    </div>   
	    <div data-options="region:'west',title:'系统操作',split:true" style="width:200px;">
	    	<!-- 此处显示的是系统菜单 -->
	    	<div id="menu" class="easyui-accordion" data-options="fit:true">   
			    <div title="基本操作">   
			        <ul>
						<li><a href="#" title="title1">类别管理</a></li>
						<li><a href="#" title="title2">商品管理</a></li>
					</ul>  
			    </div>   
			    <div title="其他操作">   
			        <ul>
						<li><a href="#" title="title3">用户管理</a></li>
						<li><a href="#" title="title4">热点管理</a></li>
					</ul>  
			    </div>   
			    <div title="客服操作">   
			        <ul>
						<li><a href="#" title="title5">账务报表</a></li>
						<li><a href="#" title="title6">财报展示</a></li>
					</ul>  
			    </div>   
			</div>
	    </div>   
	    <div data-options="region:'center',title:'操作页面'" style="padding:1px;background:#fff;">
	    	<div id="tt" class="easyui-tabs" data-options="fit:true">   
			    <div title="系统缺省页面" style="padding:20px;">   
			        此处显示相应的系统信息（当前操作系统的类型，包括当前项目的域名，硬件相关配置或者报表）
			    </div>    
			</div>  
	    </div>   
	</body> 
</html>