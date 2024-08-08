package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    boolean existsByLatitude(double latitude);

    boolean existsByLongitude(double longitude);
}
