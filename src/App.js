import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Home from './Pages/HomePage/Homepage.tsx';
import About from './Pages/About/About.tsx';
import Links from './Pages/Links/Links.tsx';
import ContactUs from './Pages/SignUp/SignUp.tsx';
import React from "react";
import OfficerPage from './Pages/OfficerPage/OfficerPage.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Routes> {/*was Switch */}
        <Route path="/signup">
            <ContactUs />
          </Route>
          <Route path="/officers">
            <OfficerPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
