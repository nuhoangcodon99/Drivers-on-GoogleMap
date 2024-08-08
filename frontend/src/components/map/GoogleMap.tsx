import GoogleAPIKey from "../../data/GoogleAPIKey.json";

import {
    APIProvider,
    Map,
}
    from "@vis.gl/react-google-maps"
import Directions from "./Directions";
import { useEffect, useState } from "react";
import { getAllLogs, getLogsBasedOnDriver } from "../config/ApiService";
import LocationRegister from "../location/LocationRegister";

const GoogleMap = ({ driverEmail }) => {
    const [logsInfo, setLogsInfo] = useState([]);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const center = {
        lat: 10.8213684,
        lng: 106.6027799,
    }

    const handleClick = (e) => {
        setLatitude(e.detail.latLng.lat);
        setLongitude(e.detail.latLng.lng);
    }

    useEffect(() => {
        setTimeout(async () => {
            getAllLogs().then((data) => {
                setLogsInfo(data);
            }).catch((error) => {
                console.log(error.message);
            });

        }, 1000);
    }, [])

    useEffect(() => {
        if(driverEmail !== null) {
            getLogsBasedOnDriver(driverEmail).then((data) => {
                setLogsInfo(data)
            })
        }
    }, [])

    return (
        <div>
            <APIProvider apiKey={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div style={{ height: "70vh", width: "100%" }}>
                    <Map onClick={e => handleClick(e)} defaultCenter={center} defaultZoom={9} mapId={GoogleAPIKey.REACT_APP_GOOGLE_MAPS_ID}>
                        {logsInfo && logsInfo.map && logsInfo.map((log) => (
                            <Directions key={log.id} origin={log.order.location} destination={log.driver.location} />
                        ))}
                    </Map>
                </div>
            </APIProvider>
            <LocationRegister latitude={latitude} longitude={longitude} />
        </div>
    )
}

export default GoogleMap;