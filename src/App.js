import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Campaign from "./components/Campaign";
import Sandbox from "./components/Sandbox";
import Competition from "./components/Competition";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </Router>
  );
}

export default App;
