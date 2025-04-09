import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
function App() {
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <Navbar />
      <Hero />
      <main className="mt-16">
        <h1 className="text-white text-center text-4xl mt-10">Welcome to NeoBank</h1>
      </main>
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-10 text-2xl">Home Page</h2>} />
        <Route path="/features" element={<h2 className="text-center mt-10 text-2xl">Features Page</h2>} />
        <Route path="/pricing" element={<h2 className="text-center mt-10 text-2xl">Pricing Page</h2>} />
        <Route path="/about" element={<h2 className="text-center mt-10 text-2xl">About Us</h2>} />
        <Route path="/signup" element={<h2 className="text-center mt-10 text-2xl">Sign Up Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
