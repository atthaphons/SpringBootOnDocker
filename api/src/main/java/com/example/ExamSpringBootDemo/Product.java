package com.example.ExamSpringBootDemo;


public class Product {
	private long id;
	private String name;
	private String email;
	
	
	public Product(long id, String name, String category) {
		super();
		this.id = id;
		this.name = name;
		this.email = category;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return email;
	}
	public void setCategory(String category) {
		this.email = category;
	}
		
}
