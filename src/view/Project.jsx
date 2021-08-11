import React from "react";
import { addEffectString } from "../assets/js/toString";
import ImageProject1 from "../assets/image/project1.jpg";
import ImageProject2 from "../assets/image/project2.png";
import { CardWork } from "../components/CardWork";

export function Project({ autor }) {
  const { project1, project2 } = autor.experiences;

  return (
    <section className="box-project">
      <div className="container-module">
        <h3 className="title-module3 elEffectTop">
          <span
            dangerouslySetInnerHTML={{
              __html: addEffectString("Experiencias", "effect-cl1"),
            }}
          />{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: addEffectString("&", "effect-cl1"),
            }}
          />{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: addEffectString("Trabajos", "effect-cl1"),
            }}
          />
        </h3>
        <main>
          <CardWork
            listData={[project1, project2]}
            Image={[ImageProject1, ImageProject2]}
          />
        </main>
      </div>
    </section>
  );
}
