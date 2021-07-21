import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`

`
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  @media(min-width: 768px){
    height: 100%;
  }
`
const Title = styled.h2`
  //width: 50%;
`
const Description = styled.div`

`

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 7, order: 2 }}>
            <Image alt="historia" src={state.about.history.background} />
          </Col>
          <Col xs={12} md={{ span: 5, order: 1 }}>
            <Title>
              {state.about.history.title}
            </Title>
            <Description dangerouslySetInnerHTML={{ __html: state.about.history.description }} />
          </Col>          
        </Row> 
      </Container>
    </SectionCustom>
  )
}