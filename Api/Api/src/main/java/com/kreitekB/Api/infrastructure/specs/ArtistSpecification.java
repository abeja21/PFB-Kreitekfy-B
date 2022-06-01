package com.kreitekB.Api.infrastructure.specs;

import com.kreitekB.Api.domain.entity.Artist;
import com.kreitekB.Api.infrastructure.specs.shared.EntitySpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ArtistSpecification extends EntitySpecification<Artist> implements Specification<Artist> {


    public ArtistSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }

}
