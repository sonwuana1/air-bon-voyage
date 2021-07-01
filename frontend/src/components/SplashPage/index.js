import React, { useState, useEffect } from "react";
// import { Redirect, useParams } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import './Splash.css';




function Splash() {
    const history = useHistory()

    useEffect(()=> {
        history.push('/')
    }, [])

    return (
        <div>
            <h1 >Welcome to Air Bon Voyage!</h1>

        </div>
    );
}

export default Splash;
