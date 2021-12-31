package com.feedloop.app.response.form;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedPost {
    private String formName;
    private String formDescription;
    private String submittedBy;

    public FeedPost(){
        this.submittedBy="Anonymous";
    }
}
