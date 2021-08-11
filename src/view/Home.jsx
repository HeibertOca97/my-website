import React, { useEffect } from "react";
import { Banner } from "../components/Banner";

export function Home({ isMobile, autor }) {
  const handleRemoveMouse = () => {
    document.getElementById("mouse").style.display = "none";
  };

  const handleEffectMouse = (e) => {
    if (e.target.matches("iframe") || e.target.matches("a")) {
      handleRemoveMouse();
      return;
    }

    document.getElementById("mouse").style.top = `${e.clientY - 5}px`;
    document.getElementById("mouse").style.left = `${e.clientX - 5}px`;
    document.getElementById("mouse").style.display = "block";
  };

  const handleFunctionsForDefault = () => {
    if (isMobile) {
      document.body.style.cursor = "default";
      return;
    }

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", (e) => handleEffectMouse(e));
    document.addEventListener("mouseleave", handleRemoveMouse);
  };

  useEffect(() => {
    handleFunctionsForDefault();
    window.addEventListener("resize", handleFunctionsForDefault);
  });

  return <Banner data={autor} />;
}
