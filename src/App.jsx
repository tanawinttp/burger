import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards";
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards/>
    </div>
  );
}

export default App;
