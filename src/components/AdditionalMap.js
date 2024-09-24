import React, { useRef, useState } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
// import markerIcon from "leaflet/dist/images/marker-icon.png"
// import markerShadow from "leaflet/dist/images/marker-shadow.png"
// import markerRetina from "leaflet/dist/images/marker-icon-2x.png"

// Leaflet.Icon.Default.mergeOptions({
//     iconRetinaUrl: markerRetina,
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow
// });


import { Icon } from "leaflet";

const icon = new Icon({
  iconUrl: "/markerIcon.svg",
  iconSize: [30, 30],
});

const MapComponent = () => { 
    const mapRef = useRef();
    const zoom = 12;
    const containerStyle = {
        width: "100%",
        height: "400px"
    }
    const center = {
        lat: 55.86639,
        lng: -4.24919
    }
    const initialMarkers = [
        {
            position: {
                lat: 55.86639,
                lng: -4.24919
            },
            draggable: true
        },
        {
            position: {
                lat: 55.88639,
                lng: -4.24919
            },
            draggable: false
        },
        {
            position: {
                lat: 55.86639,
                lng: -4.29419
            },
            draggable: true
        },
    ];

    const [markers, setMarkers] = useState(initialMarkers);

    const mapClicked = async (event) => {
        console.log(event.latlng.lat, event.latlng.lng)   
    }

    const markerClicked = (marker, index) => {   
        console.log(marker.position.lat, marker.position.lng) 
    }

    const markerDragEnd = (event, index) => {
        console.log(event.lat, event.lng)
    } 

    return (
        <MapContainer
            style={containerStyle}
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapContent
                onClick={mapClicked}
            />
            {markers.map((marker, index) => (
                <MarkerContent
                    key={index}
                    position={marker.position}
                    draggable={marker.draggable}
                    onMarkerClick={event => markerClicked(marker, index)}
                    onDragEnd={event => markerDragEnd(event
                        , index)}
                />
            ))}
        </MapContainer>
    );
};

const MapContent = ({ onClick }) => {  
    const map = useMapEvents({
        click: event => onClick(event)
    }) 
    return null;
}

const MarkerContent = (props) => {
    const markerRef = useRef();
    const { position, draggable, onMarkerClick, onDragEnd } = props;  
    
    return <Marker
        position={position}
        icon={icon}
        draggable={draggable}
        eventHandlers={{
            click: event => onMarkerClick(event),
            dragend: () => onDragEnd(markerRef.current.getLatLng())
        }}
        ref={markerRef}
    >
        <Popup>
            <b>{position.lat}, {position.lng}</b>
        </Popup>
    </Marker>
}

export default MapComponent;
