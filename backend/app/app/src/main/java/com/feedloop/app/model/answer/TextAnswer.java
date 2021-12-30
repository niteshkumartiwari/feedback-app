package com.feedloop.app.model.answer;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonTypeName("text")
public class TextAnswer extends AnswerType{
    private String answer;
}
