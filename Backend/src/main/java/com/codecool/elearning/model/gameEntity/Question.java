package com.codecool.elearning.model.gameEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Question {

    @Id
    @GeneratedValue
    @JsonIgnore
    private long id;

    private String question;

    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.MERGE})
    @EqualsAndHashCode.Exclude
    private List<Answer> answers = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Topic topic;

}
