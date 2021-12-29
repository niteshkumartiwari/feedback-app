package com.feedloop.app.response.form;

import com.feedloop.app.model.FormMeta;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GetAllFormsResponse {
    private List<FormMeta> forms;
}
