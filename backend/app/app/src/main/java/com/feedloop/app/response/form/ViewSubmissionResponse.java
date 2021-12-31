package com.feedloop.app.response.form;

import com.feedloop.app.model.Form;
import com.feedloop.app.model.UserInfo;
import com.feedloop.app.model.answer.AnswerType;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Map;

@Getter
@Setter
public class ViewSubmissionResponse {
    private Form form;

    private Date submittedOn;

    private UserInfo userInfo;

    private String feedback;

    private Map<Integer, AnswerType> answers;
}
