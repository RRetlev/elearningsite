package com.codecool.elearning.repository;

import com.codecool.elearning.model.gameEntity.Answer;
import com.codecool.elearning.model.gameEntity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {


    @Query("update Answer a SET a.question = :question where a.question = NULL")
    @Modifying(clearAutomatically = true)
    @Transactional
    void updateQuestion(@Param("question") Question question);
}
