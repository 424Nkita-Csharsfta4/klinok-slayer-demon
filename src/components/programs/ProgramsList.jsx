import React from "react";
import styled from "./ProgramsList.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { classes } from "./classes";
import Item from "../helpers/item/Item";

const ProgramsList = () => {
  const programs = classes.map((program) => {
    return (
      <Item key={program.id} item={program} className="program" theme="light" />
    );
  });

  return (
    <section className={styled.programs} id="classes">
      <Container>
      
      </Container>
    </section>
  );
};

export default ProgramsList;
