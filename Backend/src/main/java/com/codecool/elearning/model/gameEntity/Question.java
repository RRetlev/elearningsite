package com.codecool.elearning.model.gameEntity;

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
    private long id;

    private String question;

    @OneToMany(mappedBy = "question",cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @EqualsAndHashCode.Exclude
    private List<Answer> answers = new ArrayList<>();

}
