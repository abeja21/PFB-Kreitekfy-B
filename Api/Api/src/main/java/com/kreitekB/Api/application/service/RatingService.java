package com.kreitekB.Api.application.service;

import com.kreitekB.Api.application.dto.RatingDTO;

import java.util.Optional;

public interface RatingService {


    Optional<RatingDTO> getRateById(Long rateId);

    RatingDTO saveRate(RatingDTO rate);

    void deleteRate(Long rateId);
}