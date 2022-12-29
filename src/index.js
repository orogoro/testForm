import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import { initializeApp } from 'firebase/app';

import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyARLTm-j_oBNWYe6EcH-4kQbJvhj9ihyy0',
  authDomain: 'fir-test-f9901.firebaseapp.com',
  databaseURL:
    'https://fir-test-f9901-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-test-f9901',
  storageBucket: 'fir-test-f9901.appspot.com',
  messagingSenderId: '358233767492',
  appId: '1:358233767492:web:50592e65943ec135260611',
};

initializeApp(firebaseConfig, 'users');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/testForm/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
