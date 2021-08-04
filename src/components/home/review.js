import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../styled-components";
import ServiceCarousel from "../carousels/services";
import ReviewsCarousel from "../carousels/reviews";

const Services = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const Reviews = styled.div``;

export default () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Reviews>
              <ReviewsCarousel />
            </Reviews>
          </Col>
          {/*          <Col xs={12} md={6}>
            <Reviews>
              <ReviewsCarousel />
            </Reviews>
  </Col>          */}
        </Row>
      </Container>
    </Section>
  );
};
