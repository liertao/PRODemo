package com.let.test;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.let.model.Category;
import com.let.service.CategoryService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:applicationContext-*.xml")
public class CategoryServiceImplTest {
	
	@Resource
	private CategoryService categoryService;
	
	//@Test
//	public void testSave() {
//		categoryService.save(new Category("男士休闲",true));
//	}
//
	@Test
	public void testUpdate() {
		categoryService.update(new Category(3,"儿童休闲",true,2));
	}
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
