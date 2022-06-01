package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Album;
import com.kreitekB.Api.domain.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album,Long>, JpaSpecificationExecutor<Album> {
}
