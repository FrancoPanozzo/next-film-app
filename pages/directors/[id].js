import React from 'react';
import styled from 'styled-components';
import CategoryCarousel from 'components/CategoryCarousel';
import Head from 'next/head';

const StyledDirectorPage = styled.main`
  margin: 3vw 0 1.5vw;

  .banner {
    margin-bottom: 1.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_img {
      width: 200px;
      height: 200px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h1 {
      margin: 1.5vw 0 3vw;
    }

    p {
      max-width: 500px;
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

export default function DirectorPage({ director }) {
  let name = director.first_name + ' ' + director.last_name;
  const { API_URL } = process.env;
  const lastUpdate = new Date(director.updated_at);

  return (
    <StyledDirectorPage>
      <Head>
        <title>Notflix - {name}</title>
      </Head>
      <div className="container">
        <div className="banner">
          <div className="banner_img">
            <img src={API_URL + director.profile_pic.url} alt={name} />
          </div>
          <h1>{name}</h1>
          <p>{director.biography}</p>
        </div>

        {director.films.length ? (
          <CategoryCarousel films={director.films} title="Films directed" />
        ) : undefined}

        {director.series.length ? (
          <CategoryCarousel series={director.series} title="Series directed" />
        ) : undefined}

        <span className="last-update">
          Last updated on:{' '}
          {`${lastUpdate.getDate()}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear()}`}
        </span>
      </div>
    </StyledDirectorPage>
  );
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_director = await fetch(`${API_URL}/directors/${params.id}`);
  const director = await res_director.json();

  return {
    props: { director },
  };
}
