package com.let.model;

/**
 * Category entity.
 * 
 * @author MyEclipse Persistence Tools
 */
public class Category implements java.io.Serializable {
	// Fields
	private Integer id;
	private String type;
	private boolean hot;
	private Integer aid;

	// Constructors
	/** default constructor */
	public Category() {
	}

	public Category(Integer id, String type, boolean hot, Integer aid) {
		super();
		this.id = id;
		this.type = type;
		this.hot = hot;
		this.aid = aid;
	}

	/** full constructor */
	public Category(String type, boolean hot, Integer aid) {
		this.type = type;
		this.hot = hot;
		this.aid = aid;
	}

	// Property accessors
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the hot
	 */
	public boolean isHot() {
		return hot;
	}

	/**
	 * @param hot the hot to set
	 */
	public void setHot(boolean hot) {
		this.hot = hot;
	}

	public Integer getAid() {
		return this.aid;
	}

	public void setAid(Integer aid) {
		this.aid = aid;
	}
	
	public String toString() {
		return this.getClass().getSimpleName()+"["+this.id+","+this.getType()+","+this.aid+"]";
	}
}
