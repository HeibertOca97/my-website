import React from "react";
import { getTitlePage } from "./assets/js/toString";
import { Home } from "./view/Home";
import { About } from "./view/About";
import { Skill } from "./view/Skill";
import { Project } from "./view/Project";
import { Footer } from "./components/Footer";
import { autor } from "./assets/data.json";
import "./assets/scss/app.scss";
import { isMobile } from "react-device-detect";

function App() {
  const { contact } = autor;
  return (
    <>
      <Home isMobile={isMobile} autor={autor} onLoad={getTitlePage("CV")} />
      <About autor={autor} />
      <Skill autor={autor} />
      <Project autor={autor} />
      <Footer contact={contact} />
      <div className="mouse" id="mouse"></div>
    </>
  );
}

export default App;
