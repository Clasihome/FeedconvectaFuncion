import styled from 'styled-components';

export default styled.section`
  min-height: ${props => props.first ? `calc(${props.height} - 95.38px)` : props.height};
  position: relative;
  margin-bottom: ${props => props.noMargin ? "0" : "4rem"};
  @media(min-width: 768px){
    min-height: ${props => props.first ? `calc(${props.height} - 126.38px)` : props.height};
  }
`