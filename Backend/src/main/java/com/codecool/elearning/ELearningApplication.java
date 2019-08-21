package com.codecool.elearning;

import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ELearningApplication {

    public static void main(String[] args) {
        SpringApplication.run(ELearningApplication.class, args);
    }

}
