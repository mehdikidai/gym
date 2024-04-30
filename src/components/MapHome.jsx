import React, { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    ControlPosition
} from "@vis.gl/react-google-maps";

import Config from "./../config";
import drapeau from "./../images/pin.png";


function MapHome() {

    const [zoom,setZoom] = useState(15);
    const { location } = Config;


    return (
        <div className="map">
            
            <APIProvider apiKey={"AIzaSyCLMj2zUQrahRb_sc94NvpfuQavAF8HIgM"}>
                <Map
                    defaultCenter={location}
                    defaultZoom={zoom}
                    //zoom={zoom}
                    mapId={"7a9e2ebecd32a903"}
                    fullscreenControl={false}
                    //zoomControl={false}
                    streetViewControl={false}
                    mapTypeControl={false}
                    zoomControlOptions={{
                        position:ControlPosition.RIGHT_CENTER,
                    }}
                    backgroundColor={"#0d0d0d"}
                    //disableDefaultUI={true}
                >
                    
                    <AdvancedMarker position={location} onClick={()=>setZoom(2)}>
                        <span className="icon_map">

                            <img width={45} src={drapeau} alt="l" />​
                            
                        </span>
                    </AdvancedMarker>
                </Map>
            </APIProvider>
        </div>
    );
}

export default React.memo(MapHome);
