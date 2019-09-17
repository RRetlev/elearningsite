package com.codecool.elearning.repository;

import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.userEntity.QuestionGameUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepository extends JpaRepository<QuestionGameUser, Long> {

    QuestionGameUser getUserById(Long id);


    @Query("update QuestionGameUser u set u.score = :score where u.userName = :userName")
    @Modifying(clearAutomatically = true)
    @Transactional
    void updateScoreById(@Param("userName") String userName, @Param("score") int score);

    Optional<QuestionGameUser> getByUserName(String userName);
}
