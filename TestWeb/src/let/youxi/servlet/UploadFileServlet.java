package let.youxi.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class UploadFileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.getWriter().println("请以POST方式访问该URL");
	}

	@SuppressWarnings("unchecked")
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// 设置请求和响应的编码格式
		// String encoding = getServletContext().getInitParameter("encoding");
		 req.setCharacterEncoding("utf-8");
		 resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		// 核心Api
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload fileUpload = new ServletFileUpload(factory);
		// 判断是否是muitipart/form-data类型
//		if(!ServletFileUpload.isMultipartContent(req)) {
//			resp.getWriter().println("表单的enctype属性不是multipart/form-data类型");
//		}
		// 设置单个文件上传大小 6M
		fileUpload.setFileSizeMax(6 * 1024 * 1024);
		// 设置总上传文件大小(有时候一次性上传多个文件，需要有一个上限,此处为10M)
		fileUpload.setSizeMax(10 * 1024 * 1024);
		// 设置上传监听器[参数为自定义的监听器]
		fileUpload.setProgressListener(new ListenerUploadProgress());
		// 解析请求
		try {
			List<FileItem> parseRequest = fileUpload.parseRequest(req);
			// 获取数据
			for(FileItem fileItem : parseRequest) {
				// 判断数据类型是不是普通的form表单字段
				if(!fileItem.isFormField()) {
					// 上传文件
					String fileName = fileItem.getName();
					InputStream fileStream = fileItem.getInputStream();
					// 定义保存的父路径
					String parentDir = this.getServletContext().getRealPath(
							File.separator + "upload");
					// 使用UUID+文件名的方式，避免文件重名
					String realFileName = UUID.randomUUID().toString() + "-"
							+ fileName;
					realFileName = fileName;
					// 创建要保存的文件
					File file = new File(parentDir, realFileName);
					// 判断文件夹是否存在
					if(!file.getParentFile().exists()) {
						// 创建文件夹[多级文件夹]file.madir是创建单一文件夹
						file.getParentFile().mkdirs();
					}
					// 创建输出流
					OutputStream out = new FileOutputStream(file);
					// 创建字节缓存
					byte[] buffer = new byte[1024];
					int len = -1;
					// 一次读取1kb(1024byte),返回-1表明读取完毕
					while((len = fileStream.read(buffer)) != -1) {
						// 一次写入1kb(1024byte)
						out.write(buffer, 0, len);
					}
					out.close();
					fileStream.close();
				} else {
					// 普通字段
					// 字段名
					String fieldName = fileItem.getFieldName();
					// 字段值
					String fieldValue = fileItem.getString();
					System.out.println(fieldName + ":" + fieldValue);
				}
				resp.sendRedirect("/web/html/items/files.html");
//				req.getRequestDispatcher("/html/youxi/sqlutil.html").forward(req, resp);
			}
		} catch(FileUploadException e) {
			e.printStackTrace();
		}
	}
}
