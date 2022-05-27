package com.kreitekB.Api.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "artist")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "artistSequence")
    private long id;

    @Column(length = 100,nullable = false)
    @Size(min=1,max = 100)
    private String name;

    public Artist() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
