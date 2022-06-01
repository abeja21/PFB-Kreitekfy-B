package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.ArtistDTO;
import com.kreitekB.Api.application.mapper.ArtistMapper;
import com.kreitekB.Api.application.service.ArtistService;
import com.kreitekB.Api.domain.entity.Artist;
import com.kreitekB.Api.domain.persistence.ArtistPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistServiceImpl implements ArtistService {
    private final ArtistPersistence persistence;
    private final ArtistMapper mapper;

    @Autowired
    public ArtistServiceImpl(ArtistPersistence persistence, ArtistMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<ArtistDTO> getAllArtists() {
        List<Artist> artist = this.persistence.getAllArtists();
        return this.mapper.toDto(artist);
    }

    @Override
    public Optional<ArtistDTO> getArtistById(Long artistId) {
        return this.persistence.getArtistById(artistId).map(mapper::toDto);
    }

    @Override
    public ArtistDTO saveArtist(ArtistDTO artistDTO) {
        Artist artistSaved = this.persistence.saveArtist(this.mapper.toEntity(artistDTO));
        return this.mapper.toDto(artistSaved);
    }

    @Override
    public void deleteArtist(Long artistId) {
        this.persistence.deleteArtist(artistId);
    }

    @Override
    public Page<ArtistDTO> getArtistsByCriteriaStringPaged(Pageable pageable, String filter) {
        Page<Artist> artistPage = this.persistence.findAll(pageable, filter);
        return artistPage.map(mapper::toDto);
    }
}
