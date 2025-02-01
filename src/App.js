import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Service1 from "./components/Service1";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <Services />
      <Service1 />
      <FAQ />
      <Footer />
      
    </>
  );
}

export default App;