package com.feedloop.app.response.form;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SuccessFormSubmission {
    private String msg;

    public SuccessFormSubmission(String msg) {
        this.msg = msg;
    }
}
