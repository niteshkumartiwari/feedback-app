package com.feedloop.app.resource;

import com.feedloop.app.model.Form;
import com.feedloop.app.response.form.CreateFormResponse;
import com.feedloop.app.security.CurrentUser;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormController {
    @Autowired
    private FormService formService;

    @PostMapping("/create")
    private ResponseEntity<CreateFormResponse> createForm(@CurrentUser UserPrincipal userPrincipal, @RequestBody Form form){
        form.setCreatedBy(userPrincipal.getId());

        CreateFormResponse response= new CreateFormResponse();
        response.setId(formService.saveForm(userPrincipal, form));
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
