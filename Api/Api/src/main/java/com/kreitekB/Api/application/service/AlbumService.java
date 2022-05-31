package com.kreitekB.Api.application.service;

import com.kreitekB.Api.application.dto.AlbumDTO;

import java.util.List;
import java.util.Optional;

public interface AlbumService {
    List<AlbumDTO> getAllAlbums();

    Optional<AlbumDTO> getAlbumById(Long albumId);

    AlbumDTO saveAlbum(AlbumDTO albumDTO);

    void deleteAlbum(Long albumId);

}
