import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging" element={<Lodging />} />
        {/* path="*" erreur 404, fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
