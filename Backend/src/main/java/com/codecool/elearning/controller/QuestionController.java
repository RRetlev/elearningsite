package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

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
    public Question addNewQuestion(@RequestBody Question question) {
        inMemoryQuestions.addQuestion(question);
        return question;
    }
}

