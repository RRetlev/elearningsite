package com.codecool.elearning;

import com.codecool.elearning.controller.QuestionController;
import com.codecool.elearning.daoImplementation.InMemoryQuestions;
import com.codecool.elearning.model.Question;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class QuestionTest {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @LocalServerPort
    private int port;

    @Autowired
    private InMemoryQuestions inMemoryQuestions;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private QuestionController controller;

    @Before
    public void init() {
        inMemoryQuestions.getInMemoryQuestions().clear();
        inMemoryQuestions.addQuestions();
    }

    @Test
    public void contexLoads() {
        assertThat(controller).isNotNull();
    }


    @Test
    public void randomQuestionReturnsWithAValidKey() {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/question",
                String.class)).contains("\"question\":\"");
    }

    @Test
    public void newQuestionAddedToInMemoryQuestions() {

        int numberOfQuestions = inMemoryQuestions.getInMemoryQuestions().size();

        String addQuestionUrl = "http://localhost:" + port + "/new-question";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        /*JSONObject questionJsonObject = new JSONObject();
        questionJsonObject.put("question", "something");*/
        /*questionJsonObject.put("answers","[{\n" +
                "            \"text\": \"yellow\",\n" +
                "            \"right\": false\n" +
                "        }]");

         */


        Question question = new Question("");
        HttpEntity<Question> request = new HttpEntity<>(question, headers);
        restTemplate.postForObject(addQuestionUrl, request, String.class);

        int newNumberOfQuestions = inMemoryQuestions.getInMemoryQuestions().size();

        assertThat(newNumberOfQuestions).isEqualTo(numberOfQuestions+1);


    }


}
