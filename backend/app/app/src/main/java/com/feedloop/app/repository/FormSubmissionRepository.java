package com.feedloop.app.repository;

import com.feedloop.app.model.FormSubmission;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormSubmissionRepository extends MongoRepository<FormSubmission,String> {
}
