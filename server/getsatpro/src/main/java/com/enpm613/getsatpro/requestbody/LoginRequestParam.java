package com.enpm613.getsatpro.requestbody;

import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
public class LoginRequestParam {
	
	private String username;
	private String password;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
