package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Style;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StyleRepository extends JpaRepository<Style,Long> {
}
