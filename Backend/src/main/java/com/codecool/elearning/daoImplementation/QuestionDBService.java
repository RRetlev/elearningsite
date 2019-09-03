package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.Question;
import com.codecool.elearning.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.Random;


@Component
public class QuestionDBService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private Random random;

    private Long lastQuestionId;

    public Question getrandomQuestion() {

        long count = questionRepository.count();
        int id = (int) (Math.random() * count);

        Page<Question> questionPage = questionRepository.findAll(new PageRequest(id, 1));
        Question q = null;
        if (questionPage.hasContent()) {
            q = questionPage.getContent().get(0);
        }
        return q;
    }
// not use many annotations


}
