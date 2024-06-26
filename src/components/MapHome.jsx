import React, { useEffect, useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    ControlPosition,
} from "@vis.gl/react-google-maps";

import Config from "./../config";
import drapeau from "./../images/logo-map.png";

function MapHome() {
    const [zoom, setZoom] = useState(15);
    const { location } = Config;
    

    

    

    return (
        <div className="map">
            <APIProvider apiKey={"AIzaSyCLMj2zUQrahRb_sc94NvpfuQavAF8HIgM"}>
                <Map
                    defaultCenter={location}
                    defaultZoom={zoom}
                    mapId={"7a9e2ebecd32a903"}
                    fullscreenControl={false}
                    //zoomControl={false}
                    streetViewControl={false}
                    mapTypeControl={false}
                    zoomControlOptions={{
                        position: ControlPosition.RIGHT_CENTER,
                    }}
                    backgroundColor={"#0d0d0d"}
                    //disableDefaultUI={true}
                >
                    <AdvancedMarker
                        position={location}
                        onClick={() => setZoom(2)}
                    >
                        <span className="icon_map">
                            <img width={33} src={drapeau} alt="l" />​
                        </span>
                    </AdvancedMarker>
                </Map>
            </APIProvider>
        </div>
    );
}

export default React.memo(MapHome);
