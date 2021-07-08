import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Brand from 'react-bootstrap/Brand'


function Footer() {

    return (
        <Navbar sticky="bottom" className="justify-content-center" expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="https://github.com/sonwuana1" className="text-center">About The Developer</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;
