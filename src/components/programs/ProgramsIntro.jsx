import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/nez.jpg";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      Nezuko <span>Komado</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <p className="text">
           
          </p>

          <p className="text">
          Нэдзуко Камадо / Nezuko Kamado ... Младшая сестра Тандзиро. Была вторым ребёнком в семье. Всегда отличалась кротостью и добротой, часто отказывала себе в чём-либо
          </p>
          <Button className="primary" link="#classes">
           Смотреть аниме
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Nezuko" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
