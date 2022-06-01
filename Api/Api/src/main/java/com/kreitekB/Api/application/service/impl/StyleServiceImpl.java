package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.StyleDTO;
import com.kreitekB.Api.application.mapper.StyleMapper;
import com.kreitekB.Api.application.service.StyleService;
import com.kreitekB.Api.domain.entity.Style;
import com.kreitekB.Api.domain.persistence.StylePersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StyleServiceImpl implements StyleService {
    private final StylePersistence persistence;
    private final StyleMapper mapper;

    @Autowired
    public StyleServiceImpl(StylePersistence persistence, StyleMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<StyleDTO> getAllStyles() {
        List<Style> styles = this.persistence.getAllStyles();
        return this.mapper.toDto(styles);
    }

    @Override
    public Optional<StyleDTO> getStyleById(Long styleId) {
        return this.persistence.getStyleById(styleId).map(mapper::toDto);
    }

    @Override
    public StyleDTO saveStyle(StyleDTO styleDTO) {
        Style styleSaved = this.persistence.saveStyle(this.mapper.toEntity(styleDTO));
        return this.mapper.toDto(styleSaved);
    }

    @Override
    public void deleteStyle(Long styleId) {
        this.persistence.deleteStyle(styleId);
    }

    @Override
    public Page<StyleDTO> getStylesByCriteriaStringPaged(Pageable pageable, String filter) {
        Page<Style> stylePage = this.persistence.findAll(pageable, filter);
        return stylePage.map(mapper::toDto);
    }

    @Override
    public List<StyleDTO> getStylesByName(String partialName) {
        List<Style> styles = this.persistence.getStylesByName(partialName);
        return mapper.toDto(styles);
    }
}
