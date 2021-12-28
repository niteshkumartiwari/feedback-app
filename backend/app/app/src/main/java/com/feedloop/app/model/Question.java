package com.feedloop.app.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Question {
    private String questionText;
    private QuestionType questionType;
    private List<Option> options;
    private Boolean open;
    private Boolean required;
}
