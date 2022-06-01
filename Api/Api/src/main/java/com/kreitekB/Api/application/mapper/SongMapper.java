package com.kreitekB.Api.application.mapper;

import com.kreitekB.Api.application.dto.SongDTO;
import com.kreitekB.Api.domain.entity.Song;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AlbumMapper.class, ArtistMapper.class, StyleMapper.class})
public interface SongMapper extends EntityMapper<SongDTO, Song>{

    default Song fromId(Long id) {

        if (id == null) return null;

        Song song = new Song();
        song.setId(id);
        return song;
    }


    @Override
    @Mapping(source = "albumId", target = "album")
    @Mapping(source = "artistId", target = "artist")
    @Mapping(source = "styleId", target = "style")

    Song toEntity(SongDTO dto);


    @Override
    @Mapping(source = "album.id", target = "albumId")
    @Mapping(source = "album.name", target = "albumName")
    @Mapping(source = "album.image",target = "image")

    @Mapping(source = "artist.id", target = "artistId")
    @Mapping(source = "artist.name", target = "artistName")

    @Mapping(source = "style.id", target = "styleId")
    @Mapping(source = "style.name", target = "styleName")
    SongDTO toDto(Song entity);
}
