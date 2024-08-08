package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.IllegalPositionException;
import com.cifer.app.backend.model.Location;
import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.repository.LocationRepository;
import com.cifer.app.backend.repository.UserRepository;
import com.cifer.app.backend.request.LocationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;
    private final UserRepository userRepository;

    @Override
    public String createLocation(LocationRequest locationRequest, String email) {
        if (locationRepository.existsByLatitude(locationRequest.getLatitude()) &&
            locationRepository.existsByLongitude(locationRequest.getLongitude())) {
            throw new IllegalPositionException("People cannot have the same position");
        }

        Location newLocation = new Location();
        newLocation.setLatitude(locationRequest.getLatitude());
        newLocation.setLongitude(locationRequest.getLongitude());
        Optional<User> user = userRepository.findByEmail(email);
        user.get().setLocation(newLocation);
        locationRepository.save(newLocation);
        userRepository.save(user.get());
        return "Create location successfully";
    }

    @Override
    public String updateLocationByUserEmail(String email, Location newLocation) {

        return "";
    }

    @Override
    public String deleteLocation(Log log, String status) {
        if (status.equalsIgnoreCase("Completed")) {
            Optional<User> customer = userRepository.findByEmail(log.getDriver().getEmail());
            Optional<User> driver = userRepository.findByEmail(log.getOrder().getEmail());
            customer.get().setLocation(null);
            driver.get().setLocation(null);
            userRepository.save(customer.get());
            userRepository.save(driver.get());
            return "Delete after transmission successfully";
        }
        return "Cannot delete, driver is working and customer is waiting";
    }

    @Override
    public Location getLocationByUserId(Long id, Date startDate, Date endDate) {
        return null;
    }

    @Override
    public List<Location> getAllLocations(Date startDate, Date endDate) {
        return List.of();
    }

}
