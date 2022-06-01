package com.kreitekB.Api.infrastructure.specs;

import com.kreitekB.Api.domain.entity.Style;
import com.kreitekB.Api.infrastructure.specs.shared.EntitySpecification;
import com.kreitekB.Api.infrastructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class StyleSpecification extends EntitySpecification<Style> implements Specification<Style> {


    public StyleSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }
}
