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
public class ItemFindServlet extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		Connection conn = null;
		Statement statement = null;
		ResultSet result = null;
		@SuppressWarnings("unused")
		PrintWriter printWriter = resp.getWriter();
		// 获取参数
		String data = "";
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			ResultSet res = statement.executeQuery("select @rownum:=@rownum+1 AS iid, s.id,s.item_name,s.item_comment,s.item_logid from (SELECT @rownum:=0) r,dev_items s");
			while(res.next()) {
				data += "{";
				String id = res.getString("id");
				String iid = res.getString("iid");
				String item_name = res.getString("item_name");
				String item_comm = res.getString("item_comment");
				String item_dev = res.getString("item_logid");
				data += "iid:"+iid+",id:"+id+",item_name:'"+item_name+"',item_comm:'"+item_comm+"',item_dev:'"+item_dev+"'},";
			}
			if(!"".equals(data) && null!=data)
				data = data.substring(0,data.length()-1);
			HttpSession httpSession = req.getSession();
			String rolesList = (String)httpSession.getAttribute("rolesList");
			printWriter.write("{root:["+data+"],rolesList:'"+ rolesList +"'}");
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			printWriter.flush();
			printWriter.close();
			JDBCUtil.release(statement, conn, result);
		}
	}
}
