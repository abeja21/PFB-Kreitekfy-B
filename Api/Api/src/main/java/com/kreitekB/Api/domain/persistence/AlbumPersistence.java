package com.kreitekB.Api.domain.persistence;

import com.kreitekB.Api.domain.entity.Album;

import java.util.List;
import java.util.Optional;

public interface AlbumPersistence {

    List<Album> getAllAlbums();

    Optional<Album>getAlbumById(long albumId);

    Album saveAlbum(Album album);

    void deleteAlbum(long albumId);

}
