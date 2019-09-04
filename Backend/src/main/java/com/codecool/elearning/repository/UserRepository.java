package com.codecool.elearning.repository;

import com.codecool.elearning.model.userEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User,Long> {

    User getUserById(Long id);


    @Query("update User u set u.score = :score where u.userName = :userName")
    @Modifying(clearAutomatically = true)
    @Transactional
    void updateScoreById(@Param("userName") String userName,@Param("score") int score);
}
