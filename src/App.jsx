import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Feature";
function App() {
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <Navbar />
      <Hero />
      <Stats />
    </Router>
  );
}

export default App;
