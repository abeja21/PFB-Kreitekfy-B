package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.SongDTO;
import com.kreitekB.Api.application.mapper.SongMapper;
import com.kreitekB.Api.application.service.SongService;
import com.kreitekB.Api.domain.entity.Song;
import com.kreitekB.Api.domain.persistence.SongPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SongServiceImpl  implements SongService {
    private final SongPersistence persistence;
    private final SongMapper mapper;

    @Autowired
    public SongServiceImpl(SongPersistence persistence, SongMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<SongDTO> getAllSongs() {
        List<Song> songs = this.persistence.getAllSongs();
        return this.mapper.toDto(songs);
    }

    @Override
    public Optional<SongDTO> getSongById(Long songId) {
        return this.persistence.getSongById(songId).map(mapper::toDto);
    }

    @Override
    public SongDTO saveSong(SongDTO songDTO) {
        Song songSaved = this.persistence.saveSong(this.mapper.toEntity(songDTO));
        return this.mapper.toDto(songSaved);
    }

    @Override
    public void deleteSong(Long songId) {
        this.persistence.deleteSong(songId);
    }


    @Override
    public List<SongDTO> getSongsByStyle(Long styleId) {
        List<Song> songs = this.persistence.getSongsByStyle(styleId);
        return this.mapper.toDto(songs);
    }

    @Override
    public List<SongDTO> getSongsByArtist(Long artistId) {
        List<Song> songs = this.persistence.getSongsByArtist(artistId);
        return this.mapper.toDto(songs);
    }

    @Override
    public List<SongDTO> getSongsByAlbum(Long albumId) {
        List<Song> songs = this.persistence.getSongsByAlbum(albumId);
        return this.mapper.toDto(songs);
    }

    @Override
    public Page<SongDTO> getSongsByCriteriaStringPaged(Pageable pageable, String filter) {
        Page<Song> songPage = this.persistence.findAll(pageable, filter);
        return songPage.map(mapper::toDto);
    }
}
