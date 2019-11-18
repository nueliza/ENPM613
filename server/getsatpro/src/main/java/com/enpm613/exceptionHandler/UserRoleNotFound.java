package com.enpm613.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserRoleNotFound extends RuntimeException{
	
	public UserRoleNotFound(Integer id) {
		super("User Role " + id + " not Found");
	} 

}
