package com.cifer.app.backend.controller;

import com.cifer.app.backend.exception.UserAlreadyExistException;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.request.RegistrationRequest;
import com.cifer.app.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {
    private final UserService userService;

    @PostMapping("/register-user")
    public ResponseEntity<String> register(@RequestParam("firstName") String firstName,
                                           @RequestParam("lastName") String lastName,
                                           @RequestParam("email") String email,
                                           @RequestParam("password") String password,
                                           @RequestParam("role") String role) {
        try {
            RegistrationRequest registrationRequest = new RegistrationRequest(firstName, lastName, email, password, role);
            userService.register(registrationRequest);
            return ResponseEntity.ok("Registration Successful");
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> authenticateUser(@RequestParam("email") String email,
                                                 @RequestParam("password") String password) {
        return ResponseEntity.ok(userService.login(email, password));
    }
}
