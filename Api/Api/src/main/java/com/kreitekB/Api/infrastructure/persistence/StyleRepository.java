package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Style;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface StyleRepository extends JpaRepository<Style,Long>, JpaSpecificationExecutor<Style> {
    List<Style> findByNameContainsIgnoreCase(String partialName);
}
