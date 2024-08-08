package com.cifer.app.backend.exception;

public class ProductAlreadyExistException extends RuntimeException {
    public ProductAlreadyExistException(String errorMessage) {
        super(errorMessage);
    }
}
