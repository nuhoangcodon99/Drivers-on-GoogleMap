package com.cifer.app.backend.exception;

public class IllegalPositionException extends RuntimeException {
    public IllegalPositionException(String errorMessage) {
        super(errorMessage);
    }
}
