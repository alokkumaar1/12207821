import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Stats from "./routes/Stats";
import Redirector from "./routes/Redirector";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/:shortcode" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;
