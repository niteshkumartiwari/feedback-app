package com.feedloop.app.service;

import com.feedloop.app.exception.ResourceNotFoundException;
import com.feedloop.app.model.FormMeta;
import com.feedloop.app.model.FormSubmission;
import com.feedloop.app.model.PollMeta;
import com.feedloop.app.model.User;
import com.feedloop.app.repository.FormRepository;
import com.feedloop.app.repository.FormSubmissionRepository;
import com.feedloop.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FormRepository formRepository;

    @Autowired
    private FormSubmissionRepository submissionRepository;

    public String saveUser(User user){
        userRepository.save(user);
        return "User added id: "+ user.getId();
    }

    public User findUserById(String Id){
        return userRepository
                .findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", Id));
    }

    public void addFormMeta(String Id, FormMeta formMeta){
        User user= userRepository.findById(Id).get();

        user.getFormMeta().add(formMeta);

        saveUser(user);
    }

    public void addPollMeta(String Id, PollMeta pollMeta){
        User user= userRepository.findById(Id).get();

        user.getPollMeta().add(pollMeta);

        saveUser(user);
    }

    public Optional<List<FormMeta>> getUserForm(String Id){
        return Optional.ofNullable(
                userRepository
                    .findById(Id)
                    .get()
                    .getFormMeta()
        );
    }

    public Optional<List<PollMeta>> getUserPoll(String Id){
        return Optional.ofNullable(
                userRepository
                        .findById(Id)
                        .get()
                        .getPollMeta()
        );
    }

    public Page<FormSubmission> getUserFeed(String userId, int offset, int pageSize){
        Page<FormSubmission> submissions= submissionRepository.findByCreatedBy(userId,
                                                                PageRequest
                                                                .of(offset,pageSize)
                                                                .withSort(Sort.by("submittedOn").descending()));
        return submissions;
    }

}
