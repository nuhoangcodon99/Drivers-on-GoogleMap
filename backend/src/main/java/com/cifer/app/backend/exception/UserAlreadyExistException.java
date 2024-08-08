package com.cifer.app.backend.exception;

public class UserAlreadyExistException extends RuntimeException {
    public UserAlreadyExistException(String errorMessage) {
        super(errorMessage);
    }
}
