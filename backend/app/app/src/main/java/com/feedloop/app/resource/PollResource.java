package com.feedloop.app.resource;

import com.feedloop.app.model.Form;
import com.feedloop.app.model.Poll;
import com.feedloop.app.response.form.CreateFormResponse;
import com.feedloop.app.security.CurrentUser;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/poll")
public class PollResource {
    @Autowired
    private PollService pollService;

    @PostMapping("/create")
    private ResponseEntity<CreateFormResponse> createPoll(@CurrentUser UserPrincipal userPrincipal, @RequestBody Poll poll){
        poll.setCreatedBy(userPrincipal.getId());

        CreateFormResponse response= new CreateFormResponse();
        response.setId(pollService.savePoll(userPrincipal, poll));
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
