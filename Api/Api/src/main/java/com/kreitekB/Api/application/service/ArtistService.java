package com.kreitekB.Api.application.service;

import com.kreitekB.Api.application.dto.ArtistDTO;

import java.util.List;
import java.util.Optional;

public interface ArtistService {
    List<ArtistDTO> getAllArtists();

    Optional<ArtistDTO> getArtistById(Long artistId);

    ArtistDTO saveArtist(ArtistDTO artist);

    void deleteArtist(Long artistId);
}
