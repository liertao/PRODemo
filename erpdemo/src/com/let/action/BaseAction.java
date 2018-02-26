package com.let.action;

import java.lang.reflect.ParameterizedType;
import java.util.Map;

import org.apache.struts2.interceptor.ApplicationAware;
import org.apache.struts2.interceptor.RequestAware;
import org.apache.struts2.interceptor.SessionAware;

import com.let.service.AccountService;
import com.let.service.CategoryService;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
@SuppressWarnings({"unchecked", "serial"})
public class BaseAction<T> extends ActionSupport implements RequestAware,
		SessionAware, ApplicationAware,ModelDriven<T> {

	protected T model;
	protected Map<String,Object> request;
	protected Map<String,Object> session;
	protected Map<String,Object> application;
	protected CategoryService categoryService;
	protected AccountService accountService;
	
	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}
	
	public void setAccountService(AccountService accountService) {
		this.accountService = accountService;
	}
	
	public void setRequest(Map<String, Object> request) {
		this.request = request;
	}

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public void setApplication(Map<String, Object> application) {
		this.application = application;		
	}
	
	public T getModel() {
		ParameterizedType type = (ParameterizedType)this.getClass().getGenericSuperclass();
		Class clazz = (Class)type.getActualTypeArguments()[0];
		try{
			model = (T)clazz.newInstance();
		}catch(Exception e){
			throw new RuntimeException(e);
		}
		return model;
	}
	
}
