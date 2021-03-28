import React from 'react';
import styled from 'styled-components';
import StaffList from 'components/StaffList.js';

const StyledFilmPage = styled.main`
  padding: 3vw 0;

  .banner {
    display: flex;
    align-items: center;
    /* justify-content: center; */

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

  .cast {
    display: flex;
    > * {
      margin-right: 3vw;
    }
  }

  .last-update {
    display: block;
    opacity: 0.5;
    text-align: center;
    margin-top: 3vw;
  }
`;

export default function FilmPage({ film }) {
  const { API_URL } = process.env;
  const lastUpdate = new Date(film.updated_at);

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
              {' (this date might be wrong)'}
            </span>
            <p className="banner_text_synopsis">{film.synopsis}</p>
          </div>
        </div>
        <div className="cast">
          <StaffList
            title="Directed by"
            staff={film.directors}
            type="directors"
          />
          <StaffList title="Starring" staff={film.actors} type="actors" />
        </div>
        <span className="last-update">
          Last updated on:{' '}
          {`${lastUpdate.getDate()}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear()}`}
        </span>
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
