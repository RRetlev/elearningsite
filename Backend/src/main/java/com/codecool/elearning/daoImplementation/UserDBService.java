package com.codecool.elearning.daoImplementation;


import com.codecool.elearning.model.userEntity.QuestionGameUser;
import com.codecool.elearning.model.userEntity.UserCredentials;
import com.codecool.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class UserDBService {
    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserDBService() {
        this.passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public QuestionGameUser getUserById(Long id) {
        return userRepository.getUserById(id);
    }

    /**
     * Updates the top score of the given user in the Database
     *
     * @param userName target user
     * @param score    new score
     */
    public void updateScoreById(String userName, int score) {
        userRepository.updateScoreById(userName, score);
    }

    public void registerNewUser(UserCredentials userCredentials) {
        userRepository.save(QuestionGameUser.builder()
                .psw(passwordEncoder.encode(userCredentials.getPassword()))
                .userName(userCredentials.getUsername())
                .score(0)
                .roles(Arrays.asList("USER"))
                .build());
    }

}
