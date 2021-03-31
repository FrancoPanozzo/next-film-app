import React from 'react';
import styled from 'styled-components';
import FilmCard from 'components/FilmCard';
import SerieCard from 'components/SerieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

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

  .swiper-container {
    &:hover {
      .swiper-button-prev:not(.swiper-button-disabled),
      .swiper-button-next:not(.swiper-button-disabled) {
        display: flex;
      }
    }
  }

  .swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    position: absolute;
    color: white;
    top: 50%;
    height: 100%;
    width: auto;
    margin: 0;
    transition: color 0.2s ease;
    padding: 0 15px;
    background-color: rgba(20, 20, 20, 0.8);

    &:hover {
      color: red;
    }
  }
  .swiper-button-prev {
    left: 0;
    transform: translateY(-50%);
  }
  .swiper-button-next {
    right: 0;
    transform: translateY(-50%);
  }
  .swiper-slide {
    height: 42vh;
    width: 28vh;
  }
`;

export default function CategoryCarousel({ films, series, title }) {
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
      <h2>{title}:</h2>
      <Swiper
        spaceBetween={4}
        slidesPerView={'auto'}
        allowTouchMove={false}
        navigation
      >
        {films ? filmsList() : series ? seriesList() : null}
      </Swiper>
    </StyledCategoryCarousel>
  );
}
