package com.kreitekB.Api.domain.persistence;

import com.kreitekB.Api.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserPersistence {

    List<User> getAllUsers();

    Optional<User> getUserById(Long userId);

    User saveUser(User user);

    void deleteUser(Long userId);

}
