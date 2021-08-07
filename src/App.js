import React from "react";
import { getTitlePage } from "./assets/js/toString";
import { Home } from "./view/Home";
import { About } from "./view/About";
import { Skill } from "./view/Skill";
import { Project } from "./view/Project";
import { autor } from "./assets/data.json";
import "./assets/scss/app.scss";
// import "./assets/css/glob.css";
// import "./assets/css/header.css";
// import "./assets/css/about.css";
// import "./assets/css/banner.css";
// import "./assets/css/skill.css";
import { isMobile } from "react-device-detect";
// import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <>
      <Home isMobile={isMobile} autor={autor} onLoad={getTitlePage("Home")} />
      <About autor={autor} />
      <Skill autor={autor} />
      <Project autor={autor} />
      <div className="mouse" id="mouse"></div>
    </>
  );
}

export default App;
