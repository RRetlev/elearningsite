package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
public class QuestionController {

    @Autowired
    private InMemoryQuestions inMemoryQuestions;

    @GetMapping("/question")
    public ArrayList<Question> getRandomQuestion() {
        return inMemoryQuestions.getInMemoryQuestions();
    }


}
