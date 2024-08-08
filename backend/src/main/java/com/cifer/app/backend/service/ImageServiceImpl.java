package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Image;
import com.cifer.app.backend.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    private final String FOLDER_PATH = "I/FullStackApplicationPractice/Drivers-on-GoogleMap/data/";

    @Override
    public Image uploadImageToFileSystem(MultipartFile file) throws IOException {
        String filePath = FOLDER_PATH + file.getOriginalFilename();
        Date currentDate = new Date();
        Image fileData = new Image();
        int versionCopy = 0;
        for (int i = 0; i < getTotalImageInFileSystem(); i++) {
            if (file.getOriginalFilename().equalsIgnoreCase(imageRepository.getDuplicateImageName().get(i))) {
                versionCopy++;
            }
        }

        fileData.setName(file.getOriginalFilename());
        fileData.setCreatedTime(currentDate);
        fileData.setType(file.getContentType());
        fileData.setFilePath(filePath);
        fileData.setVersionCopy(versionCopy);

        if (fileData.getVersionCopy() == 0) {
            file.transferTo(new File(FOLDER_PATH + file.getOriginalFilename()));
        } else {
            file.transferTo(new File(FOLDER_PATH +
                    file.getOriginalFilename()
                            .substring(0, file.getOriginalFilename().lastIndexOf('.'))
                    + " " + "(" + fileData.getVersionCopy() + ")" +
                    file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.'))));
        }

        return imageRepository.save(fileData);
    }

    @Override
    public byte[] getImageFromFileSystem(Long id) throws IOException {
        Optional<Image> fileData = imageRepository.findById(id);
        String filePath = fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;    }

    @Override
    public Image updateImageInFileSystem(String fileName, MultipartFile file) throws IOException {
        Optional<Image> fileData = imageRepository.findByName(fileName);
        String filePath = FOLDER_PATH + file.getOriginalFilename();

        Image imageData = fileData.get();
        imageData.setName(file.getOriginalFilename());
        imageData.setType(file.getContentType());
        imageData.setFilePath(filePath);

        file.transferTo(new File(FOLDER_PATH + imageData.getId() + "_" + file.getOriginalFilename()));

        return imageRepository.save(imageData);
    }

    @Override
    public int getTotalImageInFileSystem() {
        return imageRepository.getTotalImages();
    }

    @Override
    public List<String> getDuplicatedImageInFileSystem() {
        return imageRepository.getDuplicateImageName();
    }
}
