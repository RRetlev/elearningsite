package com.codecool.elearning.daoImplementation;


import com.codecool.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDBService {
    @Autowired
    private UserRepository userRepository;


}
