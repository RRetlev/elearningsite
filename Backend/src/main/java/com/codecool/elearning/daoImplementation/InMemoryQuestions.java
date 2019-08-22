package com.codecool.elearning.daoImplementation;

import com.codecool.elearning.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Component
public class InMemoryQuestions {

    @Autowired
    private Random random;

    private int lastQuestionNumber;


    private List<Question> inMemoryQuestions = new ArrayList<>();

    public InMemoryQuestions() {
        addQuestions();
    }

    public void addQuestions() {
        this.inMemoryQuestions.add(new Question("What is my favourite color?",
                "Blue",
                "Green",
                "Yellow",
                "Red"));
        this.inMemoryQuestions.add(new Question("What is your quest?",
                "I seek the Holy Grail!",
                "To wash an elephant's feet!",
                "I wish to catch a cold with a butterfly-net!",
                "World peace"));
        this.inMemoryQuestions.add(new Question("What is the air-speed velocity of an unladen swallow?",
                "What do you mean? An African or European swallow?",
                "42 km/h",
                "42 mph",
                "42 m/s"));
    }


    public void addQuestion(Question question) {
        inMemoryQuestions.add(question);

    }

    public Question getRandomInMemoryQuestion() {

        int newQuestionNumber = random.nextInt(inMemoryQuestions.size());

        while (newQuestionNumber == lastQuestionNumber) {
            newQuestionNumber = random.nextInt(inMemoryQuestions.size());
        }
        lastQuestionNumber = newQuestionNumber;
        Question returnQuestion = inMemoryQuestions.get(newQuestionNumber);
        returnQuestion.shuffleAnswers();

        return returnQuestion;
    }

    public Question getQuestionByName(String name) {

        for (Question question : inMemoryQuestions) {
            if (question.getQuestion().equals(name)) {
                return question;
            }
        }
        return null;
    }
}
