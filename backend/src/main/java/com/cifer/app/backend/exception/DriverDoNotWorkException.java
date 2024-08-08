package com.cifer.app.backend.exception;

public class DriverDoNotWorkException extends RuntimeException {
    public DriverDoNotWorkException(String errorMessage) {
        super(errorMessage);
    }
}
