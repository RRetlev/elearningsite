package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.Question;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Component
public class InMemoryQuestions {

    private int lastQuestionNumber;


    private List<Question> inMemoryQuestions = new ArrayList<>();

    public InMemoryQuestions() {
        addQuestions();
    }

    public void addQuestions() {
        this.inMemoryQuestions.add(new Question("asd", "a", "b", "c", "d"));
        this.inMemoryQuestions.add(new Question("dsa", "d", "c", "b", "a"));
        this.inMemoryQuestions.add(new Question("xxxx", "xxxx", "xxx", "xx", "x"));
    }


    public void addQuestion(Question question) {
        inMemoryQuestions.add(question);

    }

    public Question getRandomInMemoryQuestion() {
        Random random = new Random();
        int newQuestionNumber = random.nextInt(inMemoryQuestions.size());

        while (newQuestionNumber == lastQuestionNumber) {
            newQuestionNumber = random.nextInt(inMemoryQuestions.size());
        }
        lastQuestionNumber = newQuestionNumber;

        return inMemoryQuestions.get(newQuestionNumber);
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
