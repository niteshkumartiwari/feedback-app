package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.feedloop.app.model.answer.AnswerType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import java.time.Instant;
import java.util.Date;
import java.util.Map;

@Getter
@Setter
@ToString

@Document(collection = "Submission")
public class FormSubmission {
    @Id
    private String id;

    @JsonProperty("form_id")
    private String formId;

    @JsonProperty("client_id")
    @Indexed(unique=true)
    private String clientId;

    @JsonIgnore
    private String createdBy;

    private Map<Integer, AnswerType> answers;

    private String feedback;

    @JsonProperty("user_info")
    private UserInfo userInfo;

    @JsonIgnore
    @Temporal(TemporalType.TIMESTAMP)
    private Date submittedOn;

    public FormSubmission(){
        /**
         * TODO: Generate these at DB end
         */
        this.submittedOn= Date.from(Instant.now());
    }
}
