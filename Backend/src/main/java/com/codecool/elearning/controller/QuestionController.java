package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RestController
public class QuestionController {

    @Autowired
    private InMemoryQuestions inMemoryQuestions;

    @GetMapping("/question")
    public Question getRandomQuestion() {
        return inMemoryQuestions.getRandomInMemoryQuestion();
    }

    @PostMapping("/question")
    public Question getNextQuestion() {
        return inMemoryQuestions.getRandomInMemoryQuestion();
    }

    @PostMapping("/new-question")
    @ResponseBody
    public Question addNewQuestion(@RequestParam String question, String validAnswer, String invalid1, String invalid2, String invalid3) {
        inMemoryQuestions.addQuestion(new Question(question, validAnswer, invalid1, invalid2, invalid3));
        if (inMemoryQuestions.getQuestionByName(question) != null) {
            return inMemoryQuestions.getQuestionByName(question);
        }
        return null;
    }
}

