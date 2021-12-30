package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.feedloop.app.model.answer.AnswerType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

@Getter
@Setter
@ToString
public class PollSubmission {
    @Id
    private String id;

    @JsonProperty("form_id")
    private String formId;

    @JsonProperty("client_id")
    @Indexed(unique=true)
    private String clientId;

    private AnswerType answer;

    private String feedback;

    @JsonProperty("user_info")
    private UserInfo userInfo;
}
