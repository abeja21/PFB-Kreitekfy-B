package com.kreitekB.Api.domain.persistence;

import com.kreitekB.Api.domain.entity.Rating;

import java.util.Optional;

public interface RatingPersistence {

    Optional<Rating> getRatingById(Long ratingId);

    Rating saveRating(Rating rating);

    void deleteRating(Long ratingId);
}
