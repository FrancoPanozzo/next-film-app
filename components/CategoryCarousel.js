import React from 'react';
import styled from 'styled-components';
import FilmCard from 'components/FilmCard';
import SerieCard from 'components/SerieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const StyledCategoryCarousel = styled.div`
  margin-top: 3vw !important;
  margin-bottom: 3vw !important;

  h2 {
    font-size: 12px;
    @media screen and (min-width: 1000px) {
      font-size: 1.4vw;
    }
    vertical-align: bottom;
    margin-bottom: 8px;
  }
`;

export default function CategoryCarousel({ films, series }) {
  function filmsList() {
    return films.map((film) => (
      <SwiperSlide key={film.id}>
        <FilmCard film={film} />
      </SwiperSlide>
    ));
  }
  function seriesList() {
    return series.map((serie) => (
      <SwiperSlide key={serie.id}>
        <SerieCard key={serie.id} serie={serie} />
      </SwiperSlide>
    ));
  }
  return (
    <StyledCategoryCarousel className="container">
      {films ? <h2>All films:</h2> : <h2>All series:</h2>}
      <Swiper spaceBetween={4} slidesPerView={'auto'}>
        {films ? filmsList() : series ? seriesList() : null}
      </Swiper>
    </StyledCategoryCarousel>
  );
}
