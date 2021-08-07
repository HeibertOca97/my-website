import React, { Fragment, useRef, useEffect } from "react";
import { ReactComponent as IconMount } from "../assets/image/mount.svg";
import { gsap } from "gsap";
import ImageAuthorCartoon from "../assets/image/mi-caricatura.png";

export function Banner({ data }) {
  const titleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const boxImgRef = useRef(null);
  const imgRef = useRef(null);
  const imgBottomRef = useRef(null);

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
        `<span class="effect-text-banner effect-cl1 text-effect">${text[i]}</span>`
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

  useEffect(() => {
    gsap.set(
      [titleRef.current, description1Ref.current, description2Ref.current],
      {
        x: -150,
        opacity: 0,
      }
    );
    gsap.to(titleRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
    });
    gsap.to(description1Ref.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
    });
    gsap.to(description2Ref.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 1.5,
    });
    gsap.set(boxImgRef.current, { x: 150, opacity: 0 });
    gsap.to(boxImgRef.current, { x: 0, opacity: 1, duration: 1, delay: 2 });

    gsap.set(imgRef.current, { rotation: 360, scale: 0, opacity: 0 });
    gsap.to(imgRef.current, {
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 2.5,
    });
    gsap.set(imgBottomRef.current, { y: 150, opacity: 0 });
    gsap.to(imgBottomRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 2.5,
    });
  });

  return (
    <Fragment>
      <div className="banner-prev component-dimesion component-bg-light">
        <div className="present-prev">
          <div>
            <h1
              className="title-module1"
              ref={titleRef}
              dangerouslySetInnerHTML={addElementHTMLTitle()}
            />
            <p
              className="subtitle-module1"
              ref={description1Ref}
              dangerouslySetInnerHTML={addElementHTMLProfession()}
            />
            <p
              className="subtitle-module1"
              ref={description2Ref}
              dangerouslySetInnerHTML={addElementHTMLDetail()}
            />
          </div>
          <picture ref={boxImgRef} className="box-logo">
            <img
              className="logo-img"
              src={ImageAuthorCartoon}
              alt={`${data.name} ${data.lastname}`}
              title={`${data.name} ${data.lastname}`}
              loading="lazy"
              ref={imgRef}
            />
            <span className="box-back-image"></span>
          </picture>
        </div>
        <IconMount ref={imgBottomRef} style={styleImageSVG} />
      </div>
    </Fragment>
  );
}
