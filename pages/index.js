import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import CategoryCarousel from 'components/CategoryCarousel';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyledHome = styled.main``;

export default function Home({ films, series }) {
  return (
    <StyledHome>
      <CategoryCarousel films={films} />
      <CategoryCarousel series={series} />
    </StyledHome>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res_films = await fetch(`${API_URL}/films`);
  const films = await res_films.json();
  const res_series = await fetch(`${API_URL}/series`);
  const series = await res_series.json();

  return {
    props: { films, series },
  };
}
