package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LogRepository extends JpaRepository<Log, Long> {
    @Query("SELECT l FROM Log l JOIN User u ON l.driver.id = u.id WHERE u.email = :driverEmail")
    Optional<List<Log>> findAllByDriverEmail(String driverEmail);
}
