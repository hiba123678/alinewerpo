import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DisplayTripAdmin = () => {
  const [trips, setTrips] = useState([]);
  const [show, setShow] = useState(false);
  const [editFrom, setEditFrom] = useState('');
  const [editTo, setEditTo] = useState('');
  const [editDate, setEditDate] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const params = {
      From: '',
      To: '',
      Date: '',
    };

    axios
      .get('https://localhost:7170/api/Trip/GetAll')
      .then((response) => {
        if (response.data.success) {
          setTrips(response.data.result);
        } else {
          console.error('Failed to fetch trips');
          toast.error('Failed to fetch trips. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while fetching trips. Please try again.');
      });
  };

  const handleUpdateTrip = (trip) => {
    setSelectedTrip(trip);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };


  const handleUpdate = () => {
    const updatedTrip = {
      id: selectedTrip.id,
      from: editFrom,
      to: editTo,
      date: editDate,
    };

    axios
      .post('https://localhost:7170/api/Trip/Update', updatedTrip)
      .then((response) => {
        if (response.data.success) {
          toast.success('Trip updated successfully');
          getTrips();
          handleClose();
        } else {
          console.error('Failed to update trip');
          toast.error('Failed to update trip. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while updating trip. Please try again.');
      });
  };

  return (
    <div>
      <h3>All Trips</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr key={trip.id}>
              <td>{index + 1}</td>
              <td>{trip.from}</td>
              <td>{trip.to}</td>
              <td>{trip.date}</td>
              <td>
              <Button variant="primary" onClick={() => handleUpdateTrip(trip)}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Edit Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter destination 1"
                value={editFrom}
                onChange={(e) => setEditFrom(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter destination 2"
                value={editTo}
                onChange={(e) => setEditTo(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default DisplayTripAdmin;