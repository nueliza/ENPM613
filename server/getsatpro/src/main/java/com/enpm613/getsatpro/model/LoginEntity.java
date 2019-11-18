package com.enpm613.getsatpro.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.hibernate.annotations.Generated;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name="user_info")
public class LoginEntity {
	
/**
 * uid int(10) UN AI PK 
 * first_name varchar(50) 
 * last_name varchar(50) 
 * email varchar(100) 
 * phone bigint(10) 
 * user_name varchar(50) 
 * role_id int(10) UN 
 * last_login datetime 
 * login_password varchar(45) 
 * security_password varchar(45) 
 * module_id int(10) UN
*/
		
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@JsonProperty("Id")
	@Column(name = "uid")
	private Integer uid;
	@JsonProperty("firstName")
	@Column(name = "first_name")
	private String firstName;
	@JsonProperty("lastName")
	@Column(name = "last_name")
	private String lastName;
	@JsonProperty("email")
	@Column(name = "email")
	private String email;
	@JsonProperty("phoneNumber")
	@Column(name = "phone")
	private Long phone;
	@JsonProperty("userName")
	@Column(name = "user_name")
	private String userName;
	@JsonProperty("roleId")
	@Column(name = "role_id")
	private Integer roleId;
	@JsonProperty("lastLoginDate")
	@Column(name = "last_login")
	private String lastLogin;
	@JsonIgnore()
	@JsonProperty("loginPassword")
	@Column(name = "login_password")
	private String loginPassword;
	@JsonProperty("securityPassword")
	@Column(name = "security_password")
	@JsonIgnore()
	private String securityPassword;
	@JsonProperty("moduleId")
	@Column(name = "module_id")
	private Integer moduleId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "role_id", insertable = false, updatable = false)
	private UserRoleEntity userRoleEntity;

	public Integer getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getRoleId() {
		return roleId;
	}
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	public String getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(String lastLogin) {
		this.lastLogin = lastLogin;
	}
	public String getLoginPassword() {
		return loginPassword;
	}
	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}
	public String getSecurityPassword() {
		return securityPassword;
	}
	public void setSecurityPassword(String securityPassword) {
		this.securityPassword = securityPassword;
	}
	public Integer getModuleId() {
		return moduleId;
	}
	public void setModuleId(Integer moduleId) {
		this.moduleId = moduleId;
	}
	
	public UserRoleEntity getUserRoleEntity() {
		return userRoleEntity;
	}

	public void setUserRoleEntity(UserRoleEntity userRoleEntity) {
		this.userRoleEntity = userRoleEntity;
	}	 
	
	
}
