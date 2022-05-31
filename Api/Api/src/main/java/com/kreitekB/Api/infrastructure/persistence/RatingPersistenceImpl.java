package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.Rating;
import com.kreitekB.Api.domain.persistence.RatingPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class RatingPersistenceImpl implements RatingPersistence {

    private final RatingRepository viewsRepository;

    @Autowired
    public RatingPersistenceImpl(RatingRepository viewsRepository) {
        this.viewsRepository = viewsRepository;
    }

    @Override
    public Optional<Rating> getRatingById(Long ratingId) {
        return this.viewsRepository.findById(ratingId);
    }

    @Override
    public Rating saveRating(Rating rating) {
        return this.viewsRepository.save(rating);
    }

    @Override
    public void deleteRating(Long ratingId) {
        this.viewsRepository.deleteById(ratingId);
    }
}
