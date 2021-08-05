import React, { useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../images/me.jpg";

import { Section } from "../../styled-components";

const SectionCustom = styled(Section)``;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
const Title = styled.h2`
  //width: 50%;
  margin-top: 40px;
`;
const Description = styled.div`
  padding: 40px 40px 0px 0px;
  text-align: justify;
`;

export default () => {
  const state = useContext(context);
  return (
    <SectionCustom>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 7, order: 2 }}>
            <Image alt='historia' src={imgHero} />
          </Col>
          <Col xs={12} md={{ span: 5, order: 1 }}>
            <Title>Mi Historia</Title>
            <Description>
              De profesión Educadora de párvulos, titulada de Universidad
              Católica de ChileProfesional del área inmobiliaria titulada,
              enfocada a la atención de clientes en proyectos inmobiliarios y en
              el área de corretaje de propiedades tanto a personas como a
              empresas desde hace más de 20 años.Mi gran fortaleza es el
              profundo conocimiento habitacional y comercial inmobiliario lo
              cual permite agregar valor a mi gestión en las diferentes áreas
              que me desempeño.
            </Description>
          </Col>
        </Row>
      </Container>
    </SectionCustom>
  );
};
