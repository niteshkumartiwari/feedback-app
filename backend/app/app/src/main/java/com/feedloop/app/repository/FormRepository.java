package com.feedloop.app.repository;

import com.feedloop.app.model.Form;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface FormRepository extends MongoRepository<Form,String> {
    Boolean existsByClientId(String clientId);

    List<Form> findByCreatedBy(String createdBy);

    Optional<Form> findById(ObjectId objectId);
}
