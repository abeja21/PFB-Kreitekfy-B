package com.kreitekB.Api.infrastructure.specs;

import com.kreitekB.Api.domain.entity.Song;
import com.kreitekB.Api.infrastructure.specs.shared.EntitySpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class ItemSpecification extends EntitySpecification<Song>implements Specification<Song> {

    public ItemSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;

    }
}
