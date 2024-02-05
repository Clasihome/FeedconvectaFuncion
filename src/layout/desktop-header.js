import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';
import foto from '../images/logo-light-mobil.png'; // Import the image

const Header = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin-buttom: 50px;
`
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  
`

export default ({ dark })=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container>
        <Navigation>
          <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
            <div>
              <img src={foto} alt="Logo" /> {/* Use img tag to display the image */}
            </div>
          </AniLink>
          <br></br>
          <br></br>
          <br></br>
          <NavList horizontal>
            {/* ... Your other navigation items */}
          </NavList>
        </Navigation>
      </Container>
    </Header>    
  )
}
