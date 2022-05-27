package com.kreitekB.Api.domain.persistence;

import com.kreitekB.Api.domain.entity.Style;


import java.util.List;
import java.util.Optional;

public interface StylePersistence {

    List<Style> getAllStyles();

    Optional<Style> getStyleById(Long styleId);

    Style saveStyle(Style style);

    void deleteStyle(Long styleId);
}
