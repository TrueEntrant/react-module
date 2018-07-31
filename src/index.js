import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./store";
import RootRouter from "./routing/root-routing.router";


const AddStore = () => (
    <Provider store={store}>
        <RootRouter />
    </Provider>
);

ReactDOM.render(<AddStore />, document.getElementById('root'));
registerServiceWorker();
