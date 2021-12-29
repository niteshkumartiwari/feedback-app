package com.feedloop.app.repository;

import com.feedloop.app.model.Poll;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface PollRepository extends MongoRepository<Poll,String> {
    Optional<Poll> findById(ObjectId objectId);
    Boolean existsByClientId(String clientId);

    List<Poll> findByCreatedBy(String createdBy);
}
