package com.kreitekB.Api.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "songs")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "songSequence")
    private long id;

    @Column(length = 100,nullable = false)
    @Size(min = 3,max = 100)
    private String name;

    @Column
    @Positive
    private Double duration;

    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+1")
    private Date dateLaunch;

    @ManyToOne()
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @ManyToOne()
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;

    @ManyToOne()
    @JoinColumn(name = "style_id", nullable = false)
    private Style style;
}
