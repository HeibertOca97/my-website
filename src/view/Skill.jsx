import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaLaravel,
  FaCheckCircle,
  FaSass,
  FaBootstrap,
  FaPlusCircle,
  FaWindowClose,
} from "react-icons/fa";
import { SiMysql, SiTypescript, SiJquery } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { technologyDescription } from "../assets/js/technology";
import { gsap } from "gsap";
import { ReactComponent as IconGsap } from "../assets/image/gsap.svg";

export function Skill({ autor }) {
  const modalRef = useRef(null);
  const titleModalRef = useRef(null);
  const tagRef = useRef(null);
  const descModalRef = useRef(null);
  const { title, body } = autor.skills;

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

  const getDataTechnology = (value) => {
    if (technologyDescription[value]) {
      return technologyDescription[value];
    }
    return {
      title: "No existe titulo",
      description: "No existe descripcion",
      type: [],
    };
  };

  const handleClickModal = () => {
    const boxIcon = document.querySelectorAll(".card-technology");
    for (let i = 0; i < boxIcon.length; i++) {
      boxIcon[i].addEventListener("click", (e) => {
        if (boxIcon[i].getAttribute("data-name")) {
          const nameValue = boxIcon[i].getAttribute("data-name");
          const { title, description, type } = getDataTechnology(nameValue);
          titleModalRef.current.innerHTML = title;
          descModalRef.current.innerHTML = description;
          tagRef.current.innerHTML = type.map((el) => `<small>${el}</small>`);
          modalRef.current.children[0].style.marginTop = `-${modalRef.current.children[0].clientHeight}px`;

          gsap.to(modalRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });
          gsap.to(modalRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        }
      });
    }
  };

  const handleCloseModal = () => {
    gsap.to(modalRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  };

  useEffect(() => {
    handleClickModal();

    gsap.set(modalRef.current, {
      y: 100,
      opacity: 0,
    });
  });

  return (
    <section className="box-skills component-bg-light">
      <div>
        <h3
          className="title-module3 elEffectTop"
          style={{ color: "var(--cl-df)" }}
          dangerouslySetInnerHTML={{
            __html: `${addEffectString(title)}`,
          }}
        />
        <article className="box-h-description elEffectTop">
          {body.map((text, key) => (
            <p key={key}>
              <FaCheckCircle /> <span>{text}</span>
            </p>
          ))}
        </article>
      </div>
      <div>
        <h3
          className="title-module3 elEffectTop"
          style={{ color: "var(--cl-df)" }}
          dangerouslySetInnerHTML={{
            __html: `${addEffectString("Tecnologias")}`,
          }}
        />
        <div className="box-technology elEffectTop">
          <div className="card-technology" title="HTML" data-name="html">
            <FaHtml5 className="ball-technology" />
          </div>
          <div className="card-technology" title="CSS" data-name="css">
            <FaCss3Alt className="ball-technology" />
          </div>
          <div className="card-technology" title="JAVASCRIPT" data-name="js">
            <FaJsSquare className="ball-technology" />
          </div>
          <div className="card-technology" title="PHP" data-name="php">
            <FaPhp className="ball-technology" />
          </div>
          <div className="card-technology" title="SASS" data-name="sass">
            <FaSass className="ball-technology" />
          </div>
          <div className="card-technology" title="BOOTSTRAP" data-name="bstrap">
            <FaBootstrap className="ball-technology" />
          </div>
          <div className="card-technology" title="GSAP" data-name="gsap">
            <IconGsap className="ball-gsap" />
          </div>
          <div className="card-technology" title="JQUERY" data-name="jquery">
            <SiJquery className="ball-technology" />
          </div>
          <div className="card-technology" title="REACT" data-name="react">
            <FaReact className="ball-technology" />
          </div>
          <div className="card-technology" title="TYPESCRIPT" data-name="ts">
            <SiTypescript className="ball-technology" />
          </div>
          <div className="card-technology" title="NODEJS" data-name="node">
            <FaNodeJs className="ball-technology" />
          </div>
          <div className="card-technology" title="LARAVEL" data-name="laravel">
            <FaLaravel className="ball-technology" />
          </div>
          <div className="card-technology" title="SQL" data-name="sql">
            <AiOutlineConsoleSql className="ball-technology" />
          </div>
          <div className="card-technology" title="MYSQL" data-name="mysql">
            <SiMysql className="ball-technology" />
          </div>
          <div className="card-technology" title="MAS" data-name="mas">
            <FaPlusCircle className="ball-technology" />
          </div>
        </div>
        <div className="modal-bottom" ref={modalRef}>
          <div className="m-technology">
            <div className="m-header">
              <strong id="m-title" ref={titleModalRef}></strong>
              <FaWindowClose className="m-close" onClick={handleCloseModal} />
            </div>
            <hr />
            <div className="m-body">
              <p className="m-box-tag" ref={tagRef}></p>
              <p id="m-description" ref={descModalRef}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
