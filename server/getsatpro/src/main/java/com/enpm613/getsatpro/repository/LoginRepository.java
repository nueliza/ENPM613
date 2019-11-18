package com.enpm613.getsatpro.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.enpm613.getsatpro.model.LoginEntity;

public interface LoginRepository extends CrudRepository<LoginEntity, Integer>{
	
	
	@Override
	List<LoginEntity> findAll();

	Optional<LoginEntity> findByUserName(String userName);

	void deleteByUserName(String userName);
	
//	Optional<LoginEntity> findByUserRole(Integer roleId);
	
}
