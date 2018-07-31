import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./store";
import RootRouter from "./routing/root-routing.router";
import { firebase } from 'firebase/app';


const AddStore = () => (
    <Provider store={store}>
        <RootRouter />
    </Provider>
);

var config = {
    apiKey: "AIzaSyDDZI6bO7nY6qLtrh7saRKJx80zvzO4GfM",
    authDomain: "benzcomunity.firebaseapp.com",
    databaseURL: "https://benzcomunity.firebaseio.com",
    projectId: "benzcomunity",
    storageBucket: "",
    messagingSenderId: "978542336621"
  };
  firebase.initializeApp(config);

ReactDOM.render(<AddStore />, document.getElementById('root'));
registerServiceWorker();
