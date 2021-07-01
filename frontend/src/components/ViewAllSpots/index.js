import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spot';


const ViewAllSpots = () => {
    const dispatch = useDispatch()
    const spotState = useSelector(state => Object.values(state.spot))
    // console.log('STATEEEEEEE', spotState)


    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])


    return (
        <div>
            <h2>
                {spotState.map(obj => {
                    return (
                        <h3>
                            <Link to={`spots/${obj.id}`}>{obj.name}</Link>
                        </h3>
                    )
                })}
            </h2>
        </div>
    )
}


export default ViewAllSpots;
