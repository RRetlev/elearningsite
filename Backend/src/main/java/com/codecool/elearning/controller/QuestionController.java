package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    private InMemoryQuestions inMemoryQuestions;

    @GetMapping("/question")
    public Question getRandomQuestion() {
        return inMemoryQuestions.getRandomInMemoryQuestion();
    }

    @PostMapping("/question")
    @ResponseBody
    public boolean checkAnswer(@RequestParam boolean check) {
        return false;
    }

}

