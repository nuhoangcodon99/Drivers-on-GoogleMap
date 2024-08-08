package com.cifer.app.backend.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
public class LoginRequest {
    private String email;
    private String password;
}
