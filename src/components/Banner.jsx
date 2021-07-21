import React, { Fragment } from "react";
import { ReactComponent as IconMount } from "../assets/image/mount.svg";
// import { gsap } from "gsap";
// import {ReactComponent as IconMount2} from '../assets/image/mount2.svg';
import ImageAuthorCartoon from "../assets/image/mi-caricatura.png";

export function Banner({ data }) {
  const styleImageSVG = {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    zIndex: "10",
  };

  const convertStringToArray = (text) => {
    return text.split(" ");
  };

  const addEffectString = (text) => {
    let newText = [];
    for (let i = 0; i < text.length; i++) {
      newText.push(
        `<span class="effect-text-banner text-effect">${text[i]}</span>`
      );
    }
    let textString = newText.join().replace(/,/g, "");
    return textString;
  };

  const addElementHTMLTitle = () => {
    return {
      __html: `${addEffectString(data.name)} ${addEffectString(data.lastname)}`,
    };
  };

  const addElementHTMLProfession = () => {
    return {
      __html: `${addEffectString(
        convertStringToArray(data.description[0])[0]
      )} ${addEffectString(convertStringToArray(data.description[0])[1])}`,
    };
  };

  const addElementHTMLDetail = () => {
    return {
      __html: `${addEffectString(
        convertStringToArray(data.description[1])[0]
      )} ${addEffectString(
        convertStringToArray(data.description[1])[1]
      )} ${addEffectString(convertStringToArray(data.description[1])[2])}`,
    };
  };

  const handleModeExplorer = (e) => {
    e.target.style.display = "none";
    document.body.style.overflow = "auto";
  };

  (() => {
    if (window.scrollY < 1) {
      // document.body.style.overflow = "hidden";
    }
  })();

  return (
    <Fragment>
      <div className="banner-prev component-dimesion component-bg-light">
        <div className="present-prev">
          <div>
            <h1 dangerouslySetInnerHTML={addElementHTMLTitle()} />
            <p dangerouslySetInnerHTML={addElementHTMLProfession()} />
            <p dangerouslySetInnerHTML={addElementHTMLDetail()} />
            <button
              onClick={(e) => handleModeExplorer(e)}
              className="btn-explore"
            >
              Explorar
            </button>
          </div>
          <picture>
            <img
              className="logo-img"
              src={ImageAuthorCartoon}
              alt={`${data.name} ${data.lastname}`}
              title={`${data.name} ${data.lastname}`}
              loading="lazy"
            />
            <span className="box-back-image"></span>
          </picture>
        </div>
        {/* <IconMount2 className="svgTop"/> */}
        <IconMount style={styleImageSVG} />
      </div>
    </Fragment>
  );
}
