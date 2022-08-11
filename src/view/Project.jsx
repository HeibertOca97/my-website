import React from "react";
import { addEffectString } from "../assets/js/toString";
import { CardWork } from "../components/CardWork";

export function Project() {

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
          />
        </main>
      </div>
    </section>
  );
}
