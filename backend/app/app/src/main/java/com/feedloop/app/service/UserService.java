package com.feedloop.app.service;

import com.feedloop.app.model.User;
import com.feedloop.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String saveUser(User user){
        userRepository.save(user);
        return "User added id: "+ user.getId();
    }
}
