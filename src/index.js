import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-slideshow-image/dist/styles.css'
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
   
  </React.StrictMode>
);


