package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Style;
import com.kreitekB.Api.domain.persistence.StylePersistence;
import com.kreitekB.Api.infrastructure.specs.StyleSpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteriaHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public class StylePersistenceImpl implements StylePersistence {

    private final StyleRepository styleRepository;

    @Autowired
    public StylePersistenceImpl(StyleRepository styleRepository) {
        this.styleRepository = styleRepository;
    }

    @Override
    public List<Style> getAllStyles() {
        return this.styleRepository.findAll();
    }

    @Override
    public Optional<Style> getStyleById(Long styleId) {
        return this.styleRepository.findById(styleId);
    }

    @Override
    public Style saveStyle(Style style) {
        return this.styleRepository.save(style);
    }

    @Override
    public void deleteStyle(Long styleId) {
        this.styleRepository.deleteById(styleId);
    }

    @Override
    public Page<Style> findAll(Pageable pageable, String filter) {
        StyleSpecification specification = new StyleSpecification(SearchCriteriaHelper.fromFilterString(filter));
        return this.styleRepository.findAll(specification, pageable);
    }
}
