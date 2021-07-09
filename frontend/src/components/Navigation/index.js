import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  let sessionLinks;


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };



  if (sessionUser) {
    sessionLinks = (
      <p key='logout'>
        <button onClick={logout}>Log Out</button>
      </p>
    )
  }

  if (!sessionUser) {
    sessionLinks = (
          <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
          </>
        );
  }


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Text>
      Signed in as: <h3>{sessionUser?.first_name}</h3>
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isLoaded && sessionLinks}
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/bookings">My Bookings</Nav.Link> */}
          <ul className="profile-dropdown">
            <p key='email'>{sessionUser?.email}</p>
            <p key='description'>{sessionUser?.description}</p>
        </ul>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
