<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'index.jsp' starting page</title>
  </head>
  
  <body>
    <a href="${pageContext.request.contextPath}/category_update.action?id=1&type=男士休闲&hot=true&aid=1">访问update</a>
    <a href="category_save.action">访问save</a>
  </body>
</html>
