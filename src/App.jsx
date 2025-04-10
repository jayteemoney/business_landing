import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Hero,
  Stats,
  Service,
  Billing,
  Card,
  Testimonial,
  Partners,
  Cta,
  Footer,
} from "./components";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-[#00040F]">
        <Navbar />
        <div className="flex flex-col gap-12 md:gap-20 lg:gap-28">
          <Hero />
          <Stats />
          <Service />
          <Billing />
          <Card />
          <Testimonial />
          <Partners />
          <Cta />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;