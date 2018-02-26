package com.let.test;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.let.model.Account;
import com.let.service.AccountService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:applicationContext-*.xml")
public class AccountServiceImplTest {
	
	@Resource
	private AccountService accountService;
	
	@Test
	public void testSave() {
		accountService.save(new Account("admin123","管理员123","admin123"));
	}
//
//	//@Test
//	public void testUpdate() {
//		categoryService.update(new Category(3,"男士休闲22",true));
//	}
//
//	//@Test
//	public void testQuery() {
//		for(Category temp:categoryService.query()){
//			System.out.println(temp);
//		}
//	}
//	
//	//@Test
//	public void testGet() {
//		System.out.println(categoryService.get(3));
//	}
//	
//	@Test
//	public void testDelete() {
//		categoryService.delete(3);
//	}
}
