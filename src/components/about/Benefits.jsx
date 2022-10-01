import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
     Inoske
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
            Боевой клич — «Атака кабана!». «Ино» (яп. 伊之) в его имени может быть игрой слов с «ино» или «иносиси» (яп. 猪), которые означают дикого кабана. Называет себя «королём гор» и требует от Дзэницу, Тандзиро и Нэдзуко обращения к себе, как к «боссу»
            </p>

           
            <Button  link="https://jut.su/kimetsu-yaiba/" className="primary">
           Смотреть Аниме
          </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://images8.alphacoders.com/124/1240024.jpg"
            alt="A woman stretching her arms"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
