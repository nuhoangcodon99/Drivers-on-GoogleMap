package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findByName(String fileName);

    @Query("SELECT i.name FROM Image i")
    List<String> getDuplicateImageName();

    @Query("SELECT COUNT(*) FROM Image i")
    int getTotalImages();
}