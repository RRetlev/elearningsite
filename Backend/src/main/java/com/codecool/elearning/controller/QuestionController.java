package com.codecool.elearning.controller;


import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.daoImplementation.QuestionDBService;
import com.codecool.elearning.daoImplementation.UserDBService;
import com.codecool.elearning.model.gameEntity.Answer;
import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.gameEntity.Topic;
import com.codecool.elearning.model.userEntity.QuestionGameUser;
import com.codecool.elearning.repository.AnswerRepository;
import org.jboss.logging.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.plaf.basic.BasicDesktopIconUI;
import java.util.ArrayList;
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
    private AnswerRepository answerRepository;

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

//    @GetMapping("/user")
//    public QuestionGameUser getUser() {
//        return userDBService.getUserById(1L);
//    }

    @PostMapping("/register")
    public void registerUserInDatabase(@RequestBody QuestionGameUser questionGameUser){
        userDBService.registerNewUser(questionGameUser);
    }

    @PostMapping("/user")
    @ResponseBody
    public QuestionGameUser setHighScore(@RequestBody QuestionGameUser questionGameUser) {
        userDBService.updateScoreById(questionGameUser.getUserName(), questionGameUser.getScore());
        return questionGameUser;
    }

    @PostMapping("/new-question")
    @ResponseBody
    public Question addNewQuestion(@RequestBody Question question) {
        questionDBService.addQuestion(question);
        answerRepository.updateQuestion(question);
        return question;
    }

    @GetMapping("/run/{topic}/{count}/start")
    public void getRunWithTopic(@PathVariable("topic") Topic topic, @PathVariable("count") int count) {
        questionDBService.getQuestionsByTopic(topic, count);
    }

    @GetMapping("/run/game")
    public Question getQuestionFromRunQuestions() {
        return questionDBService.getOneQuestionFromTopic();
    }
}

