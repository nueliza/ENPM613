package com.enpm613.getsatpro.services;

import java.security.cert.PKIXRevocationChecker.Option;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.enpm613.Helper.DateTimeHelper;
import com.enpm613.exceptionHandler.InvalidLoginCredentials;
import com.enpm613.exceptionHandler.LoginAccountNotFound;
import com.enpm613.getsatpro.customresponse.LoginResponse;
import com.enpm613.getsatpro.model.LoginEntity;
import com.enpm613.getsatpro.repository.LoginRepository;

@Component
public class LoginService {
	
	@Autowired
	private LoginRepository loginRepository;
	
	private List<LoginEntity> allUsers = new CopyOnWriteArrayList<LoginEntity>();
	
	public LoginEntity addUsers(LoginEntity newUser){
		
		loginRepository.save(newUser);
		
		return newUser;
	}
	
	public List<LoginEntity> getAllUsers(){
		return loginRepository.findAll();
	}
	
	public LoginEntity getUser(String userName) {
		Optional<LoginEntity> user = loginRepository.findByUserName(userName);
		
		if(!user.isPresent()) {
			throw new LoginAccountNotFound(userName);
		}
			
		return loginRepository.findByUserName(userName).get();
	}
	
	public LoginEntity updateUserInfoLastLogin(String userName) {
			
		LoginEntity user = loginRepository.findByUserName(userName).get();
		
		user.setLastLogin(DateTimeHelper.getInstance().getLatestTime());
		
		loginRepository.save(user);
		
		return user;
	}

	public LoginEntity deleteUserInfoLastLogin(String userName) {
		 
		LoginEntity deletingUser = loginRepository.findByUserName(userName).get();
		
		loginRepository.deleteByUserName(userName);
		
		return deletingUser;
		
	}
	
	
	public LoginEntity getUserWithRole(String userName) {
		 
		LoginEntity deletingUser = loginRepository.findByUserName(userName).get();
		
		loginRepository.deleteByUserName(userName);
		
		return deletingUser;
		
	}
	
	public LoginResponse authenticateUser(String userName, String password) {
		Optional<LoginEntity> user = loginRepository.findByUserName(userName);
		
		if(!user.isPresent()) {
			throw new LoginAccountNotFound(userName);
		}
		
		LoginEntity userInfo = user.get();
		
		if(!userInfo.getLoginPassword().equals(password)) {
			throw new InvalidLoginCredentials(userName);
		}
		
		return createLoginResponse(userInfo);
		
	}	
	
    private static LoginResponse createLoginResponse(LoginEntity entity) {

    	LoginResponse user = new LoginResponse();

    	user.setUserType(entity.getUserRoleEntity().getUserType());
        
    	Map<String, String> userInfo = new HashMap();
    	userInfo.put("FirstName",entity.getFirstName());
    	userInfo.put("LastName",entity.getLastName());
    	userInfo.put("userId",entity.getUid().toString());
    	userInfo.put("lastloggedIn",entity.getLastLogin());
    	user.setUserInfo(userInfo);

        return user;

    }
		
}
