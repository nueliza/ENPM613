package com.enpm613.getsatpro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.enpm613.getsatpro.model.UserRoleEntity;

public interface UserRoleRepository extends CrudRepository<UserRoleEntity, Integer>{
	
	List<UserRoleEntity> findAll();

}
