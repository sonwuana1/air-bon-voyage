import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { Map, GoogleApiWrapper, MapContainer } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
  };


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
                        // <Row>
                        //     <Col>
                        //         <Card style={{ width: '18rem' }} border="light">
                        //             <Card.Img variant="top" src={obj.Images[0].link} />
                        //             <Card.Body>
                        //                 <Card.Title>
                        //                     <Link to={`spots/${obj.id}`}>{obj.name}</Link>
                        //                 </Card.Title>
                        //                 <Card.Text>
                        //                     {obj.location}
                        //                 </Card.Text>
                        //                 {/* <Button variant="primary">Book Today!</Button> */}
                        //             </Card.Body>
                        //         </Card>
                        //     </Col>
                        // </Row>
                        <div class="card mb-3" >
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={obj.Images[0].link} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <Link to={`spots/${obj.id}`}>{obj.name}</Link>
                                        </h5>
                                        <p class="card-text">{obj.location}</p>
                                        <p class="card-text">{obj.num_of_guests} guests * {obj.num_of_beds} bed * {obj.num_of_baths} bath</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}


export default ViewAllSpots;
// export default (ViewAllSpots, GoogleApiWrapper({
//     apiKey: 'AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'})(MapContainer));
