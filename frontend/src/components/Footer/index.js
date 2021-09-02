import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Brand from 'react-bootstrap/Brand'
import Icon1 from './GitHub-Mark-32px.png'
import Icon2 from './LI-In-Bug.png'


function Footer() {

    return (
        <Navbar className="justify-content-center" expand="lg" bg="light">
            <Container>
                <Navbar.Brand className="text-center"
                style={{ position: 'relative',
                left: '35%',
                marginLeft: '-50px',
                display: 'block'}}
                >
                    About The Developer:
                    {' '}<a href="https://github.com/sonwuana1">
                        <img
                        src={Icon1}
                        // className="d-inline-block align-top"
                        alt=""
                        />
                        </a> |
                    <a href="https://www.linkedin.com/in/sylvia-o/">
                    {' '}<img
                        src={Icon2}
                        width="40"
                        height="30"
                        // className="d-inline-block align-top"
                        alt=""
                        />
                    </a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;
