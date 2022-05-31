package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Song;
import com.kreitekB.Api.domain.persistence.SongPersistence;
import com.kreitekB.Api.infrastructure.specs.ItemSpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteriaHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public class SongPersistenceImpl implements SongPersistence {

    private final SongRepository songRepository;

    @Autowired
    public SongPersistenceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public List<Song> getAllSongs() {
        return this.songRepository.findAll();
    }

    @Override
    public Optional<Song> getSongById(Long songId) {
        return this.songRepository.findById(songId);
    }

    @Override
    public Song saveSong(Song song) {
        return this.songRepository.save(song);
    }

    @Override
    public void deleteSong(Long songId) {
        this.songRepository.deleteById(songId);
    }

    @Override
    public List<Song> getSongsByStyle(Long styleId) {
        return this.songRepository.findByStyle(styleId);
    }

    @Override
    public List<Song> getSongsByArtist(Long artistId) {
        return this.songRepository.findByArtist(artistId);
    }

    @Override
    public List<Song> getSongsByAlbum(Long albumId) {
        return this.songRepository.findByAlbum(albumId);
    }

    @Override
    public Page<Song> findAll(Pageable pageable, String filters) {
        ItemSpecification specification = new ItemSpecification(SearchCriteriaHelper.fromFilterString(filters));
        return this.songRepository.findAll(specification, pageable);
    }
}
