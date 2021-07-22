import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Icon from './icons8-airplane-take-off-64.png'

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
      <>
        {/* <Navbar.Text className="justify-content-end">Signed in as: <h3>{sessionUser?.first_name}</h3></Navbar.Text> */}
        <p key='logout'>
          <Button variant="secondary" size="sm" onClick={logout}>Log Out</Button>{' '}
        </p>
        {/* <p key='logout'>
          <button onClick={logout}>Log Out</button>
        </p> */}
      </>
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
    <Navbar bg="light" >
      {/* <Navbar.Text>
      Signed in as: <h3>{sessionUser?.first_name}</h3>
      </Navbar.Text> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
      <Navbar.Brand>
        <img
          src={Icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          style={{ position: 'absolute',
            left: '50%',
            bottom: '25%',
            marginLeft: '-50px',
            display: 'block'}}
        />
      </Navbar.Brand>
        <Nav className="mr-auto">
          {isLoaded && sessionLinks}
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/bookings">My Bookings</Nav.Link> */}
            {/* <p key='email'>{sessionUser?.email}</p>
            <p key='description'>{sessionUser?.description}</p> */}

        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Navigation;
