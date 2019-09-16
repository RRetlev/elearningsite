package com.codecool.elearning.model.gameEntity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Answer {

    @Id
    @GeneratedValue
    @JsonIgnore
    private long id;


    private String text;
    private boolean rightAnswer;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Question question;
}
