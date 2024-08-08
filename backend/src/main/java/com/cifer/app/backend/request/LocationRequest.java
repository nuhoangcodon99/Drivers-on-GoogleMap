package com.cifer.app.backend.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LocationRequest {
    private double latitude;
    private double longitude;
}
