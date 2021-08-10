import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Brand from 'react-bootstrap/Brand'


function Footer() {

    return (
        <Navbar sticky="bottom" className="justify-content-center" expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand className="text-center"
                style={{ position: 'relative',

                marginLeft: '-50px',
                display: 'block'}}
                >
                    About The Developer:
                    <a href="https://github.com/sonwuana1">GitHub</a> |
                    <a href="https://www.linkedin.com/in/sylvia-o/"> LinkedIn</a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;
