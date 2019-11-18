package com.enpm613.getsatpro.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enpm613.getsatpro.customresponse.LoginResponse;
import com.enpm613.getsatpro.model.LoginEntity;
import com.enpm613.getsatpro.requestbody.LoginRequestParam;
import com.enpm613.getsatpro.services.LoginService;
import com.fasterxml.jackson.databind.util.JSONPObject;

@RestController
@RequestMapping(value="/login")
public class LoginController {
	
	@RequestMapping("/index")
	public String index() {
		return "This is index for Login responses";		
	}
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/addnewuser")
	public LoginEntity addUser(@RequestBody LoginEntity newUser) {
		
		return loginService.addUsers(newUser);
		
	}
	
	@GetMapping("/showAllUsers")
	public List<LoginEntity> getAllUsers(){
		return loginService.getAllUsers();
	}
	
	
	 @GetMapping(value = "/showSpecificUser/{userName}") 
	 public LoginEntity getSingleUsers(@PathVariable("userName") String userName){
		 return loginService.getUser(userName); }
	 
	 
	 @PutMapping(value = "/updateUser/{userName}")
	public LoginEntity updateUserInfoLastLogin(@PathVariable("userName") String userName) {
		return loginService.updateUserInfoLastLogin(userName);
	}
	 
	@PostMapping("/authenticate")
	@Valid
	public LoginResponse getAuthentication(@Valid @RequestBody LoginRequestParam credentials) {	
		LoginResponse entity = loginService.authenticateUser(credentials.getUsername(), credentials.getPassword());			
		return entity;
	}
	
}
