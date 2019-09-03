package com.codecool.elearning.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity



public class Question {

    @Id
    @GeneratedValue
    private long id;

    private String question;

    //private List<Answer> answers = new ArrayList<>();


    //public void setAnswers(List<Answer> answers) {
      //  this.answers = answers;
    //}


    //public List<Answer> getAnswers() {
      //  return answers;
    //}

    //public void generateAnswer(boolean valid, String answerText) {
      //      this.answers.add(new Answer(valid, answerText));
        //}


    //public void shuffleAnswers() {
      //  Collections.shuffle(answers);
    //}
}
