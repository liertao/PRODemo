package let.youxi.servlet;

import org.apache.commons.fileupload.ProgressListener;

public class ListenerUploadProgress implements ProgressListener {
	/**
	 * @param bytesRead
	 *            已经读取的字节数
	 * @param contentLength
	 *            文件总长度
	 * @param items
	 *            当前上传的是哪个文件
	 */
	public void update(long bytesRead, long contentLength, int items) {
		System.out.println(bytesRead);
		System.out.println(contentLength);
		System.out.println(items);
	}
	// *前端可以根据该信息写一个上传进度条
}
