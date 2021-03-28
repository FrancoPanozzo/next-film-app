import React from 'react';
import styled from 'styled-components';
import CategoryCarousel from 'components/CategoryCarousel';

const StyledActorPage = styled.main`
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

export default function ActorPage({ actor }) {
  const name = actor.first_name + ' ' + actor.last_name;
  const { API_URL } = process.env;
  const lastUpdate = new Date(actor.updated_at);
  return (
    <StyledActorPage>
      <div className="container">
        <div className="banner">
          <div className="banner_img">
            <img src={API_URL + actor.profile_pic.url} alt={name} />
          </div>
          <h1>{name}</h1>
          <p>{actor.biography}</p>
        </div>

        {actor.films.length ? (
          <CategoryCarousel films={actor.films} title="Films starred in" />
        ) : undefined}

        {actor.series.length ? (
          <CategoryCarousel series={actor.series} title="Series starred in" />
        ) : undefined}

        <span className="last-update">
          Last updated on:{' '}
          {`${lastUpdate.getDate()}/${lastUpdate.getMonth()}/${lastUpdate.getFullYear()}`}
        </span>
      </div>
    </StyledActorPage>
  );
}

export async function getServerSideProps({ params }) {
  const { API_URL } = process.env;
  const res_actor = await fetch(`${API_URL}/actors/${params.id}`);
  const actor = await res_actor.json();

  return {
    props: { actor },
  };
}
