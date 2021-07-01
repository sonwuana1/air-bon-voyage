import React, { useState, useEffect } from "react";
// import { Redirect, useParams } from "react-router";
import { useHistory } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import './Splash.css';
import ViewAllSpots from "../ViewAllSpots";




function Splash() {
    // const history = useHistory()

    // useEffect(()=> {
    //     history.push('/')
    // }, [])

    return (
        <div>
            <h1 >Welcome to Air Bon Voyage!</h1>
            <ViewAllSpots />
        </div>
    );
}

export default Splash;
