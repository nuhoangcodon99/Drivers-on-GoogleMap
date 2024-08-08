package com.cifer.app.backend.exception;

public class RoleNotFoundException extends RuntimeException {
    public RoleNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
