package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.daoImplementation.QuestionDBService;
import com.codecool.elearning.daoImplementation.UserDBService;
import com.codecool.elearning.model.gameEntity.Answer;
import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.userEntity.QuestionGameUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

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
    public QuestionGameUser getUser(){
        return userDBService.getUserById(1l);
    }

    @PostMapping("/user")
    @ResponseBody
    public QuestionGameUser setHighScore(@RequestBody QuestionGameUser questionGameUser){
        userDBService.updateScoreById(questionGameUser.getUserName(), questionGameUser.getScore());
        return questionGameUser;
    }

    @PostMapping("/new-question")
    @ResponseBody
    public Question addNewQuestion(@RequestBody Question question) {
        List<Answer> answers = question.getAnswers();
        System.out.println(Arrays.asList(answers));
        questionDBService.addQuestion(question,answers);
        return question;
    }
}

