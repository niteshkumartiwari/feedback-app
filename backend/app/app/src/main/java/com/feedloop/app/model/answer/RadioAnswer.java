package com.feedloop.app.model.answer;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonTypeName("radio")
public class RadioAnswer extends AnswerType{
    private Integer answer;
}
