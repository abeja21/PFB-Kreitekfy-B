package com.kreitekB.Api.domain.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import net.bytebuddy.implementation.bind.annotation.Default;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "songSequence")
    private long id;

    @Column(length = 100, nullable = false)
    @Size(min = 3, max = 100)
    private String name;

    @Column
    private String duration;

    @Column
    private Integer plays;


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

    @OneToMany(mappedBy = "song",cascade = CascadeType.ALL)
    Set<Rating> rating;

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

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Date getDateLaunch() {
        return dateLaunch;
    }

    public void setDateLaunch(Date dateLaunch) {
        this.dateLaunch = dateLaunch;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Style getStyle() {
        return style;
    }

    public void setStyle(Style style) {
        this.style = style;
    }

    public Set<Rating> getRatings() {
        return rating;
    }

    public void setRatings(Set<Rating> ratings) {
        this.rating = ratings;
    }

    public Integer getPlays() {
        return plays;
    }

    public void setPlays(Integer plays) {
        this.plays = plays;
    }


}

