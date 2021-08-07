import React, { Fragment, useEffect } from "react";
import { gsap } from "gsap";

export default function AboutMe({ data }) {
  const { title, body, name, lastname, ImageAuthor } = data;

  const addEffectString = (text) => {
    let newText = [];
    for (let i = 0; i < text.length; i++) {
      newText.push(
        `<span class="effect-text-banner effect-cl2 text-effect">${text[i]}</span>`
      );
    }
    let textString = newText.join().replace(/,/g, "");
    return textString;
  };

  const addElementHTMLTitle = () => {
    return {
      __html: `${addEffectString(title.split(" ")[0])} ${addEffectString(
        title.split(" ")[1]
      )} ${addEffectString(title.split(" ")[2])}`,
    };
  };

  const handleEffectElementScrollTop = (
    elementsEffect,
    effectTo,
    effectSet
  ) => {
    let scrolltop = document.documentElement.scrollTop;
    let elementTop = document.querySelectorAll(elementsEffect);

    for (let i = 0; i < elementTop.length; i++) {
      if (elementTop[i].offsetTop - 500 < scrolltop) {
        gsap.to(elementTop[i], effectTo);
      } else {
        gsap.set(elementTop[i], effectSet);
      }
    }
  };
  useEffect(() => {
    gsap.set(".elEffectTop", {
      y: 100,
      opacity: 0,
    });
    gsap.set(".elEffectLeft", {
      x: -100,
      opacity: 0,
    });
    gsap.set(".elEffectRight", {
      x: 100,
      opacity: 0,
    });
    window.addEventListener("scroll", () => {
      handleEffectElementScrollTop(
        ".elEffectTop",
        {
          y: 0,
          duration: 1,
          opacity: 1,
        },
        {
          y: 100,
          duration: 1,
          opacity: 0,
        }
      );
      handleEffectElementScrollTop(
        ".elEffectLeft",
        {
          x: 0,
          duration: 1,
          opacity: 1,
        },
        {
          x: -100,
          duration: 1,
          opacity: 0,
        }
      );
      handleEffectElementScrollTop(
        ".elEffectRight",
        {
          x: 0,
          duration: 1,
          opacity: 1,
        },
        {
          x: 100,
          duration: 1,
          opacity: 0,
        }
      );
    });
  });

  return (
    <Fragment>
      <section id="about" className="box-about component-bg-dark">
        <h3
          className="title-module2 elEffectLeft"
          dangerouslySetInnerHTML={addElementHTMLTitle()}
        ></h3>
        <main className="box-main">
          <div className="box-mydata">
            <picture className="elEffectTop">
              <img
                src={ImageAuthor}
                alt={`${name} ${lastname}`}
                title={`${name} ${lastname}`}
                loading="lazy"
              />
            </picture>
            <article className="elEffectTop">
              {body.map((item, key) => (
                <p key={key} className="p-cl">
                  {key === 0 && `Hola, soy ${name} ${lastname}`} {item}
                </p>
              ))}
            </article>
          </div>
          <div className="box-location elEffectTop">
            <iframe
              title="My location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042595.9097119637!2d-81.36266635184067!3d-0.7836570984225469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902ba64f32fc4253%3A0xb327e62b5b571811!2zTWFuYWLDrQ!5e0!3m2!1ses!2sec!4v1626844910384!5m2!1ses!2sec"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </section>
    </Fragment>
  );
}
