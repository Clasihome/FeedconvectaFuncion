import React, { useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import imgHero from "../../images/about.webp";
import { Section } from "../../styled-components";

const MainCont = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${(props) => props.src}");
  //background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Title = styled.h2`
  //width: 50%;
  text-align: center;
`;

export default () => {
  const state = useContext(context);
  return (
    <MainCont first height='70vh' src={imgHero}>
      <Container>
        <Title>
          Perseverancia y profesionalismo al servicio de nuestros clientes
        </Title>
      </Container>
    </MainCont>
  );
};
