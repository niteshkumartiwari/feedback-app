package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class UserInfo {
    @JsonProperty("userName")
    private String name;
    private String meta;
}
