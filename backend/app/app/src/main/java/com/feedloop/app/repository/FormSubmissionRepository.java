package com.feedloop.app.repository;

import com.feedloop.app.model.FormSubmission;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface FormSubmissionRepository extends MongoRepository<FormSubmission,String> {
    Page<FormSubmission> findByCreatedBy(String userId, Pageable pageable);

    Optional<FormSubmission> findById(ObjectId objectId);
}
