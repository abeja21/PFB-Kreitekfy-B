package com.kreitekB.Api.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Positive;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ratingSequence")
    private Long id;

    @Column
    @Positive
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "song_id")
    private Song song;

    public Rating() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    @Override
    public boolean equals(Object obj) {
        if (this==obj)return true;
        if (obj==null || getClass() != obj.getClass() || id== null)return false;
        Rating rating=(Rating) obj;
        return id.equals(rating.id);
    }
}
