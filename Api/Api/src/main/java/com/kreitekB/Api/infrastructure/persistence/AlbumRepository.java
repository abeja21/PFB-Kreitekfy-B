package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album,Long> {
}
