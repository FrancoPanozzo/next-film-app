import React from 'react';
import styled from 'styled-components';

const StyledFilmPage = styled.main`
  padding-top: 3vw;

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;

    &_poster {
      width: 350px;
      height: 450px;
      overflow: hidden;
      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_text {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 3vw;

      h1 {
        margin-bottom: 8px;
        font-size: 3em;
      }

      &_release-date {
        margin-bottom: 3vw;
        opacity: 0.5;
      }

      p {
        max-width: 400px;
      }
    }
  }
`;

export default function FilmPage({ film }) {
  console.log(film);
  const { API_URL } = process.env;
  return (
    <StyledFilmPage>
      <div className="container">
        <div className="banner">
          <div className="banner_poster">
            <img src={API_URL + film.poster.url} />
          </div>
          <div className="banner_text">
            <h1>{film.title}</h1>
            <span className="banner_text_release-date">
              {film.release_date}
            </span>
            <p className="banner_text_synopsis">{film.synopsis}</p>
          </div>
        </div>
      </div>
    </StyledFilmPage>
  );
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_film = await fetch(`${API_URL}/films/${params.id}`);
  const film = await res_film.json();

  return {
    props: { film },
  };
}
