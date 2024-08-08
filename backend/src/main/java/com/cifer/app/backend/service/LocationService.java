package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Location;
import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.request.LocationRequest;

import java.util.Date;
import java.util.List;

public interface LocationService {
    String createLocation(LocationRequest locationRequest, String email); //create location when a driver is active or user order a service.

    String updateLocationByUserEmail(String email, Location newLocation); //update driver or user's location

    String deleteLocation(Log log, String status); //delete location after service complete

    Location getLocationByUserId(Long id, Date startDate, Date endDate); //get current location of login user

    List<Location> getAllLocations(Date startDate, Date endDate); //get all customers, drivers's locations, used by admin
}
