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
		String findItem = req.getParameter("findItem");
    	String findItemcomm = req.getParameter("findItemcomm");
    	String findItemdev = req.getParameter("findItemdev");
    	String findItemstatus = req.getParameter("findItemstatus");
    	String findItemteststatus = req.getParameter("findItemteststatus");
		PrintWriter printWriter = resp.getWriter();
		// 获取参数
		String data = "";
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			String findSql = "SELECT\n" +
			"	@rownum :=@rownum + 1 AS iid,\n" +
			"	s.id,\n" +
			"	s.item_name,\n" +
			"	s.item_comment,\n" +
			"	s.item_logid,\n" +
			"	date_format(s.item_plan_donedate,'%Y-%m-%d') as item_plan_donedate,\n" +
			"	s.item_status,\n" +
			"	s.test_status,\n" +
			"	s.is_doc,\n" +
			"	s.create_user,\n" +
			"	s.create_date\n" +
			"FROM\n" +
			"	(SELECT @rownum := 0) r,\n" +
			"	dev_items s\n" +
			"WHERE\n" +
			"	1 = 1";
			if(null!=findItem && !"".equals(findItem)){
				findSql += " and s.item_name like '%"+ new String(findItem.getBytes("8859_1"), "utf8") +"%' ";
			}
			if(null!=findItemcomm && !"".equals(findItemcomm)){
				findSql += " and s.item_comment like '%"+ new String(findItemcomm.getBytes("8859_1"), "utf8") +"%' ";
			}
			if(null!=findItemdev && !"".equals(findItemdev)){
				findSql += " and s.item_logid like '%"+ new String(findItemdev.getBytes("8859_1"), "utf8") +"%' ";
			}
			if(null!=findItemstatus && !"".equals(findItemstatus)){
				findSql += " and s.item_status like '%"+ new String(findItemstatus.getBytes("8859_1"), "utf8") +"%' ";
			}
			if(null!=findItemteststatus && !"".equals(findItemteststatus)){
				findSql += " and s.test_status like '%"+ new String(findItemteststatus.getBytes("8859_1"), "utf8") +"%' ";
			}
			
			ResultSet res = statement.executeQuery(findSql);
			while(res.next()) {
				data += "{";
				String id = res.getString("id");
				String iid = res.getString("iid");
				String item_name = res.getString("item_name");
				String item_comm = res.getString("item_comment");
				String item_dev = res.getString("item_logid");
				String item_plandate = res.getString("item_plan_donedate");
				String item_status = res.getString("item_status");
				String test_status = res.getString("test_status");
				String is_doc = res.getString("is_doc");
				String create_user = res.getString("create_user");
				String create_date = res.getString("create_date");
				data += "iid:"+iid+",id:"+id+",item_name:'"+item_name+"',item_comm:'"+
				item_comm+"',item_dev:'"+item_dev+"',item_plandate:'"+ item_plandate +"'," +
						"item_status:'"+ item_status +"',test_status:'"+ test_status +"'," +
								"is_doc:'"+ is_doc +"',create_user:'"+ create_user +"'," +
										"create_date:'"+ create_date +"'},";
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
