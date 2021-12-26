package com.feedloop.app.resource;

import com.feedloop.app.exception.ResourceNotFoundException;
import com.feedloop.app.model.User;
import com.feedloop.app.security.CurrentUser;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userService.findUserById(userPrincipal.getId());
    }
}
