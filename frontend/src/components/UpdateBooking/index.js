import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateBooking } from '../../store/booking';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



const UpdateBooking = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // const bookingState = useSelector(state => state.booking);
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [focusedInput, setfocusedInput] = useState(null);


    async function handleOnSubmit(e) {
        e.preventDefault()
        const payload = { start_date, end_date }
        const updatedBooking = await dispatch(updateBooking(id, payload))
        if (updatedBooking) {
            history.push(`/`)
        }
    }

    return(
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    {/* <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>Start Date: </Form.Label>
                            <Form.Control type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formDate">
                            <Form.Label>End Date: </Form.Label>
                            <Form.Control type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} required/>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">
                            Update!
                        </Button>
                    </Col> */}
                    <Col>
                        <DateRangePicker
                            startDate={start_date}
                            startDateId="your_unique_start_date_id"
                            endDate={end_date}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={({ startDate, endDate }) => {
                                setStartDate(startDate)
                                setEndDate(endDate)
                            }}
                            focusedInput={focusedInput}
                            onFocusChange={focusedInput => setfocusedInput(focusedInput )}
                            required
                            showDefaultInputIcon
                        />
                        <Button variant="primary" type="submit">
                            Update!
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}


export default UpdateBooking;
