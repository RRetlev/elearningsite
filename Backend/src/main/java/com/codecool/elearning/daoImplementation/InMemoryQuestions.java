package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.gameEntity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Component
public class InMemoryQuestions {

    @Autowired
    private Random random;

    private int lastQuestionNumber;


    private List<Question> inMemoryQuestions = new ArrayList<>();

    public InMemoryQuestions() {
        addQuestions();
    }

    public List<Question> getInMemoryQuestions() {
        return inMemoryQuestions;
    }

    public void addQuestions() {

        //q1.generateAnswer(true,"Blue");
        //q1.generateAnswer(false,"Yellow");
        //q1.generateAnswer(false,"Green");
        //q1.generateAnswer(false,"Red");

        //q2.generateAnswer(true,"I seek the Holy Grail!");
        //q2.generateAnswer(false,"To wash an elephant's feet!.");
        //q2.generateAnswer(false,"I wish to catch a cold with a butterfly-net!");
        //q2.generateAnswer(false,"World peace!");

        //q3.generateAnswer(true,"What do you mean? An african or european swallow?");
        //q3.generateAnswer(false,"42 km/h");
        //q3.generateAnswer(false,"42 mph");
        //q3.gener
    }


    public void addQuestion(Question question) {
        inMemoryQuestions.add(question);

    }

    public Question getRandomInMemoryQuestion() {

        int newQuestionNumber = random.nextInt(inMemoryQuestions.size());

        while (newQuestionNumber == lastQuestionNumber) {
            newQuestionNumber = random.nextInt(inMemoryQuestions.size());
        }
        lastQuestionNumber = newQuestionNumber;
        Question returnQuestion = inMemoryQuestions.get(newQuestionNumber);
       // returnQuestion.shuffleAnswers();

        return returnQuestion;
    }

    public Question getQuestionByName(String name) {

        for (Question question : inMemoryQuestions) {
            if (question.getQuestion().equals(name)) {
                return question;
            }
        }
        return null;
    }
}
