import React from "react";
import styled from "./Facilities.module.css";
import boxing from "../../assets/1.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const Facilities = () => {
  const heading = (
    <>
      Клинок <span>Расекающий демонов</span>можно посмотреть на Jutsu .
    </>
  );

  return (
    <section className={styled.facility} id="facilities">
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Трейлер просто пушка
            </p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
