import { FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer({ contact }) {
  const { linkedin, instagram } = contact;
  return (
    <footer className="footer">
      <div>
        <p>
          Copyright © 2021 - <strong>Heibert Ocaña</strong>
        </p>
        <p>
          Contactame por:{" "}
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>{" "}
          <a href={instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </p>
      </div>
    </footer>
  );
}
