import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaTags, FaLink } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import ImageProject1 from "../assets/image/project1.jpg";
import ImageProject2 from "../assets/image/project2.png";
import { autor } from '../assets/data.json';

export function CardWork() {
  const [experiences, setExperiences] = useState([]);
  const [itemImg, setItemImg] = useState([]);

  useEffect(() => {
    setExperiences(autor.experiences);
    setItemImg([ImageProject2, ImageProject1]);
  }, []);

  const addStyleString = (list) => {
    if (typeof list !== "object") return;
    const newArray = list.map(
      (item) => `<span class="tags-work">${item}</span>`
    );
    const arrayJoin = newArray.join().replace(",", " ");
    return arrayJoin;
  };

  const CardList = () => {
    return experiences.sort((a, b) => a.id > b.id && -1).map((item, key) => (
      <div className="card-project elEffectTop" key={key}>
        <picture>
          <img src={itemImg[key]} title={item.shortname} alt={item.shortname} />
        </picture>
        <article>
          <h4>
            {item.name} ({item.shortname})
          </h4>
          <p>
            <small>
              <FaCalendarAlt /> {item.weather}
            </small>
          </p>
          <p>{item.description}</p>
          <p>
            <FaTags />{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: addStyleString(item.tags),
              }}
            />
          </p>
          <p>
            <MdWork /> Tipo de trabajo: {item.typework}
          </p>
          <p>
            <FaLink />{" "}
            {item.status.success ? (
              <a href={item.domain} target="_blank" rel="noreferrer">
                {item.domain}
              </a>
            ) : (
              item.domain
            )}{" "}
            <span
              className={`tags-state state-${
                item.status.success ? "active" : "inactive"
              }`}
            >
              {item.status.message}
            </span>
          </p>
        </article>
      </div>
    ));
  };

  return <CardList />;
}
