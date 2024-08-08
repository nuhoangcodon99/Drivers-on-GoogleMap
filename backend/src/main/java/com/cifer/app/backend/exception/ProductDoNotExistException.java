package com.cifer.app.backend.exception;

public class ProductDoNotExistException extends RuntimeException {
    public ProductDoNotExistException(String errorMessage) {
        super(errorMessage);
    }
}
