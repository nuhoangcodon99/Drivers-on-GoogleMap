package com.cifer.app.backend.controller;

import com.cifer.app.backend.request.LocationRequest;
import com.cifer.app.backend.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/location")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LocationController {
    private final LocationService locationService;

    @PostMapping("/create-location")
    public ResponseEntity<String> createUserLocation(@RequestParam("email") String email,
                                                     @RequestParam("latitude") double latitude,
                                                     @RequestParam("longitude") double longitude) {
        LocationRequest locationRequest = new LocationRequest(latitude, longitude);
        locationService.createLocation(locationRequest, email);
        return ResponseEntity.ok("User's location assigned successfully");
    }
}
