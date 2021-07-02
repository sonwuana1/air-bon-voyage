import React, { useState, useEffect } from "react";
// import { Redirect, useParams } from "react-router";
import { useHistory } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import './Splash.css';
import ViewAllSpots from "../ViewAllSpots";
import ViewAllBookings from "../ViewAllBookings";



function Splash() {
    // const history = useHistory()

    // useEffect(()=> {
    //     history.push('/')
    // }, [])

    return (
        <div
        // style={{
        //     backgroundColor: "white",
        //     }}
        >
            <h1 >Welcome to Air Bon Voyage!</h1>
            <ViewAllSpots />
            <ViewAllBookings />
        </div>
    );
}

export default Splash;
