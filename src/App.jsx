import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero"
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
