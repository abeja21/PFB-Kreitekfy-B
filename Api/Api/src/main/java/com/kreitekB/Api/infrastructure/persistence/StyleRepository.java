package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Style;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StyleRepository extends JpaRepository<Style,Long>, JpaSpecificationExecutor<Style> {
}
