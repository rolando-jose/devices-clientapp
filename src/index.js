import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {Dashboard} from "./components/Dashboard";

ReactDOM.render(
    <React.StrictMode>
        <Dashboard/>
        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);