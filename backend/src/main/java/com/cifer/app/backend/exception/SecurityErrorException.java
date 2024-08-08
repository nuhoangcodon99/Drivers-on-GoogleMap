package com.cifer.app.backend.exception;

public class SecurityErrorException extends RuntimeException {
    public SecurityErrorException(String errorMessage) {
        super(errorMessage);
    }
}
