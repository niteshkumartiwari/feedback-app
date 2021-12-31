package com.feedloop.app.response.form;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FeedPostResponse {
    private List<FeedPost> posts;
    private int totalPages;
}
