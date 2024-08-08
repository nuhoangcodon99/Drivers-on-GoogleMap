package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    @Query("SELECT u FROM User u JOIN Role r ON u.role.id = r.id WHERE r.name = :role")
    List<User> findAllByRole(String role);

    Optional<User> findByEmail(String email);

    void deleteByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    Optional<User> login(String email, String password);
}
