package com.codecool.elearning.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Random;

@Configuration
public class Utils {

    @Bean
    public Random random() {
        return new Random();
    }
}
