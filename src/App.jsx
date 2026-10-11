import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import LearnMore from "./Pages/LearnMore";
import Footer from "./Components/Footer";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
