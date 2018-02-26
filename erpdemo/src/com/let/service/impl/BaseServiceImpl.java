package com.let.service.impl;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.let.service.BaseService;
@SuppressWarnings("unchecked")
public class BaseServiceImpl<T> implements BaseService<T> {
	
	private Class clazz;//clazz中存储了当前操作的类型
	
	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	protected Session getSession(){
		return sessionFactory.getCurrentSession();
	}
	
	public BaseServiceImpl(){
//		System.out.println("this代表的是当前调用构造方法的对象："+this);
//		System.out.println("获取当前this对象的父类信息："+this.getClass().getSuperclass());
//		System.out.println("获取当前this对象的父类信息(包含泛型类型)："+this.getClass().getGenericSuperclass());
		ParameterizedType type = (ParameterizedType)this.getClass().getGenericSuperclass();
		clazz = (Class)type.getActualTypeArguments()[0];
//		System.out.println("泛型类名："+clazz.getSimpleName());
//		System.out.println("泛型类型："+clazz);
	}
	
	public void save(T t) {
		getSession().save(t);
	}

	public void update(T t) {
		getSession().update(t);
	}
	
	public void delete(int id) {
		String hql = "DELETE "+ clazz.getSimpleName() +" WHERE id=:id";
		getSession().createQuery(hql)//
					.setInteger("id", id)//
					.executeUpdate();
	}

	public T get(int id) {
		return (T)getSession().get(clazz, id);
	}

	public List<T> query() {
		String hql = "FROM "+clazz.getSimpleName();
		return getSession().createQuery(hql).list();
	}

	
}
