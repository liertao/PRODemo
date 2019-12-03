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

import let.youxi.utils.JDBCUtil;

/**
 * 操作数据的Servlet
 * 
 * @author ertaoL
 */
@SuppressWarnings("serial")
public class ItemSaveServlet extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		Connection conn = null;
		Statement statement = null;
		ResultSet result = null;
		@SuppressWarnings("unused")
		PrintWriter printWriter = resp.getWriter();
		// 获取参数
		String id = req.getParameter("id");
		String itemName = req.getParameter("item_name");
		String itemComm = req.getParameter("item_comm");
		String itemDev = req.getParameter("item_dev");
		itemName=new String(itemName.getBytes("8859_1"), "utf8");
		itemComm=new String(itemComm.getBytes("8859_1"), "utf8");
		itemDev=new String(itemDev.getBytes("8859_1"), "utf8");
		int count = 0;
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			if(null!=id && !"".equals(id)){//id不为空，表示更新
				int a = statement.executeUpdate("update dev_items s set s.item_name = '"+ itemName +"',s.item_comment = '"+ itemComm +"',s.item_logid = '"+ itemDev +"' where s.id ="+id);
				if(a>=0)
					printWriter.write("{success:true,msg:'保存成功'}");
				else
					printWriter.write("{success:false,msg:'保存失败'}");
			}else{
				result = statement.executeQuery("select COUNT(*) from dev_items s where s.item_name = '"+ itemName +"'");
				while(result.next()){
					count = result.getInt(1);
				}
				if(count>0){
					printWriter.write("{success:false,msg:'开发项["+itemName+"]已经存在，不能重复'}");
				}else{
					statement
					.execute("INSERT INTO dev_items (\n" +
							"	item_name,\n" +
							"	item_comment,\n" +
							"	item_logid\n" +
							")\n" +
							"VALUES\n" +
							"	(\n" +
							"		'"+ itemName +"',\n" +
							"		'"+ itemComm +"',\n" +
							"		'"+ itemDev +"'\n" +
							"	)");
					printWriter.write("{success:true,msg:'操作成功'}");
				}
			}
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			printWriter.flush();
			printWriter.close();
			JDBCUtil.release(statement, conn, result);
		}
	}
}
