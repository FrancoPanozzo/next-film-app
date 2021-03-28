import React from 'react';
import styled from 'styled-components';
import StaffList from 'components/StaffList.js';
import Head from 'next/head';

const StyledSeriePage = styled.main`
  padding: 3vw 0 1.5vw;

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
        font-size: 3.5em;
      }

      &_release-date {
        margin-bottom: 1.5vw;
        opacity: 0.5;
      }

      p {
        max-width: 400px;
        line-height: 1.4;
        font-size: 17px;
      }
    }
  }

  .cast {
    display: flex;
    justify-content: center;
    > * {
      margin-right: 3vw;
    }
  }

  .last-update {
    display: block;
    opacity: 0.5;
    text-align: center;
    margin-top: 3vw;
    font-size: 12px;
  }
`;

export default function FilmPage({ serie }) {
  const { API_URL } = process.env;
  const lastUpdate = new Date(serie.updated_at);

  return (
    <StyledSeriePage>
      <Head>
        <title>Notflix - {serie.title}</title>
      </Head>
      <div className="container">
        <div className="banner">
          <div className="banner_poster">
            <img src={API_URL + serie.poster.url} />
          </div>
          <div className="banner_text">
            <h1>{serie.title}</h1>
            <span className="banner_text_release-date">
              {serie.release_date} • {serie.seasons} seasons
              {' (this date might be wrong)'}
            </span>
            <p className="banner_text_synopsis">{serie.synopsis}</p>
          </div>
        </div>
        <div className="cast">
          <StaffList
            title="Directed by"
            staff={serie.directors}
            type="directors"
          />
          <StaffList title="Starring" staff={serie.actors} type="actors" />
        </div>
        <span className="last-update">
          Last updated on:{' '}
          {`${lastUpdate.getDate()}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear()}`}
        </span>
      </div>
    </StyledSeriePage>
  );
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_serie = await fetch(`${API_URL}/series/${params.id}`);
  const serie = await res_serie.json();

  return {
    props: { serie },
  };
}
