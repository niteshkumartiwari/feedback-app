package com.feedloop.app.repository;

import com.feedloop.app.model.FormSubmission;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormSubmissionRepository extends MongoRepository<FormSubmission,String> {
    Page<FormSubmission> findByCreatedBy(String userId, Pageable pageable);
}
