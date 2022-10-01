import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import exercise from "../../assets/21.jpg";

const Join = () => {
  const heading = (
    <>
    Kimitsu no yaba <span>так будет произносится</span> клинок расекающий демонов.
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={heading} />
            <p className="text--dark">
            Тандзиро Камадо — старший сын в семье, потерявший своего отца и взявший на себя заботу о своих родных. Однажды он уходит в соседний город, чтобы продать древесный уголь. Вернувшись утром, парень обнаруживает перед собой страшную картину: вся родня была зверски убита, а единственной выжившей является
            </p>
         
          </article>

        
        </div>

        <figure className={styled.join__image}>
          <img src={exercise} alt="baby" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
