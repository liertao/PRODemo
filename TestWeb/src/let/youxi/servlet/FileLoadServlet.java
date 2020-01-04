package let.youxi.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class FileLoadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PrintWriter printWriter = resp.getWriter();
		String data = "{root:[";
		// 通过路径得到一个输入流
		String path = this.getServletContext().getRealPath(
				File.separator + "WEB-INF" + File.separator + "upload"
						+ File.separator);
		File file = new File(path);
		String[] files = file.list();
		for(int i = 0; i < files.length; i++) {
			data += "{name:" + files[i] + "},";
		}
		if(data.indexOf("name") > 0)
			data = data.substring(0, data.length() - 1) + "]";
		printWriter.write(data);
	}

	@SuppressWarnings("unchecked")
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("application/json");
		PrintWriter printWriter = resp.getWriter();
		String data = "{root:[";
		// 通过路径得到一个输入流
		String type = req.getScheme();
		String ip = req.getServerName();
		int port = req.getServerPort();
		String webname = this.getServletContext().getContextPath();
		String path = this.getServletContext().getRealPath(
				File.separator + "upload" + File.separator);
		File file = new File(path);
		String[] files = file.list();
		for(int i = 0; i < files.length; i++) {
			data += "{name:'" + files[i] + "',href:'" + type + "://" + ip + ":"
					+ port + webname + "/upload/" + files[i] + "'},";
		}
		HttpSession httpSession = req.getSession();
		String rolesList = (String)httpSession.getAttribute("rolesList");
		if(data.indexOf("name") > 0)
			data = data.substring(0, data.length() - 1) + "],success:true,rolesList:'"+ rolesList +"'}";
		data = data.replaceAll("\\\\", "#");
		printWriter.write(data);
	}
}
