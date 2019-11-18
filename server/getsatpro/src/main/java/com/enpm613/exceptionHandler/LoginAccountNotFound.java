package com.enpm613.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class LoginAccountNotFound extends RuntimeException{
	
	public LoginAccountNotFound (String userName) {
		super("No account found with username: " + userName);
		
	}

}
 