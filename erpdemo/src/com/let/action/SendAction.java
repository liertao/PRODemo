package com.let.action;

import com.opensymphony.xwork2.ActionSupport;
/**
 * 此action用来完成wen-inf中jsp页面与jsp页面请求转发，不处理任何的业务逻辑
 * @author Administrator
 *
 */
public class SendAction extends ActionSupport {
	
	private static final long serialVersionUID = 1L;

	public String execute(){
		
		return "send";
	}
}
