package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating,Long> {
}