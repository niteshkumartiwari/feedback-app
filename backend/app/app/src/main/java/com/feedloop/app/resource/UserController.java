package com.feedloop.app.resource;

import com.feedloop.app.model.FormSubmission;
import com.feedloop.app.model.User;
import com.feedloop.app.response.form.GetAllFormsResponse;
import com.feedloop.app.response.poll.GetAllPollsResponse;
import com.feedloop.app.security.CurrentUser;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

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

    @GetMapping("/forms")
    public ResponseEntity<GetAllFormsResponse> getUserForm(@CurrentUser UserPrincipal userPrincipal) {
        GetAllFormsResponse response= new GetAllFormsResponse();
        response.setForms(
                userService
                        .getUserForm(userPrincipal.getId())
                        .orElse(Collections.EMPTY_LIST));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    @GetMapping("/polls")
    public ResponseEntity<GetAllPollsResponse> getUserPoll(@CurrentUser UserPrincipal userPrincipal) {
        GetAllPollsResponse response= new GetAllPollsResponse();
        response.setPolls(
                userService
                        .getUserPoll(userPrincipal.getId())
                        .orElse(Collections.EMPTY_LIST));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    @GetMapping(path = "/feed" , params = {"page","size"})
    public ResponseEntity<Page<FormSubmission>> getUserFeed(@CurrentUser UserPrincipal userPrincipal,
                                                            @RequestParam("page") int page,
                                                            @RequestParam("size") int size){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userService.getUserFeed(userPrincipal.getId(), page, size));
    }
}
