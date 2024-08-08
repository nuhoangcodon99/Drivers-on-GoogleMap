import { InfoWindow, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const Directions = ({ origin, destination }) => {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!routesLibrary || !map) {
            return;
        }
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
    }, [routesLibrary, map]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) {
            return;
        }
        directionsService.route({
            origin: { lat: origin.latitude, lng: origin.longitude }, // Latitude and longitude for 100 Front St, Toronto ON
            destination: { lat: destination.latitude, lng: destination.longitude }, // Latitude and longitude for 500 College St, Toronto ON
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response => {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        })
    }, [directionsService, directionsRenderer]);

    if (!leg) {
        return null;
    }

    return (
        <div>
            {open && (
                <InfoWindow onCloseClick={() => setOpen(false)}>
                    <p>{selected.summary}</p>
                    <p>{leg.start_address}</p>
                    <p>{leg.distance?.text}</p>
                    <p>{leg.duration?.text}</p>
                </InfoWindow>
            )}
        </div>
    );
}

export default Directions;