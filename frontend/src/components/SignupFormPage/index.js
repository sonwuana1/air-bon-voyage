import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  // for multuple file upload:
  //   const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, first_name, last_name, description, password, image }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <div className="signUpContainer">
      <Container>
        <Row>
          <Col sm={4}>
            <Form onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                  onChange={(e) => setEmail(e.target.value)} required/>
                <Form.Text className="text-white">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label className="text-white">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" value={first_name}
                  onChange={(e) => setFirstName(e.target.value)} required/>
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label className="text-white">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" value={last_name}
                  onChange={(e) => setLastName(e.target.value)} required/>
              </Form.Group>

              <Form.Group controlId="formPlaintext">
                <Form.Label className="text-white">Tell us about yourself: </Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Bio" value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </Form.Group>

              {/* <Form.Group controlId="formImage">
                <Form.Label>Upload Profile Image</Form.Label>
                <Form.Control type="file" onChange={updateFile} />
              </Form.Group> */}

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div>
        {sessionUser && (
          <div>
            <h1>{sessionUser.first_name}</h1>
            <img
              style={{ width: "150px" }}
              src={sessionUser.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupFormPage;
