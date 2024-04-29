import React, { useState } from "react";
import {
    APIProvider,
    Map,
    Marker,
    ControlPosition,
    MapControl,
} from "@vis.gl/react-google-maps";

import Config from "./../config"

function MapHome() {

    const [zoom] = useState(14);

    const MAP_IDS = [
        'bf51a910020fa25a',
        '49ae42fed52588c3',
        '3fec513989decfcd',
        '7a9e2ebecd32a903'
      ];

    const {location} = Config

    const position = location;
    return (
        <div className="map">
            {zoom > 20 && <h1>gii</h1>}
            <APIProvider apiKey={"AIzaSyCLMj2zUQrahRb_sc94NvpfuQavAF8HIgM"}>
                <Map
                    defaultCenter={position}
                    defaultZoom={zoom}
                    mapId={MAP_IDS[3]}
                    fullscreenControl={false}
                    zoomControl={false}
                    streetViewControl={false}
                    mapTypeControl={false}
                    zoomControlOptions={false}
                    backgroundColor={"#0d0d0d"}
                    disableDefaultUI={true}
                    
                >
                    <Marker position={position} />
                    
                </Map>
            </APIProvider>
        </div>
    );
}

export default MapHome;
