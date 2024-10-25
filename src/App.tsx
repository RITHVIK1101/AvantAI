import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./LandingPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import BuildWithUsPage from "./BuildWithUsPage"; // Import the Build with Us page

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

          {/* Define the route for the about page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Define the route for the contact page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Define the route for the Build with Us page */}
          <Route path="/build-with-us" element={<BuildWithUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
