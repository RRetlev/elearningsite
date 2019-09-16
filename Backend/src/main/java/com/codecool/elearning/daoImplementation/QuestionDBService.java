package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.gameEntity.Answer;
import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.gameEntity.Topic;
import com.codecool.elearning.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Component
public class QuestionDBService {
    private List<Question> questions = new ArrayList<>();


    @Autowired
    private static QuestionRepository questionRepository;


    /**
     * Returns a random question from the database
     *
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
     *
     * @param question your given question
     */
    public void addQuestion(Question question) {
        questionRepository.save(question);
    }

    public long getAllQuestionsCount() {
        return questionRepository.count();
    }
// not use many annotations

    public void getQuestionsByTopic(Topic topic, int count) {
        List<Question> allQuestions = questionRepository.findAllByTopic(topic);
        Collections.shuffle(allQuestions);
        if (allQuestions.size() < count) {
            count = allQuestions.size();
        }
        this.questions = allQuestions.subList(0, count);
    }

    public Question getOneQuestionFromTopic() {
        if (questions.size() > 0) {
            Question toSend = questions.get(0);
            questions.remove(0);
            return toSend;
        } else {
            return null;
        }
    }

}
