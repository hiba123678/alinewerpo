import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CreateNewTrip = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleCreateTrip = () => {
    const requestBody = {
      from: from,
      to: to,
      date: date,
    };

    axios
      .post('https://localhost:7170/api/Trip/Create', requestBody)
      .then((response) => {
        if (response.data.success && response.data.result) {
          const createdTrip = response.data.result;
          console.log('New Trip created:', createdTrip);
          toast.success('Trip created successfully!');
          // Perform any additional actions or update UI as needed
        } else {
          console.error('Failed to create trip');
          toast.error('Failed to create trip. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
      });
  };

  return (
    <Container>
      <h3  className='fw-bolder'>Create New Trip</h3><br/>
      <Row>
      <Col>
        <label htmlFor="from">From:</label>
        <input
        className="form-control"
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </Col>
      <Col>
        <label htmlFor="to">To:</label>
        <input
        className="form-control"
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </Col>
      <Col>
        <label htmlFor="date">Date:</label>
        <input
        className="form-control"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Col>
      <Col>
      
      <button className='btn btn-primary mt-4' onClick={handleCreateTrip}>Create Trip</button>
      </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CreateNewTrip;