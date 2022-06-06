import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/fontawesome-free-6.1.1-web/css/all.css'
import './assets/css/style.css';
// import './assets/css/authentication.css'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

