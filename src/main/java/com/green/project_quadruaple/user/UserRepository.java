package com.green.project_quadruaple.user;

import com.green.project_quadruaple.entity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
