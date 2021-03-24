import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';

const StyledSerieCard = styled.li`
  color: #f7f7f7;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .poster {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  h3 {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    padding: 8px;
    text-align: center;
    font-size: 13px;
  }
`;

export default function SerieCard({ serie }) {
  const { API_URL } = process.env;

  return (
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
  );
}
