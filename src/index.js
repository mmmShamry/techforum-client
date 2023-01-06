import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { getActiveUserToken } from './utils/User';
import { setAuthHeaders } from './utils/Http';

const root = ReactDOM.createRoot(document.getElementById('root'));
const apiBaseUrl = 'http://localhost/techforum/index.php/api'

axios.defaults.baseURL = `${apiBaseUrl}`;

const accessToken = getActiveUserToken();

if(accessToken){
  setAuthHeaders({accessToken})
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
