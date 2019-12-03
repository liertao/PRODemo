package let.youxi.test;

import let.youxi.servlet.DataServlet;
import let.youxi.utils.JDBCUtil;

import org.junit.Test;

public class TestConnection {
	@Test
	public void testConn() throws Exception {
		JDBCUtil jUtil = new JDBCUtil();
		System.out.println(jUtil.getConnection());
	}
}
