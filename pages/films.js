const qs = require('qs');
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';
import Head from 'next/head';

const StyledFilms = styled.main``;

export default function Films({ films, categories }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <StyledFilms>
      <Head>
        <title>Notflix - Films</title>
      </Head>
      {categories.map((c) => {
        let title = capitalizeFirstLetter(`${c.title.toLowerCase()}`);
        return <CategoryCarousel key={c.id} title={title} films={c.films} />;
      })}
      <CategoryCarousel films={films} title="All" />
    </StyledFilms>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();

  // Get the categories with more than 1 serie
  const query = qs.stringify({
    _where: [{ films_gte: 5 }],
  });
  const res_categories = await fetch(`${API_URL}/categories?${query}`);
  const categoriesOrdered = await res_categories.json();
  const categories = shuffle(categoriesOrdered);

  return {
    props: { films, categories },
  };
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
