import React from "react";
import { getRandomColors } from "../assets/js/eventMouse";
import { Banner } from "../components/Banner";

export function Home({ isMobile, autor }) {
  const handleRemoveMouse = (e) => {
    document.getElementById("mouse").style.display = "none";
  };

  // const handleEffectMouse = (e) => {
  //   // document.getElementById("mouse").setAttribute('style', `top: ${(e.clientY - 5)}px; left:${(e.clientX - 5)}px;`);
  //   document.getElementById("mouse").style.top = `${e.clientY - 5}px`;
  //   document.getElementById("mouse").style.left = `${e.clientX - 5}px`;
  //   document.getElementById("mouse").style.display = "block";

  //   setTranslateElement({
  //     x: e.clientX,
  //     y: e.clientY,
  //   });
  // };

  const handleEffectClick = (e) => {
    const elDiv = document.createElement("div");
    elDiv.setAttribute(
      "style",
      "width:25px; height:25px; position:fixed; z-index:1500; border-radius: 25px;"
    );
    document.body.appendChild(elDiv);
    elDiv.style.border = `1px solid ${getRandomColors()}`;
    elDiv.style.opacity = "1";
    elDiv.style.top = e.clientY - 15 + "px";
    elDiv.style.left = e.clientX - 15 + "px";
    setTimeout(() => {
      elDiv.style.opacity = "0";
      document.body.removeChild(elDiv);
    }, 200);
  };

  const handleFunctionsForDefault = () => {
    if (isMobile) {
      document.body.style.cursor = "default";
      document.addEventListener("click", (e) => handleEffectClick(e));
      return;
    }
    // document.body.style.cursor = "none";
    // document.addEventListener("mousemove", (e) => handleEffectMouse(e));
    document.addEventListener("mouseleave", (e) => handleRemoveMouse(e));
  };
  (() => {
    handleFunctionsForDefault();
  })();

  return (
    <>
      <Banner data={autor} />
    </>
  );
}
