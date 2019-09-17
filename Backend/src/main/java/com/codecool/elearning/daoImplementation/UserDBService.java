package com.codecool.elearning.daoImplementation;


import com.codecool.elearning.model.userEntity.QuestionGameUser;
import com.codecool.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDBService {
    @Autowired
    private UserRepository userRepository;

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

}
