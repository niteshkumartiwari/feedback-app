package com.feedloop.app.response.poll;

import com.feedloop.app.model.Option;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DasboardResponse {
    private String questionText;
    private String questionDescription;
    private List<String> options;
    private List<Long> optionCounts;
}
