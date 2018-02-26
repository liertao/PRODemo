package com.let.service.impl;

import com.let.model.Account;
import com.let.service.AccountService;
/**
 * service和dao在一起，没有抽取的情况
 * @author Administrator
 *
 */
public class AccountServiceImpl extends BaseServiceImpl<Account> implements AccountService{
	
//	private SessionFactory sessionFactory;
//	
//	protected Session getSession(){
//		return sessionFactory.getCurrentSession();
//	}
//	
//	public void setSessionFactory(SessionFactory sessionFactory) {
//		this.sessionFactory = sessionFactory;
//	}
	
	/**
	 * spring和hibernate没有整合，单独使用hibernate
	 */
//	public void save(Category category) {
//		//通过工具获取session
//		Session session = HibernateSessionFactory.getSession();
//		try{
//			//手动开启事务
//			session.getTransaction().begin();
//			//业务逻辑
//			session.save(category);
//			//提交事务
//			session.getTransaction().commit();
//		}catch(Exception e){
//			session.getTransaction().rollback();
//			throw new RuntimeException(e);
//		}finally{
//			HibernateSessionFactory.closeSession();
//		}
//	}
	
//	/**
//	 * 保存方法
//	 */
//	public void save(Category category) {
//		getSession().save(category);
//	}
//	/**
//	 * 更新方法
//	 */
//	public void update(Category cateGory) {
//		getSession().update(cateGory);
//	}
//	/**
//	 * 删除方法
//	 */
//	public void delete(int id) {
////		Object object = getSession().get(Category.class, id);
////		if(object!=null){
////			getSession().delete(id);
////		}
//		String hql = "DELETE Category WHERE id=:id";
//		getSession().createQuery(hql)//
//					.setInteger("id", id)//
//					.executeUpdate();
//		
//	}
//
//	public Category get(int id) {
//		return (Category)getSession().get(Category.class, id);
//	}
//
//	public List<Category> query() {
//		String hql = "FROM Category";
//		return getSession().createQuery(hql).list();
//	}
	
}
