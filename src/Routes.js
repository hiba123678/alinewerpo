import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PartHome1 from './component/User/PartHome1';
import AboutHome from './component/User/AboutHome'; 
const Routes = () =>
    <Router>
        <Router>
            <Route exact path='/'>
                <PartHome1 />
            </Route>
            <Route path='/about'>
                < AboutHome/>
            </Route>
           
         
        </Router>
    </Router>

export default Routes;