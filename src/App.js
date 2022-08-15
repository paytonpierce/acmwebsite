import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Home from './Pages/HomePage/Homepage';
import About from './Pages/About/About';
import Links from './Pages/Links/Links';
import SignUp from './Pages/SignUp/SignUp';
import React from "react";
import OfficerPage from './Pages/OfficerPage/OfficerPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/officerpage" element={<OfficerPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
