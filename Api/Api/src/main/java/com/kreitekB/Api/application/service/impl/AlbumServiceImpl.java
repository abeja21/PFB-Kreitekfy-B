package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.AlbumDTO;
import com.kreitekB.Api.application.mapper.AlbumMapper;
import com.kreitekB.Api.application.service.AlbumService;
import com.kreitekB.Api.domain.entity.Album;
import com.kreitekB.Api.domain.persistence.AlbumPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlbumServiceImpl implements AlbumService {
    private final AlbumPersistence persistence;
    private final AlbumMapper mapper;

    @Autowired
    public AlbumServiceImpl(AlbumPersistence persistence, AlbumMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<AlbumDTO> getAllAlbums() {
        List<Album> albums = this.persistence.getAllAlbums();
        return this.mapper.toDto(albums);
    }

    @Override
    public Optional<AlbumDTO> getAlbumById(Long albumId) {
        return this.persistence.getAlbumById(albumId).map(mapper::toDto);
    }

    @Override
    public AlbumDTO saveAlbum(AlbumDTO albumDTO) {
        Album albumSaved = this.persistence.saveAlbum(this.mapper.toEntity(albumDTO));
        return this.mapper.toDto(albumSaved);
    }

    @Override
    public void deleteAlbum(Long albumId) {
        this.persistence.deleteAlbum(albumId);
    }

    @Override
    public Page<AlbumDTO> getAlbumsByCriteriaStringPaged(Pageable pageable, String filter) {
        Page<Album> albumPage = this.persistence.findAll(pageable, filter);
        return albumPage.map(mapper::toDto);
    }
}
