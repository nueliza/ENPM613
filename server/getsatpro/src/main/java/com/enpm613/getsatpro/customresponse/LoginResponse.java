package com.enpm613.getsatpro.customresponse;

import java.util.Map;


/**
 * 
 * @author ksaxena
 *
 *         Custom response for login object { "userInfo": { "FirstName": "John",
 *         "LastName": "Doe", "userId": 122333, "lastloggedIn": "#####" },
 *         "modules": [ { "moduleName": "Math", "progress": "75%" }, {
 *         "moduleName": "English", "progress": "40%" } ], "userType": "Student"
 *         }
 *
 */
public class LoginResponse {

	    private String userType;    
//	    private Map<String, String> modulesDetails;
	    private Map<String, String> userInfo;
		
	    
	    public String getUserType() {
			return userType;
		}
		public void setUserType(String userType) {
			this.userType = userType;
		}
		public Map<String, String> getUserInfo() {
			return userInfo;
		}
		public void setUserInfo(Map<String, String> userInfoDetail) {
			this.userInfo = userInfoDetail;
		}

}
