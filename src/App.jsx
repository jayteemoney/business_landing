import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {Navbar, Hero, Stats, Service, Card, Testimonial, Partners, Cta, Footer} from "./components"
function App() {
  return (
    <Router> 
      <Navbar />
      <Hero />
      <Stats />
      <Service/>
      <Card/>
      <Testimonial />
      <Partners />
      <Cta />
      <Footer />
    </Router>
  );
}

export default App;
