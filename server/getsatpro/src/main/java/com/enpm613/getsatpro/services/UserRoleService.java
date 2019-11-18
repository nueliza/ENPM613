package com.enpm613.getsatpro.services;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.enpm613.exceptionHandler.UserRoleNotFound;
import com.enpm613.getsatpro.model.UserRoleEntity;
import com.enpm613.getsatpro.repository.UserRoleRepository;

@Component
public class UserRoleService {

	
	@Autowired
	private UserRoleRepository userRoleRepository;
	
	private List<UserRoleEntity> allUsers = new CopyOnWriteArrayList<UserRoleEntity>();
	
	public UserRoleEntity addnewRole(UserRoleEntity newRole){
		
		userRoleRepository.save(newRole);
		return newRole;
	}
	
	public List<UserRoleEntity> getAllRoles(){
		return userRoleRepository.findAll();
	}
	
	public UserRoleEntity getUserRole(Integer id) {
		Optional<UserRoleEntity> user = userRoleRepository.findById(id);
		
		if(!user.isPresent()) {
			throw new UserRoleNotFound(id);
		}
			
		return userRoleRepository.findById(id).get();
	}
	
	public UserRoleEntity updateUserRole(Integer id, String userType) {
			
		UserRoleEntity userRole = userRoleRepository.findById(id).get();
		userRole.setUserType(userType);;
		
		userRoleRepository.save(userRole);
		
		return userRole;
	}

	public UserRoleEntity deleteUserInfoLastLogin(Integer id) {
		 
		UserRoleEntity deletingUserRole = userRoleRepository.findById(id).get();
		
		userRoleRepository.deleteById(id);
		
		return deletingUserRole;
		
	}
	
}
