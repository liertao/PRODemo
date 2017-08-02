package web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ActionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		//获得请求资源路径
		String uri = request.getRequestURI();
		String path = uri.substring(uri.lastIndexOf("/")+1, uri.lastIndexOf("."));
		
		if(path.equals("get_text")){//get请求
			out.println("来自星星的你");
		}else if(path.equals("post_text")){
			String uname = request.getParameter("uname");
			
			out.println("又来一次的"+uname);
		}else if(path.equals("check_name")){
			String uname = request.getParameter("uname");
			//模拟一个耗时的操作
			if(1==1){
				try{
					Thread.sleep(1000);
				}catch(Exception e){
					e.printStackTrace();
				}
			}
			if("ertao".equals(uname)){
				out.println("该用户名不可用");
			}else if(uname==null||"".equals(uname)){
				out.println("用户名不能为空");
			}else{
				out.println("用户名可以使用");
			}
			
		}else if(path.equals("getCity")){
			String name = request.getParameter("name");
			if("bj".equals(name)){
				out.println("朝阳,cy;东城,dc");
			}else if("sh".equals(name)){
				out.println("静安,ja;黄埔,hp;浦东新,pdx");
			}else{
				out.println("白云,by;番禺,py");
			}
		}
		out.close();
	}

}
