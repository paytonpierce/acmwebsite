import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Home from './Pages/HomePage/Homepage';
import About from './Pages/About/About';
import Links from './Pages/Links/Links';
import ContactUs from './Pages/SignUp/SignUp';
import React from "react";
import OfficerPage from './Pages/OfficerPage/OfficerPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
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
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
