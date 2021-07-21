import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Splash.css';
import ViewAllSpots from "../ViewAllSpots";
import ViewAllBookings from "../ViewAllBookings";




function Splash() {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser)

    if (!sessionUser) {
        history.push('/login')
    }


    return (
        <div className='splashPageContainer'>
            <h1 className='titleContainer'>💜 Welcome to Air Bon Voyage! 💜</h1>
            <ViewAllSpots />
            <ViewAllBookings />
        </div>
    );
}

export default Splash;
