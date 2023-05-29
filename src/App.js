import axios from "axios";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'

import { useEffect, useState } from "react";

import NavBar from './component/User/NavBar.jsx';

import PartHome1 from "./component/User/PartHome1";
import CURD from "./component/CURD";


import { Routes, Route} from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Dashboard from './component/MainDashbord/Dashboard.js';

import Signup from "./component/Signup";
import { useNavigate } from 'react-router-dom';
import SignIn from "./component/Signin";
import Benifts from "./component/User/Benifts";
import ViewTripUpdate from './component/User/ViewTripUpdate';
import NewTrip1 from "./component/MainDashbord/NewTrip1";

import ViewBookedTrips from './component/User/ViewBookedTrips';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();
 

  return (
    <div>
     
       <Routes>
       <Route path="/login" element={<SignIn/>} />
    
         <Route path="viewBookedTrip" element={<ViewBookedTrips/>} />
       <Route path="/"  exact element={<PartHome1  /> } />
       <Route path="/trip" element={<ViewTripUpdate /> } />
   
       <Route path="/dashboard"  exact element={<Dashboard /> } />
       <Route path="/dashboard/add"  exact element={<NewTrip1 /> } />
       <Route exact path="/register" element={<Signup/>} />
      
       </Routes>
    </div>

  );
}

export default App;