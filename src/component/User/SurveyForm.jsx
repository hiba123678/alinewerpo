import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SurveyForm = () => {
  const [formData, setFormData] = useState({
    Gender: "",
    CustomerType: "",
    TypeOfTravel: "",
    Class: "",
    Age: 0,
    InflightWifiService: 0,
    FlightDistance: 0,
    DepartureArrivalTimeConvenient: 0,
    EaseOfOnlineBooking: 0,
    GateLocation: 0,
    FoodAndDrink: 0,
    OnlineBoarding: 0,
    SeatComfort: 0,
    InflightEntertainment: 0,
    OnBoardService: 0,
    LegRoomService: 0,
    BaggageHandling: 0,
    CheckinService: 0,
    InflightService: 0,
    Cleanliness: 0,
    DepartureDelayInMinutes:0,
    ArrivalDelayInMinutes: 0,
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://localhost:7170/api/Passenger/PassengerOpinion', formData)
      .then((response) => {
        // Handle success response if needed
        console.log(response.data);
        setResult(response.data.result);

      })

      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });

    // Reset form data
    setFormData({
      Gender: "",
      CustomerType: "",
      TypeOfTravel: "",
      Class: "",
      Age: 0,
      InflightWifiService: 0,
      FlightDistance: 0,
      DepartureArrivalTimeConvenient: 0,
      EaseOfOnlineBooking: 0,
      GateLocation: 0,
      FoodAndDrink: 0,
      OnlineBoarding: 0,
      SeatComfort: 0,
      InflightEntertainment: 0,
      OnBoardService: 0,
      LegRoomService: 0,
      BaggageHandling: 0,
      CheckinService: 0,
      InflightService: 0,
      Cleanliness: 0,
      DepartureDelayInMinutes: 0,
      ArrivalDelayInMinutes: 0,
    });
  };

  return (
    <Container className='border border-3 border-black p-5 w-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
    <h1 className='text-center fw-semibold'>Rate our trip</h1><br/><br/>
    <Form onSubmit={handleSubmit}>
    <Row>
        <Col>
      <Form.Group controlId="Gender">
        <Form.Label>Select Gender</Form.Label>
        <Form.Control as="select" name="Gender" value={formData.Gender} onChange={handleChange} required>
       
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </Form.Control>
      </Form.Group>
        </Col>

        <Col> 
      <Form.Group controlId="CustomerType">
        <Form.Label>Select Customer Type</Form.Label>
        <Form.Control as="select" name="CustomerType" value={formData.CustomerType} onChange={handleChange} required>
      
          <option value="Loyal Customer">Loyal Customer</option>
          <option value="disloyal Customer">disloyal Customer</option>
        </Form.Control>
      </Form.Group>
</Col>


<Col>
      <Form.Group controlId="Age">
  <Form.Label>Select Age</Form.Label>

  <Form.Control type="number"  min="0"
          max="100" name="Age" value={formData.Age} onChange={handleChange} required/>
  
</Form.Group>
</Col>


<Col>

      <Form.Group controlId="TypeOfTravel">
        <Form.Label>Select Travel Type</Form.Label>
        <Form.Control as="select" name="TypeOfTravel" value={formData.TypeOfTravel} onChange={handleChange} required>
     
          <option value="Business travel">Business travel</option>
          <option value="Personal Travel">Personal Travel</option>
        </Form.Control>
      </Form.Group>
      </Col>
      </Row>



<Row>
  <Col>
      <Form.Group controlId="Class">
        <Form.Label>Select Travel Class</Form.Label>
        <Form.Control as="select" name="Class" value={formData.Class} onChange={handleChange} required>
       
          <option value="Eco">Eco</option>
          <option value="Business">Business</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="FlightDistance">
  <Form.Label>Select Flight Distance</Form.Label>
  <Form.Control   type="number"
          min="0"
          max="3000"
           name="FlightDistance" value={formData.FlightDistance} onChange={handleChange} required>
   
 
  </Form.Control>
</Form.Group>
</Col>


<Col>

      <Form.Group controlId="InflightWifiService">
        <Form.Label>Select WiFi Service</Form.Label>
        <Form.Control as="select" name="InflightWifiService" value={formData.InflightWifiService} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="DepartureArrivalTimeConvenient">
        <Form.Label>Select Convenience</Form.Label>
        <Form.Control as="select" name="DepartureArrivalTimeConvenient" value={formData.DepartureArrivalTimeConvenient} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      </Row>


<Row>
  <Col>
      <Form.Group controlId="EaseOfOnlineBooking">
        <Form.Label>Select Online Booking</Form.Label>
        <Form.Control as="select" name="EaseOfOnlineBooking" value={formData.EaseOfOnlineBooking} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="GateLocation">
        <Form.Label>Select Gate Location</Form.Label>
        <Form.Control as="select" name="GateLocation" value={formData.GateLocation} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="FoodAndDrink">
        <Form.Label>Select Food and Drink</Form.Label>
        <Form.Control as="select" name="FoodAndDrink" value={formData.FoodAndDrink} onChange={handleChange} required>
        
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="OnlineBoarding">
        <Form.Label>Select Online Boarding</Form.Label>
        <Form.Control as="select" name="OnlineBoarding" value={formData.OnlineBoarding} onChange={handleChange} required>
      
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      </Row>


<Row>
  <Col>
      <Form.Group controlId="SeatComfort">
        <Form.Label>Select Seat Comfort</Form.Label>
        <Form.Control as="select" name="SeatComfort" value={formData.SeatComfort} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="InflightEntertainment">
        <Form.Label>Select Inflight Entertainment</Form.Label>
        <Form.Control as="select" name="InflightEntertainment" value={formData.InflightEntertainment} onChange={handleChange} required>
     
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="OnBoardService">
        <Form.Label>Select Onboard Service</Form.Label>
        <Form.Control as="select" name="OnBoardService" value={formData.OnBoardService} onChange={handleChange} required>
      
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="LegRoomService">
        <Form.Label>Select Leg Room</Form.Label>
        <Form.Control as="select" name="LegRoomService" value={formData.LegRoomService} onChange={handleChange} required>
      
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      </Row>

      <Row>
        <Col>
      <Form.Group controlId="BaggageHandling">
        <Form.Label>Select Baggage Handling</Form.Label>
        <Form.Control as="select" name="BaggageHandling" value={formData.BaggageHandling} onChange={handleChange} required>
       
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="CheckinService">
        <Form.Label>Select Check-in Service</Form.Label>
        <Form.Control as="select" name="CheckinService" value={formData.CheckinService} onChange={handleChange}required>
     
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>

      <Col>
      <Form.Group controlId="InflightService">
        <Form.Label>Select Inflight Service</Form.Label>
        <Form.Control as="select" name="InflightService" value={formData.InflightService} onChange={handleChange} required>
    
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="Cleanliness">
        <Form.Label>Select Cleanliness</Form.Label>
        <Form.Control as="select" name="Cleanliness" value={formData.Cleanliness} onChange={handleChange} required>
        
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      </Col>
      </Row>



      <Row>
      <Col>
      <Form.Group controlId="DepartureDelayInMinutes">
        <Form.Label>Select Departure Delay</Form.Label>
        <Form.Control type="number"  min="0"
       name="DepartureDelayInMinutes" value={formData.DepartureDelayInMinutes} onChange={handleChange} required/>
      </Form.Group>
</Col>
<Col>
      <Form.Group controlId="ArrivalDelayInMinutes">
        <Form.Label>Select Arrival Delay</Form.Label>
        <Form.Control type="number"  min="0"
       name="ArrivalDelayInMinutes" value={formData.ArrivalDelayInMinutes} onChange={handleChange} required/>
      </Form.Group>
      </Col>
      </Row>
      <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    {result && (
        <div>
          <h2>Result:</h2>
          <h4>Satisfied: {result.satisfied}</h4>
          <h4>Disatisfied: {result.disatisfied}</h4>
   {result.satisfied > result.disatisfied ? (
      <h2>you are Satisfied</h2>
    ) : (
      <h2>you are Disatisfied</h2>
    )}
        </div>
      )}
    </Container>
  );
}

export default SurveyForm;
