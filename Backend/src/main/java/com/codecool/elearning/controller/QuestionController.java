package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.daoImplementation.QuestionDBService;
import com.codecool.elearning.daoImplementation.UserDBService;
import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.userEntity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.GeneratedValue;

@CrossOrigin
@RestController
public class QuestionController {
    @Autowired
    private InMemoryQuestions inMemoryQuestions;

    @Autowired
    private QuestionDBService questionDBService;

    @Autowired
    private UserDBService userDBService;

    @GetMapping("/question")
    public Question getRandomQuestion() {
        return questionDBService.getrandomQuestion();
    }

    @PostMapping("/question")
    public Question getNextQuestion() {
        return questionDBService.getrandomQuestion();
    }
    @GetMapping("/user")
    public User getUser(){
        return userDBService.getUserById(1l);
    }

    @PostMapping("/user")
    @ResponseBody
    public User setHighScore(@RequestBody User user){
        userDBService.updateScoreById(user.getUserName(),user.getScore());
        return user;
    }

    @PostMapping("/new-question")
    @ResponseBody
    public Question addNewQuestion(@RequestBody Question question) {
        questionDBService.addQuestion(question);
        return question;
    }
}

