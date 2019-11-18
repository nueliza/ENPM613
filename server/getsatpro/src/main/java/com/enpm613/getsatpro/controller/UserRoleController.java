package com.enpm613.getsatpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enpm613.getsatpro.model.UserRoleEntity;
import com.enpm613.getsatpro.services.UserRoleService;


@RestController
@RequestMapping(value="/userrole")
public class UserRoleController {

	
		
		@RequestMapping("/index")
		public String index() {
			return "This is index for Login responses";		
		}
		
		@Autowired
		private UserRoleService userRoleService;
		
		@PostMapping("/addnewuserrole")
		public UserRoleEntity addUser(@RequestBody UserRoleEntity newRole) {
			
			return userRoleService.addnewRole(newRole);
			
		}
		
		@GetMapping("/showalluserroles")
		public List<UserRoleEntity> getAllUserRoles(){
			return userRoleService.getAllRoles();
		}
		
		
		 @GetMapping(value = "/showSpecificUser/{id}") 
		 public UserRoleEntity getSingleUserRole(@PathVariable("id") Integer id){
			 return userRoleService.getUserRole(id); }
		 
		 
		 @PutMapping(value = "/updateUser/{id, userRole}")
		public UserRoleEntity updateUserRole(@PathVariable("id") Integer id, @PathVariable("userRole") String userRole) {
			return userRoleService.updateUserRole(id, userRole);
		}
		
		
		
	
}
