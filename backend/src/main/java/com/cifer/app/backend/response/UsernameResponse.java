package com.cifer.app.backend.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UsernameResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
