package com.feedloop.app.repository;

import com.feedloop.app.model.Poll;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PollRepository extends MongoRepository<Poll,String> {
    Boolean existsByClientId(String clientId);
}
