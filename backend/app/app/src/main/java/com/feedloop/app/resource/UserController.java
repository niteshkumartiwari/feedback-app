package com.feedloop.app.resource;

import com.feedloop.app.model.User;
import com.feedloop.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
}
