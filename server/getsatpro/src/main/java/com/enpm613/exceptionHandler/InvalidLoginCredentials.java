package com.enpm613.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidLoginCredentials extends RuntimeException{
	
	public InvalidLoginCredentials(String userName) {
		super("Invalid Password for user: " +  userName);
	}

}
