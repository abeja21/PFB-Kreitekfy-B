package com.kreitekB.Api.domain.persistence;

import com.kreitekB.Api.domain.entity.Artist;

import java.util.List;
import java.util.Optional;

public interface ArtistPersistence {

    List<Artist> getAllArtist();

    Optional<Artist> getArtistById(long artistId);

    Artist saveArtist(Artist artist);

    void deleteArtist(Long artistId);
}
