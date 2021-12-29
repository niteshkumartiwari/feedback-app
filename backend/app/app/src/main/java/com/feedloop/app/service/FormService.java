package com.feedloop.app.service;

import com.feedloop.app.exception.DuplicateRequestException;
import com.feedloop.app.model.Form;
import com.feedloop.app.repository.FormRepository;
import com.feedloop.app.repository.UserRepository;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.util.Convertor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormService {
    @Autowired
    private FormRepository formRepository;

    @Autowired
    private UserService userService;

    public String saveForm(UserPrincipal userPrincipal, Form form){
        if(formRepository.existsByClientId(form.getClientId())){
            throw new DuplicateRequestException("Form already exists with this FormId");
        }

        formRepository.save(form);
        userService.addFormMeta(userPrincipal.getId(), Convertor.convertToFormMeta(form));

        return form.getId();
    }

    public List<Form> getByCreator(String userId){
        return formRepository.findByCreatedBy(userId);
    }
}
