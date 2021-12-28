package com.feedloop.app.service;

import com.feedloop.app.exception.DuplicateRequestException;
import com.feedloop.app.model.Form;
import com.feedloop.app.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormService {
    @Autowired
    private FormRepository formRepository;

    public String saveForm(Form form){
        if(formRepository.existsByClientId(form.getClientId())){
            throw new DuplicateRequestException("Form already exists with this FormId");
        }

        formRepository.save(form);
        return form.getId();
    }

    public List<Form> getByCreator(String userId){
        return formRepository.findByCreatedBy(userId);
    }
}
