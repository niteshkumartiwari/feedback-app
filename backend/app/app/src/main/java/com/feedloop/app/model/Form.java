package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString

@Document(collection = "Form")
public class Form {
    @Id
    private String id;

    @JsonProperty("client_id")
    private String clientId;

    @JsonIgnore
    @NotNull
    private String createdBy;

    @JsonIgnore
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @JsonProperty("document_name")
    private String documentName;

    @JsonProperty("doc_desc")
    private String documentDescription;

    private Boolean active;

    @NotNull
    private List<Question> questions;

    public Form(){
        /**
         * TODO: Generate these at DB end
         */
        this.createdAt= Date.from(Instant.now());
        this.documentName="Untitled Name";
        this.documentDescription="Untitled Description";
    }

}
