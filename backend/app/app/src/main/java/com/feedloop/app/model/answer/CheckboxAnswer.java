package com.feedloop.app.model.answer;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.util.List;

@Getter
@Setter
@ToString
@JsonTypeName("checkbox")
public class CheckboxAnswer extends AnswerType{
    private List<Integer> answer;
}
