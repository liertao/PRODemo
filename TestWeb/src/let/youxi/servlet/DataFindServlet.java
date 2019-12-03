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
public class DataFindServlet extends HttpServlet {
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
		String data = "";
		try {
			conn = JDBCUtil.getConnection();
			statement = conn.createStatement();
			ResultSet res = statement.executeQuery("SELECT\n" + "	CASE LEVEL\n"
					+ "WHEN 1 THEN\n" + "	'简单'\n" + "WHEN 2 THEN\n" + "	'中等'\n"
					+ "ELSE\n" + "	'困难'\n" + "END AS LEVEL,\n"
					+ " CASE vlevel\n" + "WHEN 1 THEN\n" + "	'低速'\n"
					+ "WHEN 2 THEN\n" + "	'中速'\n" + "ELSE\n" + "	'高速'\n"
					+ "END AS vlevel,\n" + " score,\n" + " date\n" + "FROM\n"
					+ "	score\n" + "WHERE\n" + "	1 = 1\n" + "AND LEVEL = "
					+ level + "\n" + "AND vlevel = " + vlevel + "\n"
					+ "ORDER BY\n" + "	score DESC\n" + "LIMIT 10");
			while(res.next()) {
				data += "";
				String levelR = res.getString("level");
				String vlevelR = res.getString("vlevel");
				String scoreR = res.getString("score");
				String dateR = res.getString("date");
				// data += "'level':" + levelR + ",'vlevel':" + vlevelR +
				// ",'score':"
				// + scoreR + ",'date':'" + dateR + "'}";
				data += levelR + "," + vlevelR + "," + scoreR + "," + dateR
						+ "#";
			}
			data += "";
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
