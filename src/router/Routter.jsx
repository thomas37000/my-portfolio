import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjetsPerso from "../components/Projets/ProjetsPerso";
import Mount from "../components/animation/Mount";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home";
import Navbar from "../components/navbar/Navbar";
import Description from "../components/description/Description";

const Routter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Description />} />
        <Route path="/skills" element={<Mount />} />
        <Route path="/projets" element={<ProjetsPerso />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routter;
