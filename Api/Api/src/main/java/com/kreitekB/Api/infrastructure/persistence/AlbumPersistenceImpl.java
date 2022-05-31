package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Album;
import com.kreitekB.Api.domain.persistence.AlbumPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AlbumPersistenceImpl implements AlbumPersistence {


    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumPersistenceImpl(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @Override
    public List<Album> getAllAlbums() {
        return this.albumRepository.findAll();
    }

    @Override
    public Optional<Album> getAlbumById(Long albumId) {
        return this.albumRepository.findById(albumId);
    }

    @Override
    public Album saveAlbum(Album album) {
        return this.albumRepository.save(album);
    }

    @Override
    public void deleteAlbum(Long albumId) {
        this.albumRepository.deleteById(albumId);

    }
}
