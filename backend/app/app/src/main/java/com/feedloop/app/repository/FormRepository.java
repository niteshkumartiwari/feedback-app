package com.feedloop.app.repository;

import com.feedloop.app.model.Form;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FormRepository extends MongoRepository<Form,String> {
    Boolean existsByClientId(String clientId);

    List<Form> findByCreatedBy(String createdBy);
}
