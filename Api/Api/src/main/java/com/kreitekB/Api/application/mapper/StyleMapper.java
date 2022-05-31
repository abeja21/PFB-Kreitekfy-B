package com.kreitekB.Api.application.mapper;

import com.kreitekB.Api.application.dto.StyleDTO;
import com.kreitekB.Api.domain.entity.Style;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StyleMapper extends EntityMapper<StyleDTO, Style> {

    default Style fromId(Long id) {

        if (id == null) return null;

        Style style = new Style();
        style.setId(id);
        return style;
    }
}