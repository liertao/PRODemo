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
public class DataServlet extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		Connection conn = null;
		Statement statement = null;
		ResultSet result = null;
		@SuppressWarnings("unused")
		PrintWriter printWriter = resp.getWriter();
		// 获取参数
		String level = req.getParameter("level");
		String vlevel = req.getParameter("vlevel");
		String score = req.getParameter("score");
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			statement
					.execute("insert into score(level,vlevel,score, date) values("
							+ level
							+ ","
							+ vlevel
							+ ","
							+ score
							+ ", sysdate())");
			printWriter.write("成功");
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			printWriter.flush();
			printWriter.close();
			JDBCUtil.release(statement, conn, result);
		}
	}
}
