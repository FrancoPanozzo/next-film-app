import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

      &.active a {
        cursor: default;
        font-weight: 500;
        opacity: 1;
      }

      a {
        color: white;
        text-decoration: none;
        transition: opacity 0.1s ease;
        font-size: 14px;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <StyledNavbar>
        <div className="container">
          <Link href="/">
            <span className="logo">NOTFLIX</span>
          </Link>
          <ul className="menu">
            <li className={pathname === '/' ? 'active' : undefined}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === '/series' ? 'active' : undefined}>
              <Link href="/series">Series</Link>
            </li>
            <li className={pathname === '/films' ? 'active' : undefined}>
              <Link href="/films">Films</Link>
            </li>
            {/* <li>
              <Link href="/my-list">My list</Link>
            </li> */}
          </ul>
        </div>
      </StyledNavbar>
      <NavbarClearfix />
    </>
  );
}
