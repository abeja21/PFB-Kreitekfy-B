package com.kreitekB.Api.application.service.impl;

import com.kreitekB.Api.application.dto.UserDTO;
import com.kreitekB.Api.application.mapper.UserMapper;
import com.kreitekB.Api.application.service.UserService;
import com.kreitekB.Api.domain.entity.User;
import com.kreitekB.Api.domain.persistence.UserPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService {
    private final UserPersistence persistence;
    private final UserMapper mapper;

    @Autowired
    public UserServiceImpl(UserPersistence persistence, UserMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = this.persistence.getAllUsers();
        return this.mapper.toDto(users);
    }

    @Override
    public Optional<UserDTO> getUserById(Long userId) {
        return this.persistence.getUserById(userId).map(mapper::toDto);
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User userSaved = this.persistence.saveUser(this.mapper.toEntity(userDTO));
        return this.mapper.toDto(userSaved);
    }

    @Override
    public void deleteUser(Long userId) {
        this.persistence.deleteUser(userId);
    }
}
