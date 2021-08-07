import React from "react";
import ImageAuthor from "../assets/image/author.jpg";
import AboutMe from "../components/AboutMe";

export function About({ autor }) {
  const { name, lastname, about } = autor;
  const { title, body } = about;

  const data = {
    name,
    lastname,
    title,
    body,
    ImageAuthor,
  };
  return <AboutMe data={data} />;
}
