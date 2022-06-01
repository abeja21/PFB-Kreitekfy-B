package com.kreitekB.Api.application.service;

import com.kreitekB.Api.application.dto.ArtistDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ArtistService {
    List<ArtistDTO> getAllArtists();

    Optional<ArtistDTO> getArtistById(Long artistId);

    ArtistDTO saveArtist(ArtistDTO artist);

    void deleteArtist(Long artistId);

    Page<ArtistDTO> getArtistsByCriteriaStringPaged(Pageable pageable, String filter);
}
