import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';

const StyledCard = styled.div`
  padding: 1rem;
  margin: 10px;
  background-color: #1d1f21;
  color: #f7f7f7;

  .poster {
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default function Card({ film }) {
  const { API_URL } = process.env;

  return (
    <StyledCard>
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
      <div className="cardBody">
        <h3>{film.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: film.synopsis }}></p>
      </div>
    </StyledCard>
  );
}
