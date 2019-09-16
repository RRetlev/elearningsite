package com.codecool.elearning.model.userEntity;


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
@Table(name = "`user`")
public class QuestionGameUser {

    @Id
    @GeneratedValue
    @JsonIgnore
    private long id;

    private String userName;

    private int score;

    //private String email;
}
