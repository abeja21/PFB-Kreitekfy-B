package com.kreitekB.Api.application.service;


import com.kreitekB.Api.application.dto.UserDTO;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<UserDTO> getAllUsers();

    Optional<UserDTO> getUserById(Long userId);

    UserDTO saveUser(UserDTO user);

    void deleteUser(Long userId);
}
