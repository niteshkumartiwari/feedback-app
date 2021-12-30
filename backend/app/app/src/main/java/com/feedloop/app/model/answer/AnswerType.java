package com.feedloop.app.model.answer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Getter;
import lombok.Setter;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type",
        visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = CheckboxAnswer.class, name="checkbox"),
        @JsonSubTypes.Type(value = RadioAnswer.class, name="radio"),
        @JsonSubTypes.Type(value = TextAnswer.class, name="text")
})
@Getter
@Setter
public abstract class AnswerType {
    private String type;
}
