package let.youxi.utils;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * 数据库工具类
 * 
 * @author ertaoL
 */
public class JDBCUtil {
	/**
	 * 获取数据库连接
	 * 
	 * @return
	 * @throws Exception
	 */
	public static Connection getConnection() throws Exception {
		String driver = null;
		String jdbcUrl = null;
		String user = null;
		String password = null;
		InputStream inputStream = JDBCUtil.class.getClassLoader()
				.getResourceAsStream("jdbc.properties");
		Properties properties = new Properties();
		properties.load(inputStream);
		driver = properties.getProperty("driver");
		jdbcUrl = properties.getProperty("jdbcUrl");
		user = properties.getProperty("user");
		password = properties.getProperty("password");
		Class.forName(driver);
		Connection conn = (Connection) DriverManager.getConnection(jdbcUrl,
				user, password);
		return conn;
	}

	/**
	 * 关闭数据库连接
	 * 
	 * @param statement
	 * @param conn
	 * @param result
	 */
	public static void release(Statement statement, Connection conn,
			ResultSet result) {
		try {
			if(statement != null) {
				statement.close();
			}
		} catch(SQLException e) {
			e.printStackTrace();
		}
		try {
			if(conn != null) {
				conn.close();
			}
		} catch(SQLException e) {
			e.printStackTrace();
		}
		try {
			if(result != null) {
				result.close();
			}
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}
}
