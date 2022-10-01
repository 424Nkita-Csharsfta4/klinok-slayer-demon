import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      Zenitsu
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
            Член организации охотников за демонами и спутник Тандзиро Камадо, один из пяти выживших на последнем отборе. На год старше Иносукэ и Тандзиро, ему шестнадцать лет. 
            </p>

            <Button  link="https://jut.su/kimetsu-yaiba/" className="primary">
           Смотреть Аниме
          </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
