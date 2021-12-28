package com.feedloop.app.repository;

import com.feedloop.app.model.Poll;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PollRepository extends MongoRepository<Poll,String> {
    Boolean existsByClientId(String clientId);

    List<Poll> findByCreatedBy(String createdBy);
}
