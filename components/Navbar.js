import React from 'react';
import styled from 'styled-components';

const NavbarHeight = '60px';

const NavbarClearfix = styled.div`
  height: ${NavbarHeight};
`;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100vw;
  height: ${NavbarHeight};
  background-color: red;
`;

export default function Navbar() {
  return (
    <>
      <StyledNavbar>I'm navbar</StyledNavbar>
      <NavbarClearfix />
    </>
  );
}
