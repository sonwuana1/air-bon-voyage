import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';
import { getAllImages } from '../../store/image'
import Container from 'react-bootstrap/Container'




const ViewAllSpots = () => {
    const dispatch = useDispatch()
    const spotState = useSelector(state => Object.values(state.spot))
    // console.log('STATEEEEEEE', spotState)
    const imageState = useSelector(state => Object.values(state.image))
    // console.log('imageeeeee', imageState)


    useEffect(() => {
        dispatch(getAllSpots())
        dispatch(getAllImages())
    }, [dispatch])


    return (
        <div>
            <Container>
            {/* <h2> */}
                {spotState.map(obj => {
                    return (
                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    {obj?.Images ?
                                        <img src={obj?.Images[0]?.link} className="card-img" alt="..." />
                                    : null }
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to={`spots/${obj?.id}`}>{obj?.name}</Link>
                                        </h5>
                                        <p className="card-text">{obj?.location}</p>
                                        <p className="card-text">{obj?.num_of_guests} guests * {obj?.num_of_beds} bed * {obj?.num_of_baths} bath</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
