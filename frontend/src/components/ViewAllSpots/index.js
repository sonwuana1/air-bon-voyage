import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




const ViewAllSpots = () => {
    const dispatch = useDispatch()
    const spotState = useSelector(state => Object.values(state.spot))
    console.log('STATEEEEEEE', spotState)
    const history = useDispatch()


    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])


    return (
        <div>
            <Container>
            {/* <h2> */}
                {spotState.map(obj => {
                    return (
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }} border="light">
                                    <Card.Img variant="top" src={obj.Images[0].link} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Link to={`spots/${obj.id}`}>{obj.name}</Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {obj.location}
                                        </Card.Text>
                                        {/* <Button variant="primary">Book Today!</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                })}
            {/* </h2> */}

                {/* <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row> */}
            </Container>
        </div>
    )
}


export default ViewAllSpots;
