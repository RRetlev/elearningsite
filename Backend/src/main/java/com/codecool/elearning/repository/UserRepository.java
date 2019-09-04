package com.codecool.elearning.repository;

import com.codecool.elearning.model.userEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    int getUserById(Long id);
}
