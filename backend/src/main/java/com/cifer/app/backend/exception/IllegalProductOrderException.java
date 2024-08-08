package com.cifer.app.backend.exception;

public class IllegalProductOrderException extends RuntimeException {
    public IllegalProductOrderException(String errorMessage) {
        super(errorMessage);
    }
}
