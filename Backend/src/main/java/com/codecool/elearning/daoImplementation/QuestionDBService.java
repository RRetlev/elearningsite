package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class QuestionDBService {

    @Autowired
    private QuestionRepository questionRepository;


    /**
     * Returns a random question from the database
     * @return the Question
     */
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

    /**
     * Adds the given question to the Database
     * @param question your given question
     */
    public void addQuestion(Question question){
        questionRepository.save(question);
    }

    public long getAllQuestionsCount(){
        return questionRepository.count();
    }
// not use many annotations


}
