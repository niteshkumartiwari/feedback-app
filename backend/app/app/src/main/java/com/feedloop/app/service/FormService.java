package com.feedloop.app.service;

import com.feedloop.app.exception.DuplicateRequestException;
import com.feedloop.app.exception.ResourceNotFoundException;
import com.feedloop.app.model.Form;
import com.feedloop.app.repository.FormRepository;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.util.Convertor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Form getFormById(String formId){
        Optional<Form> form= formRepository.findById(new ObjectId(formId));

        if(form.isPresent()){
            return form.get();
        }

        throw new ResourceNotFoundException("Form",formId,"does not exist");
    }

    public List<Form> getByCreator(String userId){
        return formRepository.findByCreatedBy(userId);
    }
}