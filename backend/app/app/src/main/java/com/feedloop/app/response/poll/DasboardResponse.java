package com.feedloop.app.response.poll;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DasboardResponse {
    private String pollTitle;
    private String pollDescription;
    private String questionText;
    private List<String> options;
    private List<Long> optionCounts;
}
