package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.Question;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;


@Component
public class InMemoryQuestions {




    private ArrayList<Question> inMemoryQuestions = new ArrayList<>();
    public void addQuestions() {
        this.inMemoryQuestions.add(new Question("", "", "", "", ""));
        this.inMemoryQuestions.add(new Question("", "", "", "", ""));
        this.inMemoryQuestions.add(new Question("", "", "", "", ""));
    }


    public void addQuestion() {

    }

    public ArrayList<Question> getInMemoryQuestions() {
        return new ArrayList<>(inMemoryQuestions);
    }


}
