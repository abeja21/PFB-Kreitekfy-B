package com.kreitekB.Api.application.service;


import com.kreitekB.Api.application.dto.StyleDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface StyleService {
    List<StyleDTO> getAllStyles();

    Optional<StyleDTO> getStyleById(Long styleId);

    StyleDTO saveStyle(StyleDTO style);

    void deleteStyle(Long styleId);

    Page<StyleDTO> getStylesByCriteriaStringPaged(Pageable pageable, String filter);

    List<StyleDTO> getStylesByName(String partialName);
}
