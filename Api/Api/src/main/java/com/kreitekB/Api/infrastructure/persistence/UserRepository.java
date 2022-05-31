package com.kreitekB.Api.infrastructure.persistence;

import com.kreitekB.Api.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}