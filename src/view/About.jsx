import React, { Fragment } from "react";
import { setTranslateElement } from "../assets/js/eventMouse";
import ImageAuthor from "../assets/image/author.jpg";

export function About({ autor }) {
  const { title, body, adicionals } = autor.pages.about;

  const handleEffectMouse = (e) => {
    document.getElementById("mouse").style.top = `${e.clientY - 5}px`;
    document.getElementById("mouse").style.left = `${e.clientX - 5}px`;
    document.getElementById("mouse").style.display = "block";

    setTranslateElement({
      x: e.clientX,
      y: e.clientY,
    });
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
      __html: `${addEffectString(title.split(" ")[0])} ${addEffectString(
        title.split(" ")[1]
      )} ${addEffectString(title.split(" ")[2])}`,
    };
  };

  return (
    <Fragment>
      <section
        className="box-about component-bg-dark"
        // onMouseMove={(e) => handleEffectMouse(e)}
      >
        <h3
          className="title-module"
          dangerouslySetInnerHTML={addElementHTMLTitle()}
        ></h3>
        <main className="box-main">
          <div className="box-mydata">
            <picture>
              <img
                src={ImageAuthor}
                alt={`${autor.name} ${autor.lastname}`}
                title={`${autor.name} ${autor.lastname}`}
                loading="lazy"
              />
            </picture>
            <article>
              <p>
                {body} {adicionals[0]}
              </p>
              <p>{adicionals[1]}</p>
              <p>{adicionals[2]}</p>
            </article>
          </div>
          <div className="box-location">
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
