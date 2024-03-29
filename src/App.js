import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tentang from "./Pages/Tentang";
import Menu from "./Pages/Menu";
import Navigation from "./components/Navigation";
import Index from "./Pages/Index";
import Review from "./Pages/Review";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/review" element={<Review />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;