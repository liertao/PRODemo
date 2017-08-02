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
		//���������Դ·��
		String uri = request.getRequestURI();
		String path = uri.substring(uri.lastIndexOf("/")+1, uri.lastIndexOf("."));
		
		if(path.equals("get_text")){//get����
			out.println("�������ǵ���");
		}else if(path.equals("post_text")){
			String uname = request.getParameter("uname");
			
			out.println("����һ�ε�"+uname);
		}else if(path.equals("check_name")){
			String uname = request.getParameter("uname");
			//ģ��һ����ʱ�Ĳ���
			if(1==1){
				try{
					Thread.sleep(1000);
				}catch(Exception e){
					e.printStackTrace();
				}
			}
			if("ertao".equals(uname)){
				out.println("���û���������");
			}else if(uname==null||"".equals(uname)){
				out.println("�û�������Ϊ��");
			}else{
				out.println("�û�������ʹ��");
			}
			
		}else if(path.equals("getCity")){
			String name = request.getParameter("name");
			if("bj".equals(name)){
				out.println("����,cy;����,dc");
			}else if("sh".equals(name)){
				out.println("����,ja;����,hp;�ֶ���,pdx");
			}else{
				out.println("����,by;��خ,py");
			}
		}
		out.close();
	}

}
