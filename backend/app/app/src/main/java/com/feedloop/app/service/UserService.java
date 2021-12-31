package com.feedloop.app.service;

import com.feedloop.app.exception.ResourceNotFoundException;
import com.feedloop.app.model.*;
import com.feedloop.app.repository.FormRepository;
import com.feedloop.app.repository.FormSubmissionRepository;
import com.feedloop.app.repository.UserRepository;
import com.feedloop.app.response.form.FeedPost;
import com.feedloop.app.response.form.FeedPostResponse;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.w3c.dom.ls.LSException;

import java.util.ArrayList;
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

    public FeedPostResponse getUserFeed(String userId, int offset, int pageSize){
        Page<FormSubmission> submissions= submissionRepository.findByCreatedBy(userId,
                                                                PageRequest
                                                                .of(offset,pageSize)
                                                                .withSort(Sort.by("submittedOn").descending()));

        List<FeedPost> posts= new ArrayList<>();
        for(FormSubmission submission : submissions.getContent()){
            String formId= submission.getFormId();
            Form form = formRepository.findById(new ObjectId(formId)).get();
            FeedPost feedPost= new FeedPost();
            feedPost.setFormName(form.getDocumentName());
            feedPost.setFormDescription(form.getDocumentDescription());
            feedPost.setSubmissionId(submission.getId());
            if(submission.getUserInfo().getName()!=null && submission.getUserInfo().getName()!="") {
                feedPost.setSubmittedBy(submission.getUserInfo().getName());
            }

            posts.add(feedPost);
        }


        FeedPostResponse response = new FeedPostResponse();
        response.setPosts(posts);
        response.setTotalPages(submissions.getTotalPages());

        return response;
    }

}
