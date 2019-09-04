package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;


@Component
public class QuestionDBService {

    @Autowired
    private QuestionRepository questionRepository;

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

    public void addQuestion(Question question){
        questionRepository.save(question);
    }
// not use many annotations


}
