package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {

    Image uploadImageToFileSystem(MultipartFile file) throws IOException;

    byte[] getImageFromFileSystem(Long id) throws IOException;

    Image updateImageInFileSystem(String fileName, MultipartFile file) throws IOException;

    int getTotalImageInFileSystem();

    List<String> getDuplicatedImageInFileSystem();
}
