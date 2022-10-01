import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";



const Footer = () => {
  return (
    <footer className={styled.footer__container}>
      

      <ul className={styled.footer__logo}>
        <Heading className="small" heading="Kimitsu no yaba" />
        <li>
         <a href="https://github.com/424Nkita-Csharsfta4">
           Developer is Tiraspolya
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
