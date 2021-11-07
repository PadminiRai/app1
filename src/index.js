import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Counters from "./components/counters";
import './index.css';
import './App.js';

ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Counters />
    </React.StrictMode>,
    document.getElementById("root")
  )
 