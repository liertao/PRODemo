package com.let.test;

import java.util.Date;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.let.model.Category;
import com.let.service.CategoryService;
import com.let.service.impl.CategoryServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:applicationContext-*.xml")
public class SSHTest {
	
	@Resource
	private Date date;
	
	@Resource
	private CategoryService categoryService;
	
	/**
	 * 测试spring环境
	 */
	//@Test
	public void date(){
		System.out.println(date);
	}
	
	/**
	 * 测试hibernate环境
	 */
	//@Test
//	public void save(){
//		CategoryService categoryService = new CategoryServiceImpl();
//		categoryService.save(new Category("男士休闲",true));
//	}
//	/**
//	 * spring和hibernate整合测试
//	 */
//	@Test
//	public void update(){
//		categoryService.update(new Category(1,"女士休闲",false));
//	}
	
}
