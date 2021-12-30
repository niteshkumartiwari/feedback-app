package com.feedloop.app.service;

import com.feedloop.app.exception.DuplicateRequestException;
import com.feedloop.app.exception.ResourceNotFoundException;
import com.feedloop.app.model.Poll;
import com.feedloop.app.model.PollSubmission;
import com.feedloop.app.model.answer.RadioAnswer;
import com.feedloop.app.repository.PollRepository;
import com.feedloop.app.response.poll.DasboardResponse;
import com.feedloop.app.security.UserPrincipal;
import com.feedloop.app.util.Convertor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    @Autowired
    private PollRepository pollRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private MongoTemplate mongoTemplate;

    public String savePoll(UserPrincipal userPrincipal, Poll poll){
        if(pollRepository.existsByClientId(poll.getClientId())){
            throw new DuplicateRequestException("Poll already exists with this PollId");
        }

        pollRepository.save(poll);

        userService.addPollMeta(userPrincipal.getId(), Convertor.convertToPollMeta(poll));

        return poll.getId();
    }

    public Poll getPollById(String pollId){
        Optional<Poll> poll= pollRepository.findById(new ObjectId(pollId));

        if(poll.isPresent()){
            return poll.get();
        }

        throw new ResourceNotFoundException("Poll",pollId,"does not exist");
    }

    public DasboardResponse getDashboard(String pollId){
        Poll poll= getPollById(pollId);
        DasboardResponse response= new DasboardResponse();
        response.setQuestionText(poll.getDocumentName());
        response.setQuestionDescription(poll.getDocumentDescription());
        response.setOptions(poll.getQuestion().getOptions());
        response.setOptionCounts(poll.getMetadata());

        return response;
    }

    public void submitPoll(PollSubmission submission){
        String pollId= submission.getFormId();
        RadioAnswer answer = (RadioAnswer) submission.getAnswer();
        String key = "metadata."+answer.getAnswer();

       //Atomic Update DB
        Query query= new Query();
        query.addCriteria(Criteria.where("_id").is(pollId));
        Update update = new Update();
        update.inc(key);
        Poll poll = mongoTemplate.findAndModify(query,update,Poll.class);
    }

    public List<Poll> getByCreator(String userId){
        return pollRepository.findByCreatedBy(userId);
    }
}
