import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {

    const mapStyles = {
        height: "50vh",
        width: "50%"
    };

    const defaultCenter = {
        lat: 59.3409, lng: 18.0754
    }

    // const locations = [
    //     {
    //       name: "Location 1",
    //       location: {
    //         lat: 59.3409,
    //         lng: 18.0754
    //       },
    //     },
        // {
        //   name: "Location 2",
        //   location: {
        //     lat: 41.3917,
        //     lng: 2.1649
        //   },
        // },
        // {
        //   name: "Location 3",
        //   location: {
        //     lat: 41.3773,
        //     lng: 2.1585
        //   },
        // },
        // {
        //   name: "Location 4",
        //   location: {
        //     lat: 41.3797,
        //     lng: 2.1682
        //   },
        // },
        // {
        //   name: "Location 5",
        //   location: {
        //     lat: 41.4055,
        //     lng: 2.1915
        //   },
        // }
    // ];

  return (
    <GoogleMap googleMapsApiKey='AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
    >
        <Marker position={defaultCenter}/>
    </GoogleMap>
  )
}

export default MapContainer;
