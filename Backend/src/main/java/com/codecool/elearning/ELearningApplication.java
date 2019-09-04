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


            User user = User.builder()
                    .userName("Béla")
                    .score(0)
                    .build();

            userRepository.save(user);

            question.setAnswers(Arrays.asList(answer1,answer2,answer3,answer4));
            questionRepository.save(question);
        };
    }

}
