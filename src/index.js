import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_BpuPrKv0b7ffjX9QxZYKF8_id_QH61s",
  authDomain: "cart-2f68f.firebaseapp.com",
  databaseURL: "https://cart-2f68f.firebaseio.com",
  projectId: "cart-2f68f",
  storageBucket: "cart-2f68f.appspot.com",
  messagingSenderId: "451799909078",
  appId: "1:451799909078:web:3044ab0d82d88483f7bf77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,  document.getElementById('root')
);
