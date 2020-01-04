package let.youxi.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 退出登录的servlet
 * 
 * @author liertao
 */
public class SignOutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		HttpSession httpSession = req.getSession();
		// 清理session的登录信息
		httpSession.removeAttribute("logId");
		// 重定向到登录界面 绝对路径
		resp.sendRedirect("/web/login.html");
	}
}
