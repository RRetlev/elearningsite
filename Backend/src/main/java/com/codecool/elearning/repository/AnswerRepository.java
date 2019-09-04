package com.codecool.elearning.repository;

import com.codecool.elearning.model.gameEntity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
}
