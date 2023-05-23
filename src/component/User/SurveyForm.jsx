import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SurveyForm() {
  const [gender, setGender] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [age, setAge] = useState('');
  const [travelType, setTravelType] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [flightDistance, setFlightDistance] = useState('');
  const [wifiService, setWifiService] = useState('');
  const [convenience, setConvenience] = useState('');
  const [onlineBooking, setOnlineBooking] = useState('');
  const [gateLocation, setGateLocation] = useState('');
  const [foodAndDrink, setFoodAndDrink] = useState('');
  const [onlineBoarding, setOnlineBoarding] = useState('');
  const [seatComfort, setSeatComfort] = useState('');
  const [inflightEntertainment, setInflightEntertainment] = useState('');
  const [onboardService, setOnboardService] = useState('');
  const [legRoom, setLegRoom] = useState('');
  const [baggageHandling, setBaggageHandling] = useState('');
  const [checkinService, setCheckinService] = useState('');
  const [inflightService, setInflightService] = useState('');
  const [cleanliness, setCleanliness] = useState('');
  const [departureDelay, setDepartureDelay] = useState('');
  const [arrivalDelay, setArrivalDelay] = useState('');

 




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://your-api-endpoint.com/survey', {
        gender,
        customerType,
        age,
        travelType,
        travelClass,
        flightDistance,
        wifiService,
        convenience,
        onlineBooking,
        gateLocation,
        foodAndDrink,
        onlineBoarding,
        seatComfort,
        inflightEntertainment,
        onboardService,
        legRoom,
        baggageHandling,
        checkinService,
        inflightService,
        cleanliness,
        departureDelay,
        arrivalDelay
      });

      console.log('Form submitted successfully');
      console.log(response.data); // Handle the API response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };














  return (

    <Container >
    <div>      <Form onSubmit={handleSubmit}>


    <Row >
    <Col  xs={12} md={6}>
    <Form.Group controlId="gender">
      <Form.Label>Gender:</Form.Label>
      <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </Form.Select>
    </Form.Group>
</Col>
<Col  xs={12} md={6}>
    <Form.Group controlId="customerType">
      <Form.Label>Customer Type:</Form.Label>
      <Form.Select value={customerType} onChange={(e) => setCustomerType(e.target.value)}>
        <option value="">Select Customer Type</option>
        <option value="disloyal Customer">Disloyal Customer</option>
        <option value="Loyal Customer">Loyal Customer</option>
      </Form.Select>
    </Form.Group>
    </Col>
    </Row>


<Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="age">
      <Form.Label>Age:</Form.Label>
      <Form.Select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="">Select Age</option>
        <option value="child">Child</option>
        <option value="adult">Adult</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="travelType">
      <Form.Label>travelType:</Form.Label>
      <Form.Select value={travelType} onChange={(e) =>  setTravelType(e.target.value)}>
        <option value="">Select travel Type</option>
        <option value="child">Business travel</option>
        <option value="adult">Personal Travel</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>

    <Row>
<Col xs={12} md={6}>
    <Form.Group controlId="travelClass">
        <Form.Label>travelClass:</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Eco"
            name="travelClass"
            value="Eco"
            checked={gender === 'Eco'}
            onChange={(e) =>  setTravelClass(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Business"
            name="travelClass"
            value="Business"
            checked={gender === 'Business'}
            onChange={(e) =>  setTravelClass(e.target.value)}
          />
        </div>
      </Form.Group>
      </Col>
 

      <Col xs={12} md={6}>
      <Form.Group controlId="FlightDistance">
      <Form.Label>Flight Distance:</Form.Label>
      <Form.Select value={flightDistance} onChange={(e) =>  setFlightDistance(e.target.value)}>
        <option value="">Select Flight Distance</option>
        <option value="less than or equal 1000">less than or equal 1000</option>
        <option value="less than or equal 2000">less than or equal 2000</option>
        <option value="less than or equal 3000">less than or equal 3000</option>
      </Form.Select>
    </Form.Group>
      </Col>

      </Row>



      <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="wifiService">
      <Form.Label>wifiService:</Form.Label>
      <Form.Select value={wifiService} onChange={(e) =>  setWifiService(e.target.value)}>
        <option value="wifiService">Select wifiService</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="convenience">
      <Form.Label>convenience:</Form.Label>
      <Form.Select value={convenience} onChange={(e) => setConvenience(e.target.value)}>
        <option value="">Select convenience</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>

   

    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="onlineBooking">
      <Form.Label>onlineBooking:</Form.Label>
      <Form.Select value={onlineBooking} onChange={(e) =>   setOnlineBooking(e.target.value)}>
        <option value="onlineBooking">Select onlineBooking</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="gateLocation">
      <Form.Label>gateLocation:</Form.Label>
      <Form.Select value={gateLocation} onChange={(e) =>  setGateLocation(e.target.value)}>
        <option value="">Select convenience</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>





    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="foodAndDrink">
      <Form.Label>foodAndDrink:</Form.Label>
      <Form.Select value={foodAndDrink} onChange={(e) =>   setFoodAndDrink(e.target.value)}>
        <option value="foodAndDrink">Select foodAndDrink</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="onlineBoarding">
      <Form.Label>onlineBoarding:</Form.Label>
      <Form.Select value={onlineBoarding} onChange={(e) =>  setOnlineBoarding(e.target.value)}>
        <option value="">SelectonlineBoarding</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>








    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="seatComfort">
      <Form.Label>seatComfortk:</Form.Label>
      <Form.Select value={seatComfort} onChange={(e) =>  setSeatComfort(e.target.value)}>
        <option value="seatComfort">Select seatComfort</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="inflightEntertainment">
      <Form.Label>inflightEntertainment:</Form.Label>
      <Form.Select value={inflightEntertainment} onChange={(e) =>  setInflightEntertainment(e.target.value)}>
        <option value="">Select inflightEntertainment</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>



    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="onboardService">
      <Form.Label>onboardService:</Form.Label>
      <Form.Select value={onboardService} onChange={(e) =>   setOnboardService(e.target.value)}>
        <option value="onboardService">Select onboardService</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="legRoom">
      <Form.Label>legRoom:</Form.Label>
      <Form.Select value={legRoom} onChange={(e) =>  setLegRoom(e.target.value)}>
        <option value="">Select legRoom</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>




    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="baggageHandling">
      <Form.Label>baggageHandling:</Form.Label>
      <Form.Select value={baggageHandling} onChange={(e) =>   setBaggageHandling(e.target.value)}>
        <option value="baggageHandling">Select baggageHandling</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="checkinService">
      <Form.Label>checkinService:</Form.Label>
      <Form.Select value={checkinService} onChange={(e) =>   setCheckinService(e.target.value)}>
        <option value="">Select checkinService</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>




    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="inflightService">
      <Form.Label>inflightService:</Form.Label>
      <Form.Select value={inflightService} onChange={(e) =>  setInflightService(e.target.value)}>
        <option value="inflightService">Select inflightService</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="cleanliness">
      <Form.Label>cleanliness:</Form.Label>
      <Form.Select value={cleanliness} onChange={(e) =>   setCleanliness(e.target.value)}>
        <option value="">Select cleanliness</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>





    <Row>
  <Col xs={12} md={6}>
    <Form.Group controlId="departureDelay">
      <Form.Label>departureDelay:</Form.Label>
      <Form.Select value={departureDelay} onChange={(e) =>  setDepartureDelay(e.target.value)}>
        <option value="departureDelay">SelectdepartureDelay</option>
        <option value="less than or equal 15 ">less than or equal 15 </option>
        <option value="less than or equal 30 ">less than or equal 30 </option>
        <option value="less than or equal 45 ">less than or equal 45 </option>
        <option value="more than 60">more than 60</option>
       
      </Form.Select>
    </Form.Group>
    </Col> 

    <Col xs={12} md={6}>
    <Form.Group controlId="arrivalDelay">
      <Form.Label>arrivalDelay:</Form.Label>
      <Form.Select value={arrivalDelay} onChange={(e) =>   setArrivalDelay(e.target.value)}>
        <option value="">Select arrivalDelay</option>
        <option value="less than or equal 15 ">less than or equal 15 </option>
        <option value="less than or equal 30 ">less than or equal 30 </option>
        <option value="less than or equal 45 ">less than or equal 45 </option>
        <option value="more than 60">more than 60</option>
      </Form.Select>
    </Form.Group>
    </Col> 


    </Row>



<br/>

    {/* Continue adding the remaining form fields based on the provided data set */}

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
    </Container>
  )
}

export default SurveyForm;

