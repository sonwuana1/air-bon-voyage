import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/SplashPage";
import Footer from "./components/Footer";
import ViewOneSpot from "./components/ViewOneSpot";
import ViewOneBooking from "./components/ViewOneBooking";
import ViewAllBookings from "./components/ViewAllBookings";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots/:id">
            <ViewOneSpot />
            <Footer />
          </Route>
          {/* <Route path="/bookings">
            <ViewAllBookings />
          </Route> */}
          <Route path="/bookings/:id">
            <ViewOneBooking />
            <Footer />
          </Route>
          <ProtectedRoute path="/" exact={true}>
            <Splash />
            <Footer />
          </ProtectedRoute>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
