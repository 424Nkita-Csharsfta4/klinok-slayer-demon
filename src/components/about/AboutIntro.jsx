import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
    Tandjiro <span>Komado</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
          Танджиро Камадо (竈門かまど炭たん治じ郎ろう Kamado Tanjirō?) — главный герой манги и аниме «Клинок, рассекающий демонов». Он стал истребителем демонов, чтобы найти ответственного за убийство его семьи и превращение его сестры в демона.
          </p>

        
          <Button  link="https://jut.su/kimetsu-yaiba/" className="primary">
           Смотреть Аниме
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
