const qs = require('qs');
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';

const StyledHome = styled.main``;

export default function Home({ films, series, categories }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledHome>
      <Head>
        <title>Notflix - Home</title>
      </Head>
      {categories.map((c) => {
        let titleFilm = capitalizeFirstLetter(`${c.title.toLowerCase()} films`);
        let titleSerie = capitalizeFirstLetter(
          `${c.title.toLowerCase()} series`
        );
        return (
          <>
            <CategoryCarousel title={titleFilm} films={c.films} />
            <CategoryCarousel title={titleSerie} series={c.series} />
          </>
        );
      })}
      <CategoryCarousel films={films} title="All films" />
      <CategoryCarousel series={series} title="All series" />
    </StyledHome>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();
  const res_series = await fetch(`${API_URL}/series`);
  const series = await res_series.json();

  // Get the categories with more than 1 film and 1 serie
  const query = qs.stringify({
    _where: [{ films_gte: 5 }, { series_gte: 5 }],
  });
  const res_categories = await fetch(`${API_URL}/categories?${query}`);
  const categories = await res_categories.json();

  return {
    props: { films, series, categories },
  };
}
