package com.cifer.app.backend.exception;

public class LogDoNotExistException extends RuntimeException {
    public LogDoNotExistException(String errorMessage) {
        super(errorMessage);
    }
}
