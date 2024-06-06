import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './Common/GlobalContext/GlobalContext';
import axios from 'axios';

axios.defaults.baseURL = "https://creditrepair-api.online/api"
// axios.defaults.baseURL = "http://127.0.0.1:8000/api"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  // </React.StrictMode>
);
reportWebVitals();
