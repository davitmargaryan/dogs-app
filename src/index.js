import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/reducer";
import {BrowserRouter as Router} from 'react-router-dom'
import firebase from 'firebase'

const fbConfig = {
  apiKey: "AIzaSyATUse34HshUDX9QZtMERvpxnlTmqHHIRo",
  authDomain: "cosmetics-6d1ac.firebaseapp.com",
  projectId: "cosmetics-6d1ac",
  storageBucket: "cosmetics-6d1ac.appspot.com",
  messagingSenderId: "558363456729",
  appId: "1:558363456729:web:8d02fce08870fd6b987ac8",
};

firebase.initializeApp(fbConfig);
export const db = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);