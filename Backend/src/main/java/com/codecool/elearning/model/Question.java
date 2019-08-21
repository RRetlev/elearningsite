package com.codecool.elearning.model;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;


public class Question {

    private String question;

    public String getQuestion() {
        return question;
    }

    private Map<String, Boolean> answers = new HashMap<>();

    public Map<String, Boolean> getAnswers() {
        return answers;
    }

    public Question(String question, String a1, String a2, String a3, String a4) {
        this.question = question;
        addAnswers(a1, a2, a3, a4);
    }

    public void addAnswers(String a1, String a2, String a3, String a4) {
        answers.put(a1, true);
        answers.put(a2, false);
        answers.put(a3, false);
        answers.put(a4, false);
    }
}
