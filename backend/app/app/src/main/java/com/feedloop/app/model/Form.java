package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@ToString

@Document(collection = "Form")
public class Form {
    @Id
    private String Id;

    @JsonProperty("client_id")
    private String clientId;

    @JsonIgnore
    @NotNull
    private String createdBy;

    @JsonProperty("document_name")
    private String documentName;

    @JsonProperty("doc_desc")
    private String documentDescription;

    private Boolean active;

    private List<Question> questions;

}
