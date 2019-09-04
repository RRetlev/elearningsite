package com.codecool.elearning.daoImplementation;


import com.codecool.elearning.model.userEntity.User;
import com.codecool.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDBService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id){
        return userRepository.getUserById(id);
    }

    public void updateScoreById(String userName, int score){
        userRepository.updateScoreById(userName,score);
    }

}
