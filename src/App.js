import axios from "axios";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'

// import NavBar from "./component/Dashboard/NavBar.jsx";
import { useEffect, useState } from "react";

import NavBar from './component/User/NavBar.jsx';
import NavbarHome from "./component/User/NavbarHome";
import PartHome1 from "./component/User/PartHome1";
import CURD from "./component/CURD";
import ViewTrip from './component/User/ViewTrip';

import { Routes, Route} from 'react-router-dom';
import { Navigate } from "react-router-dom";

import Dashboard from './component/MainDashbord/Dashboard.js';
import AddTrip from "./component/MainDashbord/NewTrip";
import Signup from "./component/Signup";
import { useNavigate } from 'react-router-dom';
import SignIn from "./component/Signin";
import Benifts from "./component/User/Benifts";
import NewTrip from "./component/MainDashbord/NewTrip";
import NewTrip1 from "./component/MainDashbord/NewTrip1";
import MyTrip from "./component/User/MyTrip";
import ViewBookedTrips from './component/User/ViewBookedTrips';
function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();
 

  return (
    <div>
      <ViewBookedTrips/>
       <Routes>
       <Route path="/login" element={<SignIn/>} />
       <Route
          path="/view-trips"
          element={isLoggedIn ? <ViewBookedTrips /> : <Navigate to="/login" replace />}
        />
        
       <Route path="/"  exact element={<PartHome1  /> } />
       <Route path="/trip" element={<ViewTrip /> } />
       {/* <Route path="/dashboard" element={<Dashboard /> } /> */}
       {/* <Route path="/dashboard/add"  exact element={<NewTrip1 /> } /> */}
       <Route path="/dashboard"  exact element={<Dashboard /> } />
       <Route path="/dashboard/add"  exact element={<NewTrip1 /> } />
       <Route exact path="/register" element={<Signup/>} />
      
       </Routes>

{/* 
<Routes>
<Route path="/"  exact element={<Dashboard /> } />
<Route path="/add"  exact element={<NewTrip1 /> } />
</Routes> */}
{/* <CURD/> */}

 {/* User home  */}
     
 {/* <Dashboard /> */}
  {/* <SignIn/>
  <Signup/> */}
  {/* <CURD/> */}
  {/* <SignIn/>
  <Signup/>  */}
    </div>

  );
}

export default App;