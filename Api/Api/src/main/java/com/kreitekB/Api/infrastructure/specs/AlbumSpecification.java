package com.kreitekB.Api.infrastructure.specs;

import com.kreitekB.Api.domain.entity.Album;
import com.kreitekB.Api.infrastructure.specs.shared.EntitySpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class AlbumSpecification extends EntitySpecification<Album> implements Specification<Album> {

    public AlbumSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }
}
