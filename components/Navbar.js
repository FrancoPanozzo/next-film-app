import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarHeight = '68px';

const NavbarClearfix = styled.div`
  height: ${NavbarHeight};
`;

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100vw;
  height: ${NavbarHeight};
  background-color: #0e0e0e;
  z-index: 99999999;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .logo {
    cursor: pointer;
    color: #e50914;
    text-transform: uppercase;
    font-family: 'Roboto Condensed ', sans-serif;
    font-size: 25px;
    font-weight: bold;
  }

  .menu {
    padding: 0 40px;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: white;
        text-decoration: none;
        transition: opacity 0.1s ease;
        font-size: 14px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <div className="container">
          <Link href="/">
            <span className="logo">NOTFLIX</span>
          </Link>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/series">Series</Link>
            </li>
            <li>
              <Link href="/films">Films</Link>
            </li>
            <li>
              <Link href="/my-list">My list</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
      <NavbarClearfix />
    </>
  );
}
