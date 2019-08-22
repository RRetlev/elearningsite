package com.codecool.elearning.model;

import org.springframework.stereotype.Component;

import java.util.*;


public class Question {

    private String question;

    private List<Answer> answers = new ArrayList<>();

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public String getQuestion() {
        return question;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public Question() {
    }

    public Question(String question) {
        this.question = question;
    }

    public void generateAnswer(boolean valid, String answerText) {
            this.answers.add(new Answer(valid, answerText));
        }


    public void shuffleAnswers() {
        Collections.shuffle(answers);
    }
}
