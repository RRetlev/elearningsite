package com.codecool.elearning.repository;

import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.gameEntity.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query("SELECT id FROM Question q")
    List<Integer> getIds();


    Page<Question> findAll(Pageable pageable);


    List<Question> findAllByTopic(Topic topic);
}
