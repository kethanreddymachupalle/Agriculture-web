import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import CardPage from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import HelpPage from './components/Help/Help';
import Signup from "./components/Signup/AuthPage";
import SeedCalculator from './components/Seedcalculator/SeedCalculator';
import CropPractice from "./components/CropPractice/CropPractice";
import Fertilizer from "./components/Fertilizers/Fertilizers";
import OrganicFarming from "./components/OrganicFarming/OrganicFarming";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seedcalculator" element={<SeedCalculator />} />
        <Route path="/croppractice" element={<CropPractice />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/organicfarming" element={<OrganicFarming />} />
      </Routes>
    </Router>
  );
}

export default App;
