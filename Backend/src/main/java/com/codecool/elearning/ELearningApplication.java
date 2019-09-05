package com.codecool.elearning;

import com.codecool.elearning.model.gameEntity.Answer;
import com.codecool.elearning.model.gameEntity.Question;
import com.codecool.elearning.model.userEntity.User;
import com.codecool.elearning.repository.QuestionRepository;
import com.codecool.elearning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class ELearningApplication {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(ELearningApplication.class, args);
    }


    @Bean
    public CommandLineRunner init(){
        return args -> {

            Question question = Question.builder()
                    .question("Whats my favourite Color")
                    .build();

            Answer answer1 = Answer.builder()
                    .text("yes")
                    .rightAnswer(true)
                    .question(question)
                    .build();
            Answer answer2 = Answer.builder()
                    .text("no")
                    .rightAnswer(false)
                    .question(question)
                    .build();
            Answer answer3 = Answer.builder()
                    .text("no")
                    .rightAnswer(false)
                    .question(question)
                    .build();
            Answer answer4 = Answer.builder()
                    .text("no")
                    .rightAnswer(false)
                    .question(question)
                    .build();

            Question question2 = Question.builder()
                    .question("Second Question")
                    .build();

            Answer answer5 = Answer.builder()
                    .text("nem")
                    .rightAnswer(true)
                    .question(question2)
                    .build();
            Answer answer6 = Answer.builder()
                    .text("igen")
                    .rightAnswer(false)
                    .question(question2)
                    .build();
            Answer answer7 = Answer.builder()
                    .text("igen")
                    .rightAnswer(false)
                    .question(question2)
                    .build();
            Answer answer8 = Answer.builder()
                    .text("igen")
                    .rightAnswer(false)
                    .question(question2)
                    .build();


            User user = User.builder()
                    .userName("Béla")
                    .score(0)
                    .build();

            userRepository.save(user);

            question.setAnswers(Arrays.asList(answer1,answer2,answer3,answer4));
            question2.setAnswers(Arrays.asList(answer5,answer6,answer7,answer8));
            questionRepository.save(question);
            questionRepository.save(question2);
        };
    }

}
