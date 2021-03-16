import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  padding: 15px 0;
  background-color: red;
`;

export default function Navbar() {
  return <StyledNav>I'm navbar</StyledNav>;
}
