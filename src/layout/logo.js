import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import foto from "../images/logo-light-mobil.png"

const Logo = styled.img`
  min-width: 180px;
  min-height: 81.38px;
  max-width: 180px;
  max-height: 81.38px;
  object-fit: contain;
  object-position: center;
`

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
      <Logo src={dark ? state.logoDark : mobile ? require(foto) : state.logo} alt="Logo" />
  )
}