<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<%@ include file="public/head.jspf" %>
</head>
	<body class="easyui-layout">
	    <div data-options="region:'north',title:'North Title',split:true" style="height:100px;"></div>   
	    <div data-options="region:'south',title:'South Title',split:true" style="height:100px;"></div>   
	    <div data-options="region:'east',iconCls:'icon-reload',title:'East',split:true" style="width:100px;"></div>   
	    <div data-options="region:'west',title:'West',split:true" style="width:100px;"></div>   
	    <div data-options="region:'center',title:'center title'" style="padding:5px;background:#eee;"></div>   
	</body> 
</html>