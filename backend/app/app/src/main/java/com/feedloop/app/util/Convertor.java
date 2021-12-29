package com.feedloop.app.util;

import com.feedloop.app.model.Form;
import com.feedloop.app.model.FormMeta;
import com.feedloop.app.model.Poll;
import com.feedloop.app.model.PollMeta;

public class Convertor {
    public static FormMeta convertToFormMeta(Form form){
        FormMeta meta= new FormMeta();
        meta.setFormId(form.getId());
        meta.setFormName(form.getDocumentName());
        meta.setFormDescription(form.getDocumentDescription());

        return meta;
    }

    public static PollMeta convertToPollMeta(Poll poll){
        PollMeta meta= new PollMeta();
        meta.setPollId(poll.getId());
        meta.setPollName(poll.getDocumentName());
        meta.setPollDesciption(poll.getDocumentDescription());

        return meta;
    }
}
