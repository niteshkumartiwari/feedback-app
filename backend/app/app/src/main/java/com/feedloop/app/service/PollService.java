package com.feedloop.app.service;

import com.feedloop.app.exception.DuplicateRequestException;
import com.feedloop.app.model.Poll;
import com.feedloop.app.repository.PollRepository;
import com.feedloop.app.repository.UserRepository;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.util.Convertor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PollService {
    @Autowired
    private PollRepository pollRepository;

    @Autowired
    private UserService userService;

    public String savePoll(UserPrincipal userPrincipal, Poll poll){
        if(pollRepository.existsByClientId(poll.getClientId())){
            throw new DuplicateRequestException("Poll already exists with this PollId");
        }

        pollRepository.save(poll);

        userService.addPollMeta(userPrincipal.getId(), Convertor.convertToPollMeta(poll));

        return poll.getId();
    }

    public List<Poll> getByCreator(String userId){
        return pollRepository.findByCreatedBy(userId);
    }
}
