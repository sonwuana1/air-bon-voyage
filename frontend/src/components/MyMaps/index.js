import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './MyMaps.css'



const MyMaps= ({props}) => {

    // console.log(props)

// const [currentPosition, setCurrentPosition] = useState({lat:43.11016617798622,lng:-89.48826131670266})

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
  })

  const containerStyle = {
    // height: "50vh",
    // width: "100%"
    width: '800px',
    height: '400px'
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
        },
        {
            id: 7,
            location: {
                lat: 37.5521755,
                lng: 126.9723228
            },
        },
        {
            id: 8,
            location: {
                lat: 37.5548937,
                lng: 126.9264908
            },
        },
        {
            id: 9,
            location: {
                lat: 37.5734904,
                lng: 127.020301
            },
        },
        {
            id: 10,
            location: {
                lat: 35.6938097,
                lng: 139.7532163
            },
        },
        {
            id: 11,
            location: {
                lat: 35.71745,
                lng: 139.790859
            },
        },
        {
            id: 12,
            location: {
                lat: 35.666255,
                lng: 139.775565
            },
        },
    ];

    const newCenter = locations.find(item => item.id === props.spotState.id)?.location
    // console.log(newCenter)


    return (
        <Container>
            <Row>
                <div className="map_page__container">
                    <div style={{ height: '450px', width: '900px' }}>
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
            </Row>
        </Container>
    );
}

export default MyMaps
