import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SurveyForm from './SurveyForm';

function MyTrip() {


  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch booked trips from the API
    const fetchTrips = async () => {
      try {
        const response = await axios.get('/api/trips');
        setTrips(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <h2>View Booked Trips</h2>
      {trips.map((trip) => (
        <div key={trip.id}>
          <p>Trip ID: {trip.id}</p>
          <p>Destination: {trip.From}</p>
          <p>Destination: {trip.To}</p>
          <p>Date: {trip.Date}</p>
          {/* Additional trip details */}
          <br/>
          <SurveyForm/>

        </div>
      ))}
    </div>
  );
};
export default MyTrip;
