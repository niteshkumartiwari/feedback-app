package com.feedloop.app.response.poll;

import com.feedloop.app.model.PollMeta;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetAllPollsResponse {
    private List<PollMeta> polls;
}
