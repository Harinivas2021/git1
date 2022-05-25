package com.UserRegistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.UserRegistration.Model.User;
import com.UserRegistration.repository.UserRepository;

@Service
public class UserService {

	
	@Autowired
	private UserRepository userRepository;

	public User registerUsers(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}
	
	public User fetchByUserName(String tempUser) {
		
		return userRepository.findByUserName(tempUser);
		
	}

	public User fetchByUserNameAndPassword(String tempUserName, String tempPassword) {
		// TODO Auto-generated method stub
		return userRepository.findByUserNameAndPassword(tempUserName,tempPassword);
	}
	
}
