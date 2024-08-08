package com.cifer.app.backend.service;

import com.cifer.app.backend.model.User;
import com.cifer.app.backend.request.RegistrationRequest;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers(); //get all current users

    public List<User> getAllUsersByRole(String role); //filter all users by their role

    User register(RegistrationRequest registrationRequest);

    User getUserByEmail(String email);

    String updateUserByEmail(String email, User newUser);

    String deleteUserByEmail(String email);

    User login(String email, String password);
}
