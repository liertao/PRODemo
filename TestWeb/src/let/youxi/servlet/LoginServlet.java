package let.youxi.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import let.youxi.utils.JDBCUtil;

/**
 * 操作数据的Servlet
 * 
 * @author ertaoL
 */
@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		Connection conn = null;
		Statement statement = null;
		ResultSet result = null;
		@SuppressWarnings("unused")
		PrintWriter printWriter = resp.getWriter();
		// 获取参数
		String logId = req.getParameter("logId");
		String pwd = req.getParameter("pwd");
		String data = "{success:false,msg:'用户名错误'}";
		boolean con = false;
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			HttpSession httpSession = req.getSession();
			ResultSet res = statement.executeQuery("select l.log_id,l.pwd,l.log_name from log l where l.log_id = '"+ logId +"'");
			while(res.next()) {
				String pwdTr = res.getString("pwd");
				if(!pwd.equals(pwdTr)){
					data = "{success:false,msg:'密码错误'}";
				}else{
					httpSession.setAttribute("logId", logId);
					con = true;
				}
			}
			if(con){
				ResultSet resRole = statement.executeQuery("SELECT l.log_id,l.log_name,u.role_id from log l, role_user u where l.log_id = u.log_id and l.log_id = '"+ logId +"'");
				String rolesList = "";
				while(resRole.next()){
					String role = resRole.getString("role_id");
					rolesList += role+",";
				}
				if(!"".equals(rolesList))
					rolesList = rolesList.substring(0,rolesList.length()-1);
				httpSession.setAttribute("rolesList", rolesList);
				data = "{success:true,roles:'"+ rolesList +"', msg:'登录成功'}";
			}
			printWriter.write(data);
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			printWriter.flush();
			printWriter.close();
			JDBCUtil.release(statement, conn, result);
		}
	}
}
