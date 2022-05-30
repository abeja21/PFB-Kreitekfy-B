package com.kreitekB.Api.application.mapper;

import com.kreitekB.Api.application.dto.AlbumDTO;
import com.kreitekB.Api.domain.entity.Album;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AlbumMapper extends EntityMapper<AlbumDTO, Album> {

    default Album fromId(Long id) {

        if (id == null) return null;

        Album album = new Album();
        album.setId(id);
        return album;
    }
}