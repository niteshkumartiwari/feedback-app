package com.feedloop.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    @Id
    private String id;

    @NotNull
    private String name;

    @JsonIgnore
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Email
    @NotNull
    private String email;
    private String userhandle;
    private String imageUrl;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

    @JsonIgnore
    private String password;

    @JsonIgnore
    private List<FormMeta> formMeta= new ArrayList<>();

    @JsonIgnore
    private List<PollMeta> pollMeta= new ArrayList<>();

    public User(){
        /**
         * TODO: Generate these at DB end
         */
        this.createdAt= Date.from(Instant.now());
    }
}
