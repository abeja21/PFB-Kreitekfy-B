package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.RatingDTO;
import com.kreitekB.Api.application.mapper.RatingMapper;
import com.kreitekB.Api.application.service.RatingService;
import com.kreitekB.Api.domain.entity.Rating;
import com.kreitekB.Api.domain.persistence.RatingPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RatingServiceImpl implements RatingService {
    private final RatingPersistence persistence;

    private final RatingMapper mapper;

    @Autowired
    public RatingServiceImpl(RatingPersistence persistence, RatingMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public Optional<RatingDTO> getRateById(Long rateId) {
        return this.persistence.getRatingById(rateId).map(mapper::toDto);
    }

    @Override
    public RatingDTO saveRate(RatingDTO rate) {
        Rating rateSaved = this.persistence.saveRating(this.mapper.toEntity(rate));
        return this.mapper.toDto(rateSaved);
    }

    @Override
    public void deleteRate(Long rateId) {
        this.persistence.deleteRating(rateId);
    }
}
