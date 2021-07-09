import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';



const MyMaps= ({props}) => {

    console.log(props)

// const [currentPosition, setCurrentPosition] = useState({lat:43.11016617798622,lng:-89.48826131670266})

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })

  const containerStyle = {
    height: "40vh",
    width: "50%"
  };

  const [map, setMap] = useState(null)

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

    const locations = [
        {
            id: 1,
            location: {
                lat: 59.3409,
                lng: 18.0754
            },
        },
            {
            id: 2,
            location: {
                lat: 59.3313,
                lng: 18.0311
            },
        },
            {
            id: 3,
            location: {
                lat: 19.734005,
                lng: -155.040745
            },
        },
            {
            id: 4,
            location: {
                lat: 35.90016,
                lng: 14.51000
            },
        },
        {
            id: 5,
            location: {
                lat: 36.0312,
                lng: 14.2180
            },
        },
        {
            id: 6,
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    const newCenter = locations.find(item => item.id === props.spotState.id)?.location
    console.log(newCenter)


    return (
      <div className="map_page__container">

        <div style={{ height: '900px', width: '900px' }}>
            {isLoaded && <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={16}
              center={newCenter}
              onUnmount={onUnmount}
              >
                <Marker position={newCenter}/>
            </GoogleMap>}
        </div>
      </div>
    );

}

export default MyMaps
