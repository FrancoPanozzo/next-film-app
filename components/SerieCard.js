import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import Image from 'next/image';

const StyledSerieCard = styled.li`
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
      background-color: #e50914;
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
    top: 4px;
    right: 4px;
    background-color: #0e0e0e;
    padding: 4px 6px;
    text-align: center;
    font-size: 10px;
    border-radius: 4px;
    letter-spacing: 1px;
    white-space: nowrap;
  }
`;

export default function SerieCard({ serie }) {
  const { API_URL } = process.env;

  return (
    <Link href={`/series/${serie.id}`}>
      <StyledSerieCard>
        <div className="poster">
          {/* <Image
          src={API_URL + film.poster.url}
          alt={'Poster image of ' + film.title}
          width={200}
          height={400}
        /> */}
          <img
            src={API_URL + serie.poster.url}
            alt={'Poster image of ' + serie.title}
            width={200}
          />
        </div>
        <h3>{serie.title}</h3>
        {/* <div className="cardBody">
        <p dangerouslySetInnerHTML={{ __html: serie.synopsis }}></p>
      </div> */}
      </StyledSerieCard>
    </Link>
  );
}
