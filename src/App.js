import React from "react";
import { getTitlePage } from "./assets/js/toString";
import { Home } from "./view/Home";
import { About } from "./view/About";
import { autor } from "./assets/data.json";
import "./assets/css/glob.css";
import "./assets/css/header.css";
import "./assets/css/about.css";
import "./assets/css/banner.css";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      <Home isMobile={isMobile} autor={autor} onLoad={getTitlePage("Home")} />
      <About autor={autor} />
      <h3>About</h3>
      <h3>sKills</h3>
      <h3>Experience/Works</h3>
      <h3>Contact</h3>
      <div className="mouse" id="mouse"></div>
    </>
  );
}

export default App;
