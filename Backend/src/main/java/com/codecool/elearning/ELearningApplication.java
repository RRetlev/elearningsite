package com.codecool.elearning;

import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import com.codecool.elearning.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ELearningApplication {

    @Autowired
    QuestionRepository questionRepository;

    public static void main(String[] args) {
        SpringApplication.run(ELearningApplication.class, args);
    }


    @Bean
    public CommandLineRunner init(){
        return args -> {
            Question question = Question.builder()
                    .question("Whats my favourite Color")
                    .build();




            questionRepository.save(question);
        };
    }

}
