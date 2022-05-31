package com.kreitekB.Api.application.mapper;

import com.kreitekB.Api.application.dto.ArtistDTO;
import com.kreitekB.Api.domain.entity.Artist;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ArtistMapper extends EntityMapper<ArtistDTO, Artist> {

    default Artist fromId(Long id) {

        if (id == null) return null;

        Artist artist = new Artist();
        artist.setId(id);
        return artist;
    }
}