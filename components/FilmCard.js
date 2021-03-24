import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';

const StyledFilmCard = styled.div`
  color: #f7f7f7;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    h3 {
      background-color: red;
    }
  }

  .poster {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    transition: background-color 0.15s ease;
    position: absolute;
    bottom: 4px;
    right: 4px;
    background-color: #0e0e0e;
    padding: 6px 8px;
    text-align: center;
    font-size: 10px;
    border-radius: 4px;
    letter-spacing: 1px;
    white-space: nowrap;
  }
`;

export default function FilmCard({ film }) {
  const { API_URL } = process.env;

  return (
    <StyledFilmCard>
      <div className="poster">
        {/* <Image
          src={API_URL + film.poster.url}
          alt={'Poster image of ' + film.title}
          width={200}
          height={400}
        /> */}
        <img
          src={API_URL + film.poster.url}
          alt={'Poster image of ' + film.title}
          width={200}
        />
      </div>
      <h3>{film.title}</h3>
      {/* <div className="cardBody">
        <h3>{film.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: film.synopsis }}></p>
      </div> */}
    </StyledFilmCard>
  );
}
