package com.kreitekB.Api.application.service;

import com.kreitekB.Api.application.dto.SongDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface SongService {
    List<SongDTO> getAllSongs();

    Optional<SongDTO> getSongById(Long songId);

    SongDTO saveSong(SongDTO song);

    void deleteSong(Long songId);

    List<SongDTO> getSongsByStyle(Long styleId);

    List<SongDTO> getSongsByArtist(Long artistId);

    List<SongDTO> getSongsByAlbum(Long albumId);

    Page<SongDTO> getSongsByCriteriaStringPaged(Pageable pageable, String filter);
}
