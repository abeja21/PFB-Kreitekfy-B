package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtistRepository extends JpaRepository<Artist,Long>, JpaSpecificationExecutor<Artist> {
    List<Artist> findByNameContainsIgnoreCase(String partialName);

}
