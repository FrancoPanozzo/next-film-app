import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';
import Head from 'next/head';

const StyledFilms = styled.main``;

export default function Films({ films }) {
  return (
    <StyledFilms>
      <Head>
        <title>Notflix - Films</title>
      </Head>
      <CategoryCarousel films={films} title="All" />
    </StyledFilms>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();

  return {
    props: { films },
  };
}
