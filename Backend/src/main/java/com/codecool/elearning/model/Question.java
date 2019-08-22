package com.codecool.elearning.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Question {

    private String question;
    private List<Answer> answers = new ArrayList<>();

    public String getQuestion() {
        return question;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public Question(String question, String... answerTexts) {
        boolean firstTrue = true;
        this.question = question;
        for (String answer : answerTexts) {
            this.answers.add(new Answer(firstTrue, answer));
            firstTrue = false;
        }
    }

}
