import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import './index.css';
import './App.js';
import App from "./App.js";

ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Counter />
    </React.StrictMode>,
    document.getElementById("root")
  )
 