import 'antd/dist/antd.css';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import './styles/App.scss';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Home />
      </Router>
    </div>
  );
}

export default App;
