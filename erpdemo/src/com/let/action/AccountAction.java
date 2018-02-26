package com.let.action;

import com.let.model.Account;

@SuppressWarnings("serial")
public class AccountAction extends BaseAction<Account> {
	
//	private Category category;
//
//	public Category getCategory() {
//		return category;
//	}
//
//	public void setCategory(Category category) {
//		this.category = category;
//	}
//
//	private CategoryService categoryService;
//
//	public void setCategoryService(CategoryService categoryService) {
//		this.categoryService = categoryService;
//	}

	public String update() {
		System.out.println("----update----");
		System.out.println(model);
		accountService.update(model);
		//categoryService.update(model);
		return "index";
	}

	public String save() {
		System.out.println("----save----");
		//System.out.println(categoryService);
		return "index";
	}
}
