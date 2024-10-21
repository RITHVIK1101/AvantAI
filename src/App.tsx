import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'; // Import the landing page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Define the route for the main app (can be another page or app component) */}
          <Route
            path="/app"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;