import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Social";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Navbar />
      <Hero />
      <Social />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
